import React from 'react'
import styled from 'styled-components'

import boy from './boy.png'

const Image = styled.img`
  height: 70px;
  weight: 70px;
`

const Avatar = () => <Image src={boy} />

export default Avatar
