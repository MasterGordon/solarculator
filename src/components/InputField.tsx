import { Input } from "@rebass/forms";
import React from "react";
import { Box } from "rebass";

const InputField: React.FC<{
  placeholder?: string;
  type?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ placeholder, type, value, onChange }) => {
  return (
    <Box margin="auto" marginTop="0.5em" maxWidth="400px">
      <Input
        value={value}
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
