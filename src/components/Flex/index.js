import React from 'react';
import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Item = ({ flex=1, children, ...props }) => (
    <span style={{ flex, ...props }}>
        {children}
    </span>
);
