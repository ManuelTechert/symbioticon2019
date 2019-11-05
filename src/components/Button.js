import React from 'react'
import styled from 'styled-components'

const MyButton = styled.div`
    color: white;
    background-color: red;
    border-radius: 10px;
    padding: 5px;
    margin: 10px;
    text-align: center;
    font-size: larger;
`;

const Button = props => <MyButton {...props}/>;

export default Button