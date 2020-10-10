import React, { useState } from 'react'
import { Flex, Box } from 'rebass'
import BigButton from '../components/BigButton'
import Heading from '../components/Topic'
import InputField from '../components/InputField'
import lang from '../resources/lang.json'
import { observer } from 'mobx-react-lite'
import SolarCulator from '../logic/solarculator'

const Step3 = observer(({ solarculator }: { solarculator: SolarCulator }) => {
  const [selected, setSelected] = useState(0)
  return (
    <>
      <Heading variation="large">{lang.step3.headline}</Heading>
      <Heading variation="medium">{lang.step3.text}</Heading>
      <Flex flexWrap="wrap" mx={-2} marginTop="1em">
        <BigButton
          selected={selected}
          index={1}
          onClick={() => {
            setSelected(1)
            solarculator.setRoofOrientation(180)
          }}
        >
          {lang.step3.buttons[0]}
        </BigButton>
        <BigButton
          selected={selected}
          index={2}
          onClick={() => {
            setSelected(2)
            solarculator.setRoofOrientation(135)
          }}
        >
          {lang.step3.buttons[1]}
        </BigButton>
        <BigButton
          selected={selected}
          index={3}
          onClick={() => {
            setSelected(3)
            solarculator.setRoofOrientation(90)
          }}
        >
          {lang.step3.buttons[2]}
        </BigButton>
        <BigButton
          selected={selected}
          index={4}
          onClick={() => {
            setSelected(4)
            solarculator.setRoofOrientation(45)
          }}
        >
          {lang.step3.buttons[3]}
        </BigButton>
        <BigButton
          selected={selected}
          index={5}
          onClick={() => {
            setSelected(5)
            solarculator.setRoofOrientation(0)
          }}
        >
          {lang.step3.buttons[4]}
        </BigButton>
        <BigButton
          selected={selected}
          index={6}
          onClick={() => {
            setSelected(6)
            solarculator.setRoofOrientation(45)
          }}
        >
          {lang.step3.buttons[5]}
        </BigButton>
        <BigButton
          selected={selected}
          index={7}
          onClick={() => {
            setSelected(7)
            solarculator.setRoofOrientation(90)
          }}
        >
          {lang.step3.buttons[6]}
        </BigButton>
        <BigButton
          selected={selected}
          index={8}
          onClick={() => {
            setSelected(8)
            solarculator.setRoofOrientation(135)
          }}
        >
          {lang.step3.buttons[7]}
        </BigButton>
      </Flex>
      <Box marginTop="1em">
        <Heading variation="medium">{lang.step3.unit}</Heading>
        <InputField
          value={solarculator.roofOrientation}
          type={'number'}
          onChange={(e) => {
            setSelected(0)
            solarculator.setRoofOrientation(Number(e.target.value))
          }}
        />
      </Box>
    </>
  )
})

export default Step3
