import React from 'react';
import {Container, Larger, Title} from "../../components/globals";
import {Item, Row} from "../../components/Flex";
import Sportler from './Sportler.svg';
import {ButtonYellow} from "../../components/Button";
import { useHistory } from 'react-router-dom';

const Thrive = () => {
    const history = useHistory();

    return (
        <Container>
            <div style={{backgroundColor: "#F4D96D", borderRadius: "10px", textAlign: "center"}}>
                <Title>
                    Herausforderung
                </Title>
                <Row style={{paddingBottom: "10px",}}>
                    <Item>
                        <img src={Sportler} alt="sportler" width="100%"/>
                        <Larger>
                            Mehr Aktivität im Alltag
                        </Larger>
                        <div>
                            Mit nur 7 Minuten am Tag kann man schon erstaunliche Ergebnisse für die Gesundheit erzielen
                            und den Tag perfekt starten. Basierend auf wissenschaftlichen Erkenntnissen stellen wir dir
                            ein kurzes Workout zusammen
                        </div>
                        <hr/>
                        <div>
                            Wenn du deinen Kalender mit thrive verbindest suchen wir die passende Zeitslots für deine
                            Aktivität
                        </div>
                    </Item>
                </Row>
            </div>
            <div style={{textAlign: "center", marginTop: "15px"}}>
                Führe diese Aufgabe 5 mal in dieser Woche aus, um erfolgreich zu sein und den nächsten Schritt zu machen.
            </div>
            <ButtonYellow onClick={() => history.push('/home')}>
                Workout starten
            </ButtonYellow>
        </Container>
    )
};

export default Thrive
