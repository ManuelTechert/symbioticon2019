import React from 'react'
import {CardTitle, Container, Title, Card, Larger} from "../../components/globals";

const tipps = [
    [
        ['Leere deinen Geist', <div>Bla bla</div>],
    ],
    [
        ['Verbessere deinen Schlaf', <div>Bla bla</div>],
        ['Schwimmkurs in deiner Nähe', <div>Bla bla</div>],
    ],
];

const actions = [
    ['fitbit'],
    ['Google Calendar'],
    ['SleepCycle'],
    ['Headspace'],
];

const DeinWeg = (props) => {
    const { userId } = props;

    const hinweise = tipps[userId];
    const aufgaben = actions[userId];

    return (
        <Container>
            <Title>
                Dein Weg
            </Title>
            {hinweise.map(([title, component], i) => (
                <Card key={i}>
                    <Larger>{title}</Larger>
                    {component}
                </Card>
            ))}
            <CardTitle>
                Verbundene Aufgaben
            </CardTitle>
            <Card>
                {aufgaben.map((aufgabe, i) => (
                    <div key={i}>
                        todo
                    </div>
                ))}
            </Card>
        </Container>
    )
};

export default DeinWeg
