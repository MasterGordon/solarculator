import React from 'react'
import { Box } from 'rebass'
import Heading from '../components/Topic'
import InputField from '../components/InputField'
import lang from '../resources/lang.json'
import { observer } from 'mobx-react-lite'
import SolarCulator from '../logic/solarculator'

const Step6 = observer(({ solarculator }: { solarculator: SolarCulator }) => {
  return (
    <>
      <Heading variation="large">{lang.step6.headline}</Heading>
      <Heading variation="medium">{lang.step6.text}</Heading>
      <Box marginTop="1em">
        <Heading variation="medium">{lang.step6.unit}</Heading>
        <InputField
          value={solarculator.currentPowerPrice}
          type={'number'}
          onChange={(e) =>
            solarculator.setCurrentPowerPrice(Number(e.target.value))
          }
        />
      </Box>
    </>
  )
})

export default Step6
