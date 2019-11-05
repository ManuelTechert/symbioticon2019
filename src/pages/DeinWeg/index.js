import React from 'react'
import {
  CardTitle,
  Container,
  Title,
  Card,
  Smaller,
  Subheading,
} from '../../components/globals'
import { Row, Item } from '../../components/Flex'

import Plant from './Plant.svg'
import FitnessTracker from './fitness_tracker.svg'
import Lowpoints from './LowPoints.svg'
import Mediumpoints from './MediumPoints.svg'
import Highpoints from './Highpoints.svg'
import Hamburger from './Hamburger.svg'

import { ButtonWhite, Button } from '../../components/Button'
import {
  RankingsContainer,
  RankingRow,
  Points,
  Cashback,
  Context,
  Dots,
  PointsLarge,
  CashbackLarge,
} from './style'

import { theme } from '../../components/theme'

const DeinWeg = props => {
  const { userId } = props
  if (userId === 0) return <DeinWegEinsteiger />

  return <DeinWegProfi />
}

const WeitereServices = () => (
  <Card style={{ marginBottom: '96px' }}>
    <CardTitle>Verbinde weitere Services</CardTitle>
    <Row>
      <Item flex={3}>
        <Smaller>
          Je mehr Services und Dienste du verbindest, desto mehr Insights können
          wir dir liefern. Dabei sammelst Du immer weiter Punkte, welche in
          deinen Cashback einfließen.
        </Smaller>
      </Item>
      <Item>
        <img src={FitnessTracker} alt="Fitness Tracker" />
      </Item>
    </Row>
    <Button>Service verbinden</Button>
  </Card>
)

const DeinWegEinsteiger = () => {
  return (
    <Container>
      <Title>Dein Weg</Title>

      <Card>
        <RankingsContainer>
          <RankingRow>
            <img
              src={Lowpoints}
              alt="lowpoints"
              style={{ width: '24px', height: 'auto', marginRight: '16px' }}
            />
            <div>
              <Points>50 Punkte</Points>
              <Cashback>0€ Cashback</Cashback>
              <Context>vor 1 woche</Context>
            </div>
          </RankingRow>

          <RankingRow>
            <img
              src={Mediumpoints}
              alt="medium points"
              style={{ width: '32px', height: 'auto', marginRight: '16px' }}
            />
            <div>
              <PointsLarge>97 Punkte</PointsLarge>
              <CashbackLarge>1€ Cashback</CashbackLarge>
              <Context>heute</Context>
            </div>
          </RankingRow>

          <RankingRow last>
            <img
              src={Highpoints}
              alt="high points"
              style={{ width: '24px', height: 'auto', marginRight: '16px' }}
            />
            <div>
              <Points>107 Punkte</Points>
              <Cashback>5€ Cashback</Cashback>
              <Context>
                in 4 wochen <br /> wenn du so weiter machst
              </Context>
            </div>
          </RankingRow>
        </RankingsContainer>
      </Card>

      <Subheading>
        Bereit für den nächsten <br />
        Schritt?
      </Subheading>
      <Card bg={theme.brand.blue} color={theme.bg.default}>
        <Row>
          <Item flex={3}>
            <CardTitle>Wasser trinken (empfohlen)</CardTitle>
            <span>
              Trinke gleich nach dem Aufstehen ein Glas Wasser, um Deinen Körper
              in Schwung zu bringen
            </span>
          </Item>
          <Item>
            <img src={Plant} alt="Plant" />
          </Item>
        </Row>
      </Card>
      <WeitereServices />
    </Container>
  )
}

const DeinWegProfi = () => {
  return (
    <Container>
      <Title>Dein Weg</Title>
      <Row style={{ paddingBottom: '10px' }}>
        <Item>
          <img src={Lowpoints} alt="low" />
        </Item>
        <Item flex={2}>
          <div style={{ fontSize: '70%' }}>107 Punkte</div>
          <div style={{ fontSize: '100%' }}>7€ Cashback</div>
          <div style={{ fontSize: '50%' }}>VOR ZWEI WOCHEN</div>
        </Item>
      </Row>
      <Row style={{ paddingBottom: '10px' }}>
        <Item>
          <img src={Mediumpoints} alt="medium" />
        </Item>
        <Item flex={2}>
          <div style={{ fontSize: '120%' }}>128 Punkte</div>
          <div style={{ fontSize: '150%' }}>7€ Cashback</div>
          <div style={{ fontSize: '100%' }}>HEUTE</div>
        </Item>
      </Row>
      <Row>
        <Item>
          <img src={Highpoints} alt="high" />
        </Item>
        <Item flex={2}>
          <div style={{ fontSize: '70%' }}>150 Punkte</div>
          <div style={{ fontSize: '100%' }}>8€ Cashback</div>
          <div style={{ fontSize: '50%' }}>
            IN 4 WOCHEN, WENN DU SO WEITERMACHST
          </div>
        </Item>
      </Row>
      <Title>Bereit für den nächsten Schritt?</Title>
      <Card style={{ backgroundColor: '#F4D96D', color: 'black' }}>
        <CardTitle>Ein ausgewogenes Frühstück essen</CardTitle>
        <Row>
          <Item flex={3}>
            <Smaller>
              Dein Frühstück liefert dir die nötige Energie, um dich bei der
              Arbeit besser zu konzentrieren. Die wichtigste Mahlzeit am Tag!
            </Smaller>
          </Item>
          <Item>
            <img src={Hamburger} alt="Hamburger" />
          </Item>
        </Row>
        <ButtonWhite>Dieses Tool ausprobieren</ButtonWhite>
      </Card>
      <WeitereServices />
    </Container>
  )
}

export default DeinWeg
