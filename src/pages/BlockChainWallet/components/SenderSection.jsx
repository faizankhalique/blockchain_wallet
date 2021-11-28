import React from "react";

import AddressDropdown from "components/Dropdown";
import RowContainer from "components/RowContainer";
import Typography from "components/Typography";
import Card from "components/Card";
import TextInput from "components/TextInput";

function SenderSection({
  textInputLabel,
  dropdownLabel,
  amount,
  addresses,
  onChange,
}) {
  return (
    <Card>
      <Typography type="h3">Sender</Typography>
      <RowContainer
        styles={{
          width: "60%",
          justifyContent: "space-between",
          margin: "15px 0px",
        }}
      >
        <AddressDropdown
          label={dropdownLabel}
          name={dropdownLabel}
          options={addresses}
          onChange={onChange}
        />
        <TextInput
          label={textInputLabel}
          name={textInputLabel}
          type="text"
          value={amount}
          onChange={onChange}
        />
      </RowContainer>
    </Card>
  );
}

export default SenderSection;
