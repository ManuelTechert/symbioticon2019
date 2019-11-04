import React from 'react';
import styled from "styled-components";
import {Home, Map, BarChart2} from 'react-feather'

const Background = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-grow: 1;
    height: 50px;
    padding-top: 0;
    background-color: #F6F6F6;
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
    return (
        <Background>
            <Col>
                <Home height="50px"/>
                <Subtitel>Home</Subtitel>
            </Col>
            <Col>
                <Map height="50px"/>
                <Subtitel>Dein Weg</Subtitel>
            </Col>
            <Col>
                <BarChart2 height="50px"/>
                <Subtitel>Training</Subtitel>
            </Col>
        </Background>
    )
};

export default Footer
