import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <Container className='about'>
        <Row>
          <Col sm={12}>
            <h3>About me</h3>
            <p>
              I'm self thought Web Developer with 4 years of experience, in
              managing, building, and maintaining Web Applications.
            </p>
            <p>
              I've been building websites since 2017 with a focus on responsive
              design, accessibility and pleasing aesthetics.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About
