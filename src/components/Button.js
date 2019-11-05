import React from 'react'
import styled from 'styled-components'
import { theme } from './theme'
import { Shadows } from './globals'

export const Button = styled.button`
  background-color: ${props => (props.bg ? props.bg : theme.brand.red)};
  border-radius: 12px;
  border: none;
  padding: 8px 16px 8px 16px;
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: ${props => (props.color ? props.color : theme.bg.default)};

  ${Shadows.default};

  &:hover {
    ${Shadows.hover};
  }

  &:active {
    ${Shadows.active};
  }
`

const SmallButton = styled.div`
  color: white;
  background-color: red;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  text-align: center;
  font-size: small;
`

export const ButtonSmall = props => <SmallButton {...props} />

const YellowButton = styled.div`
  background-color: #f4d96d;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  text-align: center;
  font-size: larger;
`

export const ButtonYellow = props => <YellowButton {...props} />

export const ButtonRed = styled.div`
  background-color: #ff5a5f;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  text-align: center;
  font-size: larger;
`

export const ButtonWhite = styled.div`
  background-color: white;
  color: #f4d96d;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  text-align: center;
  font-size: larger;
`
