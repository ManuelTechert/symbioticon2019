import React from 'react'
import { Container, Title } from '../../components/globals'
import { Item, Row } from '../../components/Flex'

import trainingScore from './training-score.svg'
import trainingPulse from './training-puls.svg'
import trainingSteps from './training-steps.svg'

const Training = () => {
  return (
    <Container>
      <Title>Training</Title>
      <Row style={{ paddingBottom: '10px' }}>
        <Item>
          <img src={trainingScore} alt="low" width="100%" />
        </Item>
      </Row>
      <Row style={{ paddingBottom: '10px' }}>
        <Item>
          <img src={trainingPulse} alt="middle" width="100%" />
        </Item>
      </Row>
      <Row style={{ paddingBottom: '10px', marginBottom: '96px' }}>
        <Item>
          <img src={trainingSteps} alt="high" width="100%" />
        </Item>
      </Row>
    </Container>
  )
}

export default Training
