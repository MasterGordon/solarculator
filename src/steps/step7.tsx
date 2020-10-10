import { XYPlot, VerticalBarSeries } from "react-vis";
import React from "react";
import { Box } from "rebass";
import Heading from "../components/Topic";
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
      <Heading variation="medium" marginTop="1.5em">
        {lang.step7.performance}
      </Heading>
      <Heading variation="medium" marginTop="1.5em">
        {lang.step7.text}
      </Heading>
      <Heading variation="large">{lang.step7.saving}</Heading>
      <Heading marginTop="0.5em" variation="medium">
        {lang.step7.contact}
      </Heading>
      <Heading variation="large" marginTop="0.5em">
        {lang.step7.amortisation}
      </Heading>
      <Box
        marginTop="1em"
        display="block"
        marginLeft="auto"
        marginRight="auto"
        width="400px"
        css={{
          boxShadow: "1px 1px 20px 1px rgba(0,0,0,.22)",
        }}
      >
        <XYPlot height={200} width={400}>
          <VerticalBarSeries data={data} barWidth={2} />
        </XYPlot>
      </Box>
    </>
  );
}

export default Step7;
