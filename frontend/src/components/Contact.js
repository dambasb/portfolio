import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <>
      <Container className='contact'>
        <Row>
          <Col sm={12}>
            <h3>Contact me</h3>
          </Col>
          <Col sm={12}>
            <p>
              Have a question? Want to Collaborate? Just want to chat?Reach out
              to me on
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>

              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as='textarea' rows={3} />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact
