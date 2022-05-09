// Footer.js --- Footer component

// Code:

// Libraries
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Component
const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center'>
          Copyright &copy; Grocery Shopping List
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

// Footer.js ends here
