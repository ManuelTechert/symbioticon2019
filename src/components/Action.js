import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../components/theme'
import { Row, Item } from './Flex'

import checked from '../Assets/checked.svg'
import unchecked from '../Assets/unchecked.svg'

const TaskTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin: 0px;
`
const ActionCheck = ({ check, setCheck }) => {
  return (
    <div onClick={() => setCheck(!check)}>
      {check ? <ActionChecked /> : <ActionUnchecked />}
    </div>
  )
}

const ActionChecked = () => {
  return (
    <img
      src={checked}
      alt="checked"
      style={{ height: '32px', width: '32px' }}
    />
  )
}

const ActionUnchecked = () => {
  return (
    <img
      src={unchecked}
      alt="unchecked"
      style={{ height: '32px', width: '32px' }}
    />
  )
}

const Action = ({ action, time, checked }) => {
  const [check, setCheck] = useState(checked)

  return (
    <Row style={{ alignItems: 'center' }}>
      <Item flex={5}>
        <TaskTitle>{action}</TaskTitle>
        <span>{time}</span>
      </Item>
      <ActionCheck check={check} setCheck={setCheck} />
    </Row>
  )
}

export default Action
