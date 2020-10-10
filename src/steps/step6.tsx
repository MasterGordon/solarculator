import React from "react";
import { Box } from "rebass";
import Heading from "../components/Topic";
import InputField from "../components/InputField";
import lang from "../resources/lang.json";

function Step6() {
  return (
    <>
      <Heading variation="large">{lang.step6.headline}</Heading>
      <Heading variation="medium">{lang.step6.text}</Heading>
      <Box marginTop="1em">
        <Heading variation="medium">{lang.step6.unit}</Heading>
        <InputField type={"number"} />
      </Box>
    </>
  );
}

export default Step6;
