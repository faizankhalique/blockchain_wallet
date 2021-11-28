import React, { useState, useEffect } from "react";

import FeeSection from "./components/FeeSection";
import ReceiverSection from "./components/ReceiverSection";
import TransactionSection from "./components/TransactionSection";
import SenderSection from "./components/SenderSection";
import Typography from "components/Typography";

const addresses = [
  "boa1456fjknd12345345908nnn78z52n",
  "boa1456fjknd12345345908nnn79z70n",
];
const _senderAddresses = [
  "boa1456fjknd12345345908nnn1324234",
  "boa9996fjknd12345345908nnn97532",
];
const feeOptions = ["Medium", "Selection"];
const headerRows = [
  {
    id: "address",
    label: "Address",
    type: "text",
  },
  {
    id: "drawn",
    label: "Drawn",
    type: "number",
  },
  {
    id: "remaining",
    label: "Remaining",
    type: "number",
  },
  {
    id: "spendableBalance",
    label: "Spendable Balance",
    type: "number",
  },
  {
    id: "balance",
    label: "Balance",
    type: "number",
  },
  {
    id: "action",
    label: "Action",
    type: "icon",
  },
];
function BlockChainWallet(props) {
  const [amount, setAmount] = useState();
  const [fee, setFee] = useState(2.52);
  const [receiverAddress, setReceiverAddress] = useState(addresses[0]);
  const [senderAddress, setSenderAddress] = useState(_senderAddresses[0]);
  const [feeOption, setFeeOption] = useState(feeOptions[0]);
  const [transactions, setTransactions] = useState([]);
  const [senderAmount, setSenderAmount] = useState(100.9999999);
  const [isSendAble, setIsSendAble] = useState(false);

  useEffect(() => {
    if (senderAmount > 0 && fee > 0 && amount > 0) setIsSendAble(false);
    else setIsSendAble(true);
  }, [senderAmount, fee, amount]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "Sender Address":
        setSenderAddress(value);
        break;
      case "Sender Amount":
        if (!isNaN(value)) setSenderAmount(value);
        break;
      case "Address":
        setReceiverAddress(value);
        break;
      case "Amount":
        if (!isNaN(value)) setAmount(value);
        break;
      case "Option":
        setFeeOption(value);
        break;
      case "Fee":
        if (!isNaN(value)) setFee(value);
        break;
    }
  };

  const handleAddSender = () => {
    setTransactions([
      ...transactions,
      {
        id: transactions?.length + 1 || 1,
        address: senderAddress,
        drawn: amount > senderAmount ? senderAmount : amount,
        remaining: senderAmount - amount,
        spendableBalance: senderAmount,
        balance: senderAmount,
        action: "",
        receiverAddress,
        fee,
        feeOption,
      },
    ]);
    setSenderAmount(senderAmount - amount < 0 ? "" : senderAmount - amount);
  };
  const handleDelete = (id) =>
    setTransactions(transactions.filter((t) => t.id !== id));

  return (
    <div style={{ height: "100vh", padding: "10px 20px" }}>
      <Typography
        type="h1"
        styles={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0px",
        }}
      >
        Blockchain Wallet
      </Typography>

      <div
        style={{
          backgroundColor: "#004f9e",
          padding: "10px 15px",
          borderRadius: 5,
        }}
      >
        <SenderSection
          textInputLabel="Sender Amount"
          dropdownLabel={"Sender Address"}
          amount={senderAmount}
          addresses={_senderAddresses}
          onChange={handleChange}
        />
        <ReceiverSection
          textInputLabel="Amount"
          dropdownLabel={"Address"}
          amount={amount}
          addresses={addresses}
          onChange={handleChange}
        />
        <FeeSection
          textInputLabel="Fee"
          dropdownLabel={"Option"}
          fee={fee}
          feeOptions={feeOptions}
          onChange={handleChange}
        />
        <TransactionSection
          transactions={transactions}
          headerRows={headerRows}
          onDelete={handleDelete}
          onAddSender={handleAddSender}
          isSendAble={isSendAble}
        />
      </div>
    </div>
  );
}

export default BlockChainWallet;
