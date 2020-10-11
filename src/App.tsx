import React, { useState } from "react";
import { Box, Button, Flex } from "rebass";
import SolarCulator from "./logic/solarculator";
import lang from "./resources/lang.json";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";
import Step5 from "./steps/step5";
import Step6 from "./steps/step6";
import Step7 from "./steps/step7";

const solarCulator = new SolarCulator();
console.log(solarCulator);

function App() {
  const [step, setStep] = useState(0);
  const steps = [
    <Step1 solarculator={solarCulator}></Step1>,
    <Step2 solarculator={solarCulator}></Step2>,
    <Step3 solarculator={solarCulator}></Step3>,
    <Step4 solarculator={solarCulator}></Step4>,
    <Step5 solarculator={solarCulator}></Step5>,
    <Step6 solarculator={solarCulator}></Step6>,
    <Step7 solarculator={solarCulator}></Step7>,
  ];
  return (
    <Box maxWidth="600px" margin="auto">
      {steps[step]}
      <Flex maxWidth="400px" margin="auto" marginTop="0.75em">
        {step !== 0 && step !== 6 && (
          <Flex width="50%">
            <Button
              width="100px"
              display="block"
              backgroundColor="buttonColor"
              onClick={() => setStep(step - 1)}
              css={{ cursor: "pointer", "&:focus": { outline: "none" } }}
            >
              {lang.general.previous}
            </Button>
          </Flex>
        )}
        {step !== 6 && (
          <Flex width={step === 0 ? "100%" : "50%"} justifyContent="flex-end">
            <Button
              width="100px"
              display="block"
              backgroundColor="buttonColor"
              onClick={async () => {
                if (step === 5) await solarCulator.calculate();
                setStep(step + 1);
              }}
              css={{ cursor: "pointer", "&:focus": { outline: "none" } }}
            >
              {step === 5 ? lang.general.submit : lang.general.next}
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}

export default App;
