import React from 'react'
import styled from 'styled-components'

import boy from './boy.png'
import girl from './girl.png'

const Image = styled.img`
  height: 70px;
  weight: 70px;
`

const Avatar = ({ id }) => <Image src={id === 0 ? boy : girl} />

export default Avatar
