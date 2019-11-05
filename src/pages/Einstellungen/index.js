import React from 'react'
import {CardTitle, Container, Title, Card, Smaller, SmallRedCenter} from "../../components/globals";
import LabelField from "../../components/LabelField";
import Avatar from "../../components/Avatar";
import CheckBoxDetails from "../../components/CheckBoxDetails";
import {useParams} from 'react-router-dom';
import TextDetails from "../../components/TextDetails";
import ukvSource from './url.png'

const werte = [
    [
        ['Vorname', 'John'],
        ['Nachname', 'Doe'],
        ['Geburtstag', '21.04.1992'],
        ['Geschlecht', 'Männlich'],
        ['Größe', '182 cm'],
        ['Gewicht', '84 kg'],
    ],
    [
        ['Vorname', 'Johanna'],
        ['Nachname', 'Sportivo'],
        ['Geburtstag', '21.04.1992'],
        ['Geschlecht', 'Weiblich'],
        ['Größe', '175 cm'],
        ['Gewicht', '65 kg'],
    ],
];

const dienste = [
    ['Google Calendar'],
];

const ukv = <img src={ukvSource} alt="ukv" width="30%"/>;

const Einstellungen = (props) => {
    const { userId } = useParams();
    const id = userId ? userId : props.userId;
    const user = werte[id];

    return (
        <Container>
            <Title>
                <LabelField label="Einstellungen" field={<Avatar name="boy.png"/>}/>
            </Title>
            <CardTitle>
                Profil
            </CardTitle>
            <Card>
                {user.map(([label, field], i) => (
                    <div key={i}>
                        <LabelField field={field} label={label}/>
                        {i < user.length - 1 && <hr color="lightgrey"/>}
                    </div>
                ))}
            </Card>
            <CardTitle>
                Verbundene Dienste
                <Smaller>
                    Je mehr Dienste du verbindest, desto persönlicher und passender können wir die neue Erkenntnisse und
                    neue Aktionen geben.
                </Smaller>
            </CardTitle>
            <Card>
                {dienste.map((dienst, i) => (
                    <div key={i}>
                        <CheckBoxDetails value={dienst}/>
                        {i < dienste.length - 1 && <hr color="lightgrey"/>}
                    </div>
                ))}
            </Card>
            <SmallRedCenter>
                MEHR DIENSTE VERBINDEN
            </SmallRedCenter>
            <CardTitle>
                Deine Versicherung
                <Smaller>
                    Mit der Anbindung an deine Krankenversicherung erhältst du exklusive Angebote und basierend auf
                    deinen Punkten einen Rabatt auf deinen Beitrag!
                </Smaller>
            </CardTitle>
            <Card>
                <TextDetails value={ukv} />
            </Card>
            <SmallRedCenter>
                GESUNDHEITSPARTNER ÄNDERN
            </SmallRedCenter>
        </Container>
    )
};

export default Einstellungen
