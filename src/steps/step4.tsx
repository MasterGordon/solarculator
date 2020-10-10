import React from "react";
import { Box, Image } from "rebass";
import Heading from "../components/Topic";
import InputField from "../components/InputField";
import lang from "../resources/lang.json";

function Step4() {
  return (
    <>
      <Heading variation="large">{lang.step4.headline}</Heading>
      <Heading variation="medium">{lang.step4.text}</Heading>
      <Box marginTop="1em">
        <Image
          src="/images/RoofArea.png"
          width="50%"
          display="block"
          marginLeft="auto"
          marginRight="auto"
          css={{
            boxShadow: "1px 1px 20px 1px rgba(0,0,0,.22)",
          }}
        />
      </Box>
      <Box marginTop="1em">
        <Heading variation="medium">{lang.step4.unit}</Heading>
        <InputField type={"number"} />
      </Box>
    </>
  );
}

export default Step4;
