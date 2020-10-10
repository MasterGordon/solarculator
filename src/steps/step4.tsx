import React from "react";
import { Box } from "rebass";
import Heading from "../components/Topic";
import InputField from "../components/InputField";
import lang from "../resources/lang.json";

function Step4() {
  return (
    <>
      <Heading variation="large">{lang.step4.headline}</Heading>
      <Heading variation="medium">{lang.step4.text}</Heading>
      <Box marginTop="1em">
        <Heading variation="medium">{lang.step4.unit}</Heading>
        <InputField type={"number"}></InputField>
      </Box>
    </>
  );
}

export default Step4;
