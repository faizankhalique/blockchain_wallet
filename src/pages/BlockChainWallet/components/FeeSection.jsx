import React from "react";

import AddressDropdown from "components/Dropdown";
import RowContainer from "components/RowContainer";
import Typography from "components/Typography";
import Card from "components/Card";
import TextInput from "components/TextInput";

function FeeSection({
  textInputLabel,
  dropdownLabel,
  fee,
  feeOptions,
  onChange,
}) {
  return (
    <Card>
      <Typography type="h3">Fee</Typography>
      <RowContainer
        styles={{
          width: "60%",
          justifyContent: "space-between",
          margin: "15px 0px",
        }}
      >
        <AddressDropdown
          label="Option"
          label={dropdownLabel}
          name={dropdownLabel}
          options={feeOptions}
          onChange={onChange}
        />
        <TextInput
          label={textInputLabel}
          name={textInputLabel}
          type="text"
          value={fee}
          onChange={onChange}
        />
      </RowContainer>
    </Card>
  );
}

export default FeeSection;
