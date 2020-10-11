import React from "react";
import { Flex, Box, Image } from "rebass";
import BigButton from "../components/BigButton";
import Heading from "../components/Topic";
import InputField from "../components/InputField";
import lang from "../resources/lang.json";
import { observer } from "mobx-react-lite";
import SolarCulator from "../logic/solarculator";

const Step2 = observer(({ solarculator }: { solarculator: SolarCulator }) => {
  return (
    <>
      <Heading variation="large">{lang.step2.headline}</Heading>
      <Heading variation="medium">{lang.step2.text}</Heading>
      <Flex flexWrap="wrap" mx={-2} marginTop="1em">
        <BigButton
          selected={solarculator.roofType}
          index={1}
          onClick={() => {
            solarculator.setRoofType(1);
          }}
        >
          <Image src="/images/FlatRoof.png" />
          {lang.step2.buttons[0]}
        </BigButton>
        <BigButton
          selected={solarculator.roofType}
          index={2}
          onClick={() => {
            solarculator.setRoofType(2);
          }}
        >
          <Image src="/images/ShedRoof.png" />
          {lang.step2.buttons[1]}
        </BigButton>
        <BigButton
          selected={solarculator.roofType}
          index={3}
          onClick={() => {
            solarculator.setRoofType(3);
          }}
          margin={"auto"}
        >
          <Image src="/images/GableRoof.png" />
          {lang.step2.buttons[2]}
        </BigButton>
      </Flex>
      <Box marginTop="1em">
        <Heading variation="medium">{lang.step2.unit}</Heading>
        <InputField
          value={solarculator.roofAngle}
          type={"number"}
          onChange={(e) => solarculator.setRoofAngle(Number(e.target.value))}
        />
      </Box>
    </>
  );
});

export default Step2;
