import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Label = styled.span`
    text-align: center;
`;

const Field = styled.span`
    align: right;
`;


const TextDetails = ({value}) => {
    return (
        <Container>
            <Label>
                {value}
            </Label>
            <Field>
                &gt;
            </Field>
        </Container>
    )
};

export default TextDetails
