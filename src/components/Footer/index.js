import React from 'react';
import styled from "styled-components";
import {Home, Map, BarChart2, Compass} from 'react-feather'
import {useHistory} from "react-router-dom";

const Container = styled.div`
    flex-shrink: 0;
    height: 80px;
    background-color: #F6F6F6;
`;

const ColContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
`;

const Col = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const Subtitel = styled.div`
    font-size: xSmall;
`;

const Footer = () => {
    const history = useHistory();

    return (
        <Container>
            <ColContainer>
                <Col onClick={() => history.push('/')}>
                    <Home height="50px"/>
                    <Subtitel>Home</Subtitel>
                </Col>
                <Col onClick={() => history.push(`/deinweg`)}>
                    <Map height="50px"/>
                    <Subtitel>Dein Weg</Subtitel>
                </Col>
                <Col onClick={() => history.push(`/tools`)}>
                    <Compass height="50px"/>
                    <Subtitel>Tools</Subtitel>
                </Col>
                <Col onClick={() => history.push(`/training`)}>
                    <BarChart2 height="50px"/>
                    <Subtitel>Training</Subtitel>
                </Col>
            </ColContainer>
        </Container>
    )
};

export default Footer
