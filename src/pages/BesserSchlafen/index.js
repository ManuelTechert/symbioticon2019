import React from 'react'
import { Container, Larger, Title } from '../../components/globals'
import { Item, Row } from '../../components/Flex'
import Schlafen from './Schlafen.svg'
import { ButtonRed } from '../../components/Button'
import { useHistory } from 'react-router-dom'

const BesserSchlafen = () => {
  const history = useHistory()

  return (
    <Container>
      <div
        style={{
          backgroundColor: '#FF5A5F',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <Title>Besser schlafen</Title>
        <Row style={{ paddingBottom: '10px' }}>
          <Item>
            <img src={Schlafen} alt="sportler" width="100%" />
            <Larger>Dunkler, leiser, kühler</Larger>
            <div>
              Schaffe eine perfekte Schlafumgebung! Achte darauf, welche Geräusche dich aufwecken und denke darüber
              nach, wie du sie neutralisieren kannst. Beseitige alle Lichtquellen und lass frische Luft in den Raum
              bevor du schlafen gehst.
            </div>
            <hr />
            <div>
              Diese Routine hilft dir nachweislich deinen Schlaf zu verbessern und erholter in den nächsten Tag zu
              starten.
            </div>
          </Item>
        </Row>
      </div>
      <ButtonRed onClick={() => history.push('/home')}>
        Routine starten
      </ButtonRed>
    </Container>
  )
}

export default BesserSchlafen
