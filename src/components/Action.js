import React, { useState } from 'react'
import { Smaller } from '../components/globals/index'
import { Row, Item } from './Flex'
import { CheckCircle, Circle } from 'react-feather'

const ActionCheck = ({ check, setCheck }) => {
  return (
    <div onClick={() => setCheck(!check)}>
      {check ? <CheckCircle style={{ color: 'green' }} /> : <Circle />}
    </div>
  )
}

const Action = ({ action, time, checked }) => {
  const [check, setCheck] = useState(checked)

  return (
    <Row>
      <Item flex={5}>
        {action}
        <Smaller>{time}</Smaller>
      </Item>
      <Item justifyContent="flex-end">
        <ActionCheck check={check} setCheck={setCheck} />
      </Item>
    </Row>
  )
}

export default Action
