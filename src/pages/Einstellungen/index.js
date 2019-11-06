import React from 'react'
import {
  CardTitle,
  Container,
  Card,
  Smaller,
  SmallRedCenter,
  Subheading,
} from '../../components/globals'
import LabelField from '../../components/LabelField'
import Avatar from '../../components/Avatar'
import CheckBoxDetails from '../../components/CheckBoxDetails'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'react-feather'
import ukv from './url.png'
import { theme } from '../../components/theme'

const werte = [
  [
    ['Vorname', 'John'],
    ['Nachname', 'Deere'],
    ['Geburtstag', '21.04.1992'],
    ['Geschlecht', 'Männlich'],
    ['Größe', '182 cm'],
    ['Gewicht', '84 kg'],
  ],
  [
    ['Vorname', 'Sarah'],
    ['Nachname', 'Connor'],
    ['Geburtstag', '21.04.1992'],
    ['Geschlecht', 'Weiblich'],
    ['Größe', '175 cm'],
    ['Gewicht', '65 kg'],
  ],
]

const dienste = [
  [['Google Calendar']],
  [['fitbit'], ['Google Calendar'], ['SleepCycle'], ['Headspace']],
]

const Einstellungen = props => {
  const { userId } = useParams()
  const id = userId ? userId : props.userId
  const user = werte[id]

  return (
    <Container>
      <Link
        to="/"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <ChevronLeft color={theme.brand.grey} />
        <span style={{ color: theme.brand.grey }}>Home</span>
      </Link>
      <Subheading>
        <LabelField label="Einstellungen" field={<Avatar id={id} />} />
      </Subheading>
      <Card style={{ marginBottom: '32px' }}>
        {user.map(([label, field], i) => (
          <div key={i}>
            <LabelField field={field} label={label} />
            {i < user.length - 1 && (
              <hr
                color={theme.brand.lightblue}
                style={{ borderWidth: '0.1px' }}
              />
            )}
          </div>
        ))}
      </Card>
      <Subheading>Verbundene Dienste</Subheading>
      <p style={{ marginTop: '0px' }}>
        Je mehr Dienste du verbindest, desto persönlicher und passender können
        wir die neue Erkenntnisse und neue Aktionen geben.
      </p>
      <Card>
        {dienste[id].map((dienst, i) => (
          <div key={i}>
            <CheckBoxDetails value={dienst} />
            {i < dienste[id].length - 1 && <hr color="lightgrey" />}
          </div>
        ))}
      </Card>
      <SmallRedCenter>MEHR DIENSTE VERBINDEN</SmallRedCenter>

      <Subheading>Deine Versicherung</Subheading>
      <p style={{ marginTop: '0px' }}>
        Mit der Anbindung an deine Krankenversicherung erhältst du exklusive
        Angebote und basierend auf deinen Punkten einen Rabatt auf deinen
        Beitrag!
      </p>
      <Card
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '96px',
        }}
      >
        <img
          src={ukv}
          alt="ukv krankenversicherung"
          style={{ height: '32px' }}
        />
        <span>Aktueller Cashback: 2€</span>
        <ChevronRight color={theme.brand.grey} />
      </Card>
    </Container>
  )
}

export default Einstellungen
