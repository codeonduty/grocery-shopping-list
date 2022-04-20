// Item.js --- React component for item page

// Code:

// Libraries
import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Container,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

// Modules
import { fetchItem } from './../../../action/item';

// Component
const ItemPage = () => {
  // Extract URL parameters
  let params = useParams();

  // URL navigation indentifier
  let navigate = useNavigate();

  // Instantiate item quantity
  const [quantity, setQuantity] = useState(1);

  // Instantiate dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItem(params.id));
  }, [dispatch, params.id]);

  const { loading, error, item } = useSelector((state) => {
    return state.item;
  });

  // Handles additions to shopping list
  const addToList = () => {
    navigate(`/shopper/list/${params.id}/${quantity}`);
  };

  return (
    <>
      <Row>
        <Col md={6}>
          <Image src={item.image} className='my-3' alt={item.name} fluid />

          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>In Stock</Col>
                  <Col>{item.stock}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Quantity</Col>
                  <Col>
                    <Form.Control
                      as='select'
                      value={quantity}
                      onChange={(event) => {
                        setQuantity(event.target.value);
                      }}
                    >
                      {[...Array(item.stock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Container>
                  <Button
                    className='px-5'
                    variant='primary'
                    type='button'
                    disabled={item.stock === 0}
                    onClick={addToList}
                  >
                    ADD TO LIST
                  </Button>
                </Container>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{item.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Price: R{item.price}</ListGroup.Item>
            <ListGroup.Item>Description: {item.description}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ItemPage;

// Item.js ends here
