import { XYPlot, VerticalBarSeries, XAxis, YAxis } from "react-vis";
import React from "react";
import { Box } from "rebass";
import Heading from "../components/Topic";
import lang from "../resources/lang.json";
import { observer } from "mobx-react-lite";
import SolarCulator from "../logic/solarculator";

const Step7 = observer(({ solarculator }: { solarculator: SolarCulator }) => {
  return (
    <>
      <Heading variation="large">{lang.step7.headline}</Heading>
      <Heading variation="medium" marginTop="1.5em">
        {lang.step7.performance.replace(
          "{powerOutputPerYear}",
          String(Math.round(solarculator.powerOutputPerYear))
        )}
      </Heading>
      <Heading variation="medium" marginTop="1.5em">
        {lang.step7.text}
      </Heading>
      <Heading variation="large">
        {lang.step7.saving.replace(
          "{totalMoneySaving}",
          String(Math.round(solarculator.totalMoneySaving))
        )}
      </Heading>
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
        width="500px"
        css={{
          boxShadow: "1px 1px 20px 1px rgba(0,0,0,.22)",
        }}
      >
        <XYPlot height={200} width={500} margin={{ left: 80 }}>
          <XAxis hideLine title="Years" />
          <YAxis hideLine title="Balance" />
          <VerticalBarSeries
            data={solarculator.graph}
            barWidth={0.9}
            colorType="literal"
            getColor={(d) => {
              return d.y < 0 ? "#F87F71" : "#A5DD9F";
            }}
          />
        </XYPlot>
      </Box>
    </>
  );
});

export default Step7;
