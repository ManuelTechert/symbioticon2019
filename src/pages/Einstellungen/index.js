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
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'react-feather'
import ukv from './url.png'
import google from './google-cal.svg'
import fitbit from './fitbit.svg'
import headspace from './headspace.svg'
import sleepcycle from './sleep-cycle.svg'

import { theme } from '../../components/theme'
import { Row } from '../../components/Flex'

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
  [['Google Calendar', google]],
  [
    ['Google Calendar', google],
    ['Headspace', headspace],
    ['fitbit', fitbit],
    ['Sleep Cycle', sleepcycle],
  ],
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
        {dienste[id].map(([dienstname, icon], i) => (
          <>
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Row style={{ alignItems: 'center' }}>
                <img
                  src={icon}
                  alt="app icon"
                  style={{ height: '32px', marginRight: '8px' }}
                />
                <span>{dienstname}</span>
              </Row>
              <ChevronRight color={theme.brand.grey} />
            </div>
            {i < dienste[id].length - 1 && (
              <hr
                color={theme.brand.lightblue}
                style={{ borderWidth: '0.1px' }}
              />
            )}
          </>
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
        <Row style={{ alignItems: 'center' }}>
          <img
            src={ukv}
            alt="ukv krankenversicherung"
            style={{ height: '32px', marginRight: '8px' }}
          />
          <span>Aktueller Cashback: 2€</span>
        </Row>
        <ChevronRight color={theme.brand.grey} />
      </Card>
    </Container>
  )
}

export default Einstellungen
