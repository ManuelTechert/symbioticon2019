import React from 'react'
import styled from 'styled-components'
import { BatteryCharging } from 'react-feather'

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-grow: 1;
  height: 10px;
  padding-top: 0;
  padding-bottom: 0;
`

const Small = styled.span`
  font-size: xsSmall;
`

const Header = () => {
  return (
    <Container>
      <div>
        <Small>9:41</Small>
      </div>
      <div>
        <BatteryCharging height="16px" />
      </div>
    </Container>
  )
}

export default Header
