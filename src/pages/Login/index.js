import React, { useState } from 'react'
import { Container, Title, Card } from '../../components/globals'
import LabelField from '../../components/LabelField'
import { Button } from '../../components/Button'
import ThriveImage from './thrivelogin.svg'

import { HugeTitle, Subtitle } from './style'

const Login = ({ setUserId }) => {
  const [benutzer, setBenutzer] = useState('deere')
  const [password, setPassword] = useState('')

  const inputLabel = (
    <input
      value={benutzer}
      onChange={e => setBenutzer(e.target.value)}
      autoFocus
    />
  )
  const inputPassword = (
    <input
      type="password"
      value={password}
      onChange={e => setPassword(e.target.value)}
    />
  )

  return (
    <Container>
      <HugeTitle>Thrive 🌱</HugeTitle>
      <Subtitle>Dein Begleiter auf dem Weg zum gesünderen Ich</Subtitle>
      <br />
      <img src={ThriveImage} alt="thrive" width="100%" />
      <div style={{ marginBottom: '32px' }} />
      <Card>
        <LabelField label="Benutzer" field={inputLabel} />
        {/* <hr color="lightgrey" />
        <LabelField label="Passwort" field={inputPassword} /> */}
      </Card>
      <Button
        onClick={() => {
          const userId = benutzer.toLowerCase() > 'n' ? 1 : 0
          setUserId(userId)
        }}
      >
        Einloggen
      </Button>
    </Container>
  )
}

export default Login
