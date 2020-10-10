import React, { useState } from "react";
import { Flex, Box, Image } from "rebass";
import BigButton from "../components/BigButton";
import Heading from "../components/Topic";
import InputField from "../components/InputField";
import lang from "../resources/lang.json";

function Step2() {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <Heading variation="large">{lang.step2.headline}</Heading>
      <Heading variation="medium">{lang.step2.text}</Heading>
      <Flex flexWrap="wrap" mx={-2} marginTop="1em">
        <BigButton selected={selected} index={1} onClick={() => setSelected(1)}>
          <Image src="/images/FlatRoof.png" />
          {lang.step2.buttons[0]}
        </BigButton>
        <BigButton selected={selected} index={2} onClick={() => setSelected(2)}>
          <Image src="/images/ShedRoof.png" />
          {lang.step2.buttons[1]}
        </BigButton>
        <BigButton selected={selected} index={3} onClick={() => setSelected(3)} margin={"auto"}>
          <Image src="/images/GableRoof.png" />
          {lang.step2.buttons[2]}
        </BigButton>
      </Flex>
      <Box marginTop="1em">
        <Heading variation="medium">{lang.step2.unit}</Heading>
        <InputField type={"number"} onChange={() => setSelected(0)} />
      </Box>
    </>
  );
}

export default Step2;
