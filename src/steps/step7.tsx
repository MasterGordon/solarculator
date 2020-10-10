import { XYPlot, VerticalBarSeries } from "react-vis";
import React from "react";
import { Box } from "rebass";
import Heading from "../components/Topic";
import InputField from "../components/InputField";
import lang from "../resources/lang.json";

const data = [
  { x: 0, y: 8 },
  { x: 1, y: 5 },
  { x: 2, y: 4 },
  { x: 3, y: 9 },
  { x: 4, y: 1 },
  { x: 5, y: 7 },
  { x: 6, y: 6 },
  { x: 7, y: 3 },
  { x: 8, y: 2 },
  { x: 9, y: -6 },
];

function Step7() {
  return (
    <>
      <Heading variation="large">{lang.step7.headline}</Heading>
      <Heading variation="medium">{lang.step7.text}</Heading>
      <Box marginTop="1em">
        <XYPlot height={200} width={400}>
          <VerticalBarSeries data={data} barWidth={2} />
        </XYPlot>
        <Heading variation="medium">{lang.step7.text}</Heading>
        <InputField type={"number"}></InputField>
      </Box>
    </>
  );
}

export default Step7;
