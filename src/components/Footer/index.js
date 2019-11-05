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

    const styleFunction = path => ({ color: path === history.location.pathname ? "#FF5A5F" : "#5C6166"});

    return (
        <Container>
            <ColContainer>
                <Col onClick={() => history.push('/')} style={styleFunction('/')}>
                    <Home height="50px"/>
                    <Subtitel>Home</Subtitel>
                </Col>
                <Col onClick={() => history.push(`/deinweg`)} style={styleFunction('/deinweg')}>
                    <Map height="50px"/>
                    <Subtitel>Dein Weg</Subtitel>
                </Col>
                <Col onClick={() => history.push(`/thrive`)} style={styleFunction('/thrive')}>
                    <Compass height="50px"/>
                    <Subtitel>Thrive</Subtitel>
                </Col>
                <Col onClick={() => history.push(`/training`)} style={styleFunction('/training')}>
                    <BarChart2 height="50px"/>
                    <Subtitel>Training</Subtitel>
                </Col>
            </ColContainer>
        </Container>
    )
};

export default Footer
