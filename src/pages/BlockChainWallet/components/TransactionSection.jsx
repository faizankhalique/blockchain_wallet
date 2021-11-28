import React from "react";

import Card from "components/Card";
import RowContainer from "components/RowContainer";
import Typography from "components/Typography";
import Table from "components/Table";
import Button from "components/Button";

function TransactionSection({
  transactions,
  headerRows,
  onDelete,
  onAddSender,
  isSendAble,
}) {
  return (
    <Card>
      <RowContainer
        styles={{
          with: "100%",
          justifyContent: "space-between",
          margin: "20px 0px",
        }}
      >
        <Typography type="h3">Sender</Typography>
        <Button
          title="Add Sender"
          onClick={onAddSender}
          disabled={isSendAble}
        />
      </RowContainer>
      <Table headerRows={headerRows} rows={transactions} onDelete={onDelete} />
    </Card>
  );
}

export default TransactionSection;
