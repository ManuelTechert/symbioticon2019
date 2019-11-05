import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Label = styled.span`
  text-align: center;
`

const Field = styled.span`
  align: right;
`

const Box = styled.input`
  type: checkbox;
  color: #ecedee;
  width: 16px;
  border-radius: 5px;
  whitespace: pre;
`

const CheckBoxDetails = ({ value }) => {
  return (
    <Container>
      <Label>
        <Box />
        &nbsp;
        {value}
      </Label>
      <Field>&gt;</Field>
    </Container>
  )
}

export default CheckBoxDetails
