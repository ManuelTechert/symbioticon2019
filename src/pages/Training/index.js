import React from 'react';
import {Container, Title} from "../../components/globals";
import {Item, Row} from "../../components/Flex";
import Training1 from "./Training1.svg";
import Training2 from "./Training2.svg";
import Training3 from "./Training3.svg";

const Training = () => {
    return (
        <Container>
            <Title>
                Dein Weg
            </Title>
            <Row style={{paddingBottom: "10px"}}>
                <Item>
                    <img src={Training1} alt="low" width="100%"/>
                </Item>
            </Row>
            <Row style={{paddingBottom: "10px"}}>
                <Item>
                    <img src={Training2} alt="middle" width="100%"/>
                </Item>
            </Row>
            <Row style={{paddingBottom: "10px"}}>
                <Item>
                    <img src={Training3} alt="high" width="100%"/>
                </Item>
            </Row>
        </Container>
    )
};

export default Training;
