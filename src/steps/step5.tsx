import React from "react";
import { Box, Flex, Image } from "rebass";
import Heading from "../components/Topic";
import InputField from "../components/InputField";
import lang from "../resources/lang.json";

function Step5() {
  return (
    <>
      <Heading variation="large">{lang.step5.headline}</Heading>
      <Heading variation="medium">{lang.step5.text}</Heading>
      <Flex flexWrap="wrap" mx={-2} marginTop="1em">
        <Image
          display="block"
          marginLeft="auto"
          marginRight="auto"
          width="65%"
          src="/images/Map.png"
        />
      </Flex>
      <Box marginTop="1em">
        <Heading variation="medium">{lang.step5.postalCode}</Heading>
        <InputField></InputField>
      </Box>
    </>
  );
}

export default Step5;
