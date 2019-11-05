import React from 'react'
import { Container, Title } from '../../components/globals'
import { Item, Row } from '../../components/Flex'
import Thrive0 from './Thrive0.svg'
import Thrive1 from './Thrive1.svg'
import Thrive2 from './Thrive2.svg'
import Thrive3 from './Thrive3.svg'
import Thrive4 from './Thrive4.svg'

const Thrive = (props) => {
  const { userId } = props
  if (userId === 0) return <ThriveEinsteiger/>

  return <ThriveProfi/>
}

const ThriveEinsteiger = () => {
  return (
    <Container>
      <Title>Neue Challenges</Title>
      <Row style={{ paddingBottom: '10px' }}>
        <Item>
          <img src={Thrive0} alt="low" width="100%" />
        </Item>
      </Row>
      <Row style={{ paddingBottom: '10px' }}>
        <Item>
          <img src={Thrive1} alt="low" width="100%" />
        </Item>
      </Row>
      <Row style={{ paddingBottom: '10px' }}>
        <Item>
          <img src={Thrive2} alt="middle" width="100%" />
        </Item>
      </Row>
    </Container>
  )
}

const ThriveProfi = () => {
  return (
    <Container>
      <Title>Thrive!</Title>
      <Row style={{ paddingBottom: '10px' }}>
        <Item>
          <img src={Thrive0} alt="low" width="100%" />
        </Item>
      </Row>
      <Row style={{ paddingBottom: '10px' }}>
        <Item>
          <img src={Thrive3} alt="low" width="100%" />
        </Item>
      </Row>
      <Row style={{ paddingBottom: '10px' }}>
        <Item>
          <img src={Thrive4} alt="middle" width="100%" />
        </Item>
      </Row>
    </Container>
  )
}

export default Thrive
