import React from 'react'
import {
  Card,
  CardTitle,
  Container,
  Title,
  Subheading,
} from '../../components/globals'
import { Button } from '../../components/Button'
import Action from '../../components/Action'
import LabelField from '../../components/LabelField'
import user from '../../Assets/User.png'
import { useHistory } from 'react-router-dom'
import { Item, Row } from '../../components/Flex'
import WomanRunning from './woman_running.svg'
import tracker from '../../Assets/draw-tracker.svg'
import { theme } from '../../components/theme'
import { Ball, BallContainer } from './style'
import drawSleep from './draw-sleep.svg'
import drawSports from './draw-sports.svg'
import { Info } from 'react-feather'

const Woche = () => {
  return (
    <BallContainer>
      <Ball filled>M</Ball>
      <Ball filled>D</Ball>
      <Ball>M</Ball>
      <Ball>D</Ball>
      <Ball>F</Ball>
    </BallContainer>
  )
}

const ErsteChallenge = () => {
  return (
    <Card
      bg={theme.brand.yellow}
      // onClick={() => history.push(path)}
    >
      <CardTitle>Starte deine erste Challenge</CardTitle>
      <Row>
        <Item flex={7}>
          Mehr Aktivität im Alltag! Mit 7 Minuten am Tag gehst Du due ersten
          Schritte zu deinem gesünderen Ich.
        </Item>
        <Item>
          <img src={WomanRunning} alt="Woman running" />
        </Item>
      </Row>
      <Woche tag={2} />
    </Card>
  )
}
const Schlaf = () => {
  return (
    <Card>
      <span
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <CardTitle>Verbessere deinen Schlaf</CardTitle>
        <Info color={theme.brand.grey} />
      </span>

      <Row>
        <Item flex={7}>
          Basierend auf deinen letzten Workout Daten solltest du besonderen
          Fokus auf deinen Schlaf legen. Hier eine kurze Routine um deine
          Ruhezeit zu optimieren und morgens besser durchzustarten..
        </Item>
        <Item>
          <img
            src={drawSleep}
            alt="Person sleeping"
            style={{ height: '120px' }}
          />
        </Item>
      </Row>
      <Button>Dunkler, leiser, kühler annehmen</Button>
    </Card>
  )
}
const Schwimmkurs = () => {
  return (
    <Card bg={theme.brand.blue} color={theme.bg.default}>
      <CardTitle>Schwimmkurs in deiner Nähe</CardTitle>
      <Row>
        <Item flex={7}>
          Du willst deine Technik verbessern und einen einfachen Einstieg in das
          sportliche Schwimmen erhalten? Dann bist du beim Schwimmkurs im
          Hallenbad Kiesstein genau richtig!
        </Item>
      </Row>
      <div
        style={{ textAlign: 'center', marginTop: '24px', marginBottom: '16px' }}
      >
        <img src={drawSports} alt="People making sport" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <Button bg={theme.bg.default} color={theme.brand.blue}>
          Jetzt informieren
        </Button>
      </div>
    </Card>
  )
}

const actionsEinsteiger = [['7 min Workout im Alltag', '14:30', true]]
const actionsProfi = [
  [
    '7 min Workout im Alltag',
    '14:30',
    true,
    theme.brand.yellow,
    theme.text.default,
  ],
  ['Wasser trinken', '15:15', false, theme.brand.blue, theme.bg.default],
]

const Home = props => {
  const history = useHistory()
  const { userId } = props

  return (
    <Container>
      <Title>
        <LabelField
          label="Home"
          field={
            <img
              src={user}
              style={{ width: '32px' }}
              alt="user"
              onClick={() => history.push('/profile')}
            />
          }
        />
      </Title>

      {userId === 0 ? (
        <div style={{ marginBottom: '96px' }}>
          <ErsteChallenge />

          <Card bg={theme.brand.lightblue}>
            <CardTitle>Über thrive</CardTitle>
            <Row style={{ alignItems: 'flex-end', margin: 'auto' }}>
              <span>
                Wir zeigen Dir, wie du aus deinen Gesundheitsdaten mehr machen
                kannst. Schritt für Schritt zum gesünderen Ich!
              </span>
              <img
                style={{ width: 'auto', height: '96px' }}
                src={tracker}
                alt="activity-trackker"
              />
            </Row>
          </Card>

          <Subheading>Deine Aufgaben</Subheading>
          {actionsEinsteiger.map(([aufgabe, time, checked], i) => (
            <Card key={i} style={{ backgroundColor: '#F4D96D' }}>
              <Action action={aufgabe} time={time} checked={checked} />
            </Card>
          ))}
        </div>
      ) : (
        <div style={{ marginBottom: '96px' }}>
          <Schlaf />

          <Schwimmkurs />

          <Subheading>Deine Aufgaben</Subheading>
          {actionsProfi.map(([aufgabe, time, checked, color, font], i) => (
            <Card key={i} style={{ backgroundColor: color, color: font }}>
              <Action action={aufgabe} time={time} checked={checked} />
            </Card>
          ))}
        </div>
      )}
    </Container>
  )
}

export default Home
