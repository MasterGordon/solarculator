import React, { useState } from 'react'
import { Flex, Box, Image } from 'rebass'
import BigButton from '../components/BigButton'
import Heading from '../components/Topic'
import InputField from '../components/InputField'
import lang from '../resources/lang.json'
import config from '../config.json'
import { observer } from 'mobx-react-lite'
import SolarCulator from '../logic/solarculator'

const Step1 = observer(({ solarculator }: { solarculator: SolarCulator }) => {
  const [selected, setSelected] = useState(0)
  return (
    <>
      <Heading variation="large">{lang.step1.headline}</Heading>
      <Heading variation="medium">{lang.step1.text}</Heading>
      <Flex flexWrap="wrap" mx={-2} marginTop="1em">
        <BigButton
          height="175px"
          selected={selected}
          index={1}
          onClick={() => {
            setSelected(1)
            solarculator.setPowerUsagePerYear(
              config.defaultValues.powerUsage.germany['1PersonkWh'],
            )
          }}
        >
          <Box height="90%">
            <Image
              css={{
                position: 'relative',
                top: '50%',
                transform: 'translate(0, -50%)',
              }}
              src="/images/OnePerson.png"
            />
          </Box>
          <Box height="10%">{lang.step1.buttons[0]}</Box>
        </BigButton>
        <BigButton
          height="175px"
          selected={selected}
          index={2}
          onClick={() => {
            setSelected(2)
            solarculator.setPowerUsagePerYear(
              config.defaultValues.powerUsage.germany['23PersonkWh'],
            )
          }}
        >
          <Box height="90%">
            <Image
              css={{
                position: 'relative',
                top: '50%',
                transform: 'translate(0, -50%)',
              }}
              src="/images/TwoPersons.png"
            />
          </Box>
          <Box height="10%">{lang.step1.buttons[1]}</Box>
        </BigButton>
        <BigButton
          height="175px"
          selected={selected}
          index={3}
          onClick={() => {
            setSelected(3)
            solarculator.setPowerUsagePerYear(
              config.defaultValues.powerUsage.germany['45PersonkWh'],
            )
          }}
        >
          <Box height="90%">
            <Image
              css={{
                position: 'relative',
                top: '50%',
                transform: 'translate(0, -50%)',
              }}
              src="/images/FourPersons.png"
            />
          </Box>
          <Box height="10%">{lang.step1.buttons[2]}</Box>
        </BigButton>
        <BigButton
          height="175px"
          selected={selected}
          index={4}
          onClick={() => {
            setSelected(4)
            solarculator.setPowerUsagePerYear(
              config.defaultValues.powerUsage.germany['morekWh'],
            )
          }}
        >
          <Box height="90%">
            <Image
              css={{
                position: 'relative',
                top: '50%',
                transform: 'translate(0, -50%)',
              }}
              src="/images/MorePersons.png"
            />
          </Box>
          <Box height="10%">{lang.step1.buttons[3]}</Box>
        </BigButton>
      </Flex>
      <Box marginTop="1em">
        <Heading variation="medium">{lang.step1.unit}</Heading>
        <InputField
          value={solarculator.powerUsagePerYear}
          type="number"
          onChange={(e) => {
            setSelected(0)
            solarculator.setPowerUsagePerYear(Number(e.target.value))
          }}
        ></InputField>
      </Box>
    </>
  )
})

export default Step1
