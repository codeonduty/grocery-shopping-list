// Thumbnail.js --- React component for item thumbnail in catalogue

// Code:

// Libraries
import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Modules
import './Thumbnail.css';

// Component
const Thumbnail = ({ item }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/item/${item._id}`}>
          <Card.Img src={item.image} variant='top' />
        </Link>
        <Card.Body>
          <Link to={`/item/${item._id}`}>
            <Card.Title as='div'>
              <strong>{item.name}</strong>
            </Card.Title>
          </Link>
          <Row>
            <Card.Text as='h3'>R{item.price}</Card.Text>
            <Col className='mx-0 mt-2 px-0'>
              <Button variant='info'>VIEW</Button>
            </Col>
            <Col className='mx-0 mt-2 px-0'>
              <Button>ADD TO LIST</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Thumbnail;

// Thumbnail.js ends here
