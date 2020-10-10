import React, { useState } from "react";
import { Box, Button, Flex } from "rebass";
import lang from "./resources/lang.json";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";
import Step5 from "./steps/step5";
import Step6 from "./steps/step6";
import Step7 from "./steps/step7";

function App() {
  const [step, setStep] = useState(0);
  const steps = [
    <Step7></Step7>,
    <Step2></Step2>,
    <Step3></Step3>,
    <Step4></Step4>,
    <Step5></Step5>,
    <Step6></Step6>,
  ];
  return (
    <Box maxWidth="600px" margin="auto">
      {steps[step]}
      <Flex maxWidth="400px" margin="auto" marginTop="0.75em">
        {step !== 0 && (
          <Flex width="50%">
            <Button
              width="100px"
              display="block"
              backgroundColor="buttonColor"
              onClick={() => setStep(step - 1)}
            >
              {lang.general.previous}
            </Button>
          </Flex>
        )}
        <Flex width={step === 0 ? "100%" : "50%"} justifyContent="flex-end">
          <Button
            width="100px"
            display="block"
            backgroundColor="buttonColor"
            onClick={() => setStep(step + 1)}
          >
            {lang.general.next}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
