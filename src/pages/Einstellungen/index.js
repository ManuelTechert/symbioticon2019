import React from 'react'
import {CardTitle, Container, Title, Card} from "../../components/globals";
import LabelField from "../../components/LabelField";
import Avatar from "../../components/Avatar";
import CheckBoxDetails from "../../components/CheckBoxDetails";

const werte = [
    ['Vorname', 'John'],
    ['Nachname', 'Doe'],
    ['Geburtstag', '21.04.1992'],
    ['Geschlecht', 'Männlich'],
    ['Größe', '182 cm'],
    ['Gewicht', '84 kg'],
];

const dienste = [
    ['fitbit'],
    ['Google Calendar'],
    ['SleepCycle'],
    ['Headspace'],
];

const Einstellungen = () => {
    return (
        <Container>
            <Title>
                <LabelField label="Einstellungen" field={<Avatar name="boy.png"/>}/>
            </Title>
            <CardTitle>
                Profil
            </CardTitle>
            <Card>
                {werte.map(([label, field], i) => (
                    <>
                        <LabelField key={i} field={field} label={label}/>
                        {i < werte.length - 1 && <hr color="lightgrey"/>}
                    </>
                ))}
            </Card>
            <CardTitle>
                Verbundene Dienste
            </CardTitle>
            <Card>
                {dienste.map((dienst, i) => (
                    <>
                        <CheckBoxDetails key={i} value={dienst}/>
                        {i < dienste.length - 1 && <hr color="lightgrey"/>}
                    </>
                ))}
            </Card>
        </Container>
    )
};

export default Einstellungen
