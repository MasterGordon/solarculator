import React from 'react'
import { Box, Image } from 'rebass'
import Heading from '../components/Topic'
import InputField from '../components/InputField'
import lang from '../resources/lang.json'
import { observer } from 'mobx-react-lite'
import SolarCulator from '../logic/solarculator'

const Step5 = observer(({ solarculator }: { solarculator: SolarCulator }) => {
  return (
    <>
      <Heading variation="large">{lang.step5.headline}</Heading>
      <Heading variation="medium">{lang.step5.text}</Heading>
      <Box marginTop="1em">
        <Image
          src="/images/Map.png"
          width="65%"
          display="block"
          marginLeft="auto"
          marginRight="auto"
        />
      </Box>
      <Box marginTop="1em">
        <Heading variation="medium">{lang.step5.postalCode}</Heading>
        <InputField
          value={solarculator.address}
          onChange={(e) => solarculator.setAddress(e.target.value)}
        />
      </Box>
    </>
  )
})

export default Step5
