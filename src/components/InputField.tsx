import { Input } from "@rebass/forms";
import React from "react";
import { Box } from "rebass";

const InputField: React.FC<{
  placeholder?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ placeholder, type, onChange }) => {
  return (
    <Box margin="auto" marginTop="0.5em" maxWidth="400px">
      <Input
        css={{ textAlign: "center", "&:focus": { outlineColor: "black" } }}
        display="inline-block"
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Box>
  );
};

export default InputField;
