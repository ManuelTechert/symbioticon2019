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
import Starpoints from './starpoints.svg'

import Hamburger from './Hamburger.svg'

import { Button } from '../../components/Button'
import {
  RankingsContainer,
  RankingRow,
  Points,
  Cashback,
  Context,
  PointsLarge,
  CashbackLarge,
} from './style'

import { theme } from '../../components/theme'
import { Info } from 'react-feather'

const DeinWeg = props => {
  const { userId } = props
  if (userId === 0) return <DeinWegEinsteiger />

  return <DeinWegProfi />
}

const WeitereServices = () => (
  <Card style={{ marginBottom: '96px' }}>
    <CardTitle>Verbinde weitere Services</CardTitle>
    <Row style={{ alignItems: 'flex-end' }}>
      <Item flex={3}>
        <Smaller>
          Je mehr Services und Dienste du verbindest, desto mehr Insights können
          wir dir liefern. Dabei sammelst Du immer weiter Punkte, welche in
          deinen Cashback einfließen.
        </Smaller>
      </Item>
      <Item>
        <img
          src={FitnessTracker}
          alt="Fitness Tracker"
          style={{ height: '96px' }}
        />
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
      <Card>
        <RankingsContainer>
          <RankingRow>
            <img
              src={Mediumpoints}
              alt="medium points"
              style={{ width: '24px', height: 'auto', marginRight: '16px' }}
            />
            <div>
              <Points>107 Punkte</Points>
              <Cashback>5€ Cashback</Cashback>
              <Context>vor 2 wochen</Context>
            </div>
          </RankingRow>

          <RankingRow>
            <img
              src={Highpoints}
              alt="high points"
              style={{ width: '32px', height: 'auto', marginRight: '16px' }}
            />
            <div>
              <PointsLarge>128 Punkte</PointsLarge>
              <CashbackLarge>7€ Cashback</CashbackLarge>
              <Context>heute</Context>
            </div>
          </RankingRow>

          <RankingRow last>
            <img
              src={Starpoints}
              alt="star points"
              style={{ width: '24px', height: 'auto', marginRight: '16px' }}
            />
            <div>
              <Points>150 Punkte</Points>
              <Cashback>8€ Cashback</Cashback>
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
      <Card bg={theme.brand.yellow}>
        <span
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <CardTitle>Ein ausgewogenes Frühstück essen</CardTitle>
          <Info color={theme.brand.grey} />
        </span>
        <Row>
          <Item flex={3}>
            <Smaller>
              Dein Frühstück liefert dir die nötige Energie, um dich bei der
              Arbeit besser zu konzentrieren. Die wichtigste Mahlzeit am Tag!
            </Smaller>
          </Item>
          <Item>
            <img src={Hamburger} alt="Hamburger" style={{ height: '96px' }} />
          </Item>
        </Row>
        <Button bg={theme.bg.default} color={theme.text.default}>
          Dieses Tool ausprobieren
        </Button>
      </Card>
      <WeitereServices />
    </Container>
  )
}

export default DeinWeg
