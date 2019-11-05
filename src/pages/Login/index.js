import React, { useState } from 'react'
import { CardTitle, Container, Title, Card } from '../../components/globals'
import LabelField from '../../components/LabelField'
import { Button } from '../../components/Button'

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
      <Title>Thrive</Title>
      <CardTitle>Login</CardTitle>
      <Card>
        <LabelField label="Benutzer" field={inputLabel} />
        <hr color="lightgrey" />
        <LabelField label="Passwort" field={inputPassword} />
      </Card>
      <Button
        onClick={() => {
          const userId = benutzer.toLowerCase() > 'n' ? 1 : 0
          setUserId(userId)
        }}
      >
        einloggen
      </Button>
    </Container>
  )
}

export default Login
