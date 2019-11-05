import React from 'react'
import {Card, CardTitle, Container, Larger, SmallRedCenter, Title} from "../../components/globals";
import {ButtonSmall} from "../../components/Button";
import Action from "../../components/Action";
import LabelField from "../../components/LabelField";
import {User} from 'react-feather';
import {useHistory} from 'react-router-dom';
import {Item, Row} from "../../components/Flex";
import WomanRunning from './woman_running.svg'

const FilledBall = ({text}) => (
    <span style={{
        backgroundColor: '#5C6166',
        color: 'white',
        borderRadius: '100%',
        margin: '4px',
        padding: '6px',
        width: '16px',
        height: '16px',
        textAlign: 'center'
    }}>
        {text}
    </span>
);

const Ball = ({text}) => (
    <span style={{
        border: '1px solid #5C6166',
        color: '#5C6166',
        borderRadius: '100%',
        margin: '4px',
        padding: '4px',
        width: '16px',
        height: '16px',
        textAlign: 'center'
    }}>
        {text}
    </span>);

const Woche = ({tag}) => {
    return (
        <div style={{width: '100%', marginLeft: 'auto', marginRight: 'auto'}}>
            {['M', 'D', 'M', 'D', 'F'].map((t, i) => {
                if (i < tag) {
                    return <FilledBall key={i} text={t}/>
                } else {
                    return <Ball key={i} text={t}/>
                }
            })
            }
        </div>
    )
};

const tipps = [
    [
        ['Starte deine erste Challenge', (
            <>
                <Row>
                    <Item flex={7}>
                        Mehr Aktivität im Alltag! Mit 7 Minuten am Tag gehst Du due ersten Schritte zu deinem gesünderen
                        Ich.
                    </Item>
                    <Item>
                        <img src={WomanRunning} alt="Woman running"/>
                    </Item>
                </Row>
                <Woche tag={2}/>
            </>
        )],
    ],
    [
        ['Verbessere deinen Schlaf', (
            <div>
                Basierend auf deinen letzten Workout Daten solltest du besonderen Fokus auf deinen Schlaf legen.
                Hier eine kurze Routine um deine Ruhezeit zu optimieren und morgens besser durchzustarten.
                <SmallRedCenter>MEHR ERFAHREN</SmallRedCenter>
                <ButtonSmall>Dunkler, leiser, kühler annehmen</ButtonSmall>
            </div>
        )],
        ['Schwimmkurs in deiner Nähe', (
            <div>
                Du willst deine Technik verbessern und einen einfachen Einstieg in das sportliche Schwimmen erhalten?
                Dann bist du beim Schwimmkurs im Hallenbad Kiesstein genau richtig!
            </div>
        )],
    ],
];

const actions = [
    ['7 min Workout im Alltag', '14:30', true],
];

const Home = (props) => {
    const history = useHistory();
    const {userId} = props;

    const hinweise = tipps[userId];
    return (
        <Container>
            <Title>
                <LabelField label="Home"
                            field={<User style={{color: "#FF5A5F"}} onClick={() => history.push('/profile')}/>}/>
            </Title>
            {hinweise.map(([title, component], i) => (
                <Card key={i} style={{backgroundColor: "#F4D96D"}}>
                    <Larger>{title}</Larger>
                    {component}
                </Card>
            ))}
            <Card>
                <Larger>Über thrive</Larger>
                Wir zeigen Dir, wie du aus deinen Gesundheitsdaten mehr machen kannst.
                Schritt für Schritt zum gesünderen Ich!
            </Card>
            <CardTitle>
                Deine Aufgaben
            </CardTitle>
            {actions.map(([aufgabe, time, checked], i) => (
                <Card key={i} style={{backgroundColor: "#F4D96D"}}>
                    <Action action={aufgabe} time={time} checked={checked}/>
                </Card>
            ))}
        </Container>
    )
};

export default Home
