import React from 'react'
import styled from 'styled-components'

import boy from './john.svg'
import girl from './sarah.svg'

const Image = styled.img`
  height: 48px;
  weight: 48px;
`

const Avatar = ({ id }) => <Image src={id === 0 ? boy : girl} />

export default Avatar
