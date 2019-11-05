import React from 'react'
import {
  CardTitle,
  Container,
  Title,
  Card,
  Smaller,
} from '../../components/globals'
import { Row, Item } from '../../components/Flex'
import Plant from './Plant.svg'
import FitnessTracker from './fitness_tracker.svg'
import Lowpoints from './LowPoints.svg'
import Mediumpoints from './MediumPoints.svg'
import Highpoints from './Highpoints.svg'

const DeinWeg = props => {
  const { userId } = props
  if (userId === 0) return <DeinWegEinsteiger />

  return <DeinWegProfi />
}

const DeinWegEinsteiger = () => {
  return (
    <Container>
      <Title>Dein Weg</Title>
      <Row style={{ paddingBottom: '10px' }}>
        <Item>
          <img src={Lowpoints} alt="low" />
        </Item>
        <Item flex={2}>
          <div style={{ fontSize: '70%' }}>32 Punkte</div>
          <div style={{ fontSize: '100%' }}>1€ Cashback</div>
          <div style={{ fontSize: '50%' }}>VOR ZWEI WOCHEN</div>
        </Item>
      </Row>
      <Row style={{ paddingBottom: '10px' }}>
        <Item>
          <img src={Mediumpoints} alt="medium" />
        </Item>
        <Item flex={2}>
          <div style={{ fontSize: '120%' }}>97 Punkte</div>
          <div style={{ fontSize: '150%' }}>5€ Cashback</div>
          <div style={{ fontSize: '100%' }}>HEUTE</div>
        </Item>
      </Row>
      <Row>
        <Item>
          <img src={Highpoints} alt="high" />
        </Item>
        <Item flex={2}>
          <div style={{ fontSize: '70%' }}>107 Punkte</div>
          <div style={{ fontSize: '100%' }}>7€ Cashback</div>
          <div style={{ fontSize: '50%' }}>
            IN 4 WOCHEN, WENN DU SO WEITERMACHST
          </div>
        </Item>
      </Row>
      <Title>Bereit für den nächsten Schritt?</Title>
      <Card style={{ backgroundColor: '#067AE4', color: 'white' }}>
        <Row>
          <Item flex={3}>
            <CardTitle>Wasser trinken (empfohlen)</CardTitle>
            <Smaller>
              Trinke gleich nach dem Aufstehen ein Glas Wasser, um Deinen Körper
              in Schwung zu bringen
            </Smaller>
          </Item>
          <Item>
            <img src={Plant} alt="Plant" />
          </Item>
        </Row>
      </Card>
      <Card>
        <Row>
          <Item flex={3}>
            <CardTitle>Verbinde weitere Services</CardTitle>
            <Smaller>
              Je mehr Services und Dienste du verbindest, desto mehr Insights
              können wir dir liefern.
            </Smaller>
          </Item>
          <Item>
            <img src={FitnessTracker} alt="Fitness Tracker" />
          </Item>
        </Row>
      </Card>
    </Container>
  )
}

const DeinWegProfi = () => {
  return (
    <Container>
      <Title>Dein Weg</Title>
      Profi tbd
    </Container>
  )
}

export default DeinWeg
