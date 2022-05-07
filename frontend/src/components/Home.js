import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import homeImage from './home.png'

const Home = () => {
  return (
    <>
      <Container className='home'>
        <Row>
          <Col sm={6}>
            <h1>Hello,</h1>
            <h1>
              I am <span>Damir Kolobaric</span>
            </h1>
            <h3>Web Developer</h3>
            <Button variant='primary' size='lg'>
              Contact Me
            </Button>
          </Col>
          <Col sm={6}>
            <Image fluid src={homeImage}></Image>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
