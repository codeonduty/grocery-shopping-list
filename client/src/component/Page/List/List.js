// List.js --- React component for shopping list page

// Code:

// Libraries
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  ListGroup,
  Row,
  Col,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';

// Modules
import { addToList, removeFromList } from './../../../action/list';

// Component
const List = () => {
  // Extract URL params
  let params = useParams();

  // URL navigation identifier
  let navigate = useNavigate();

  // Instantiate dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) dispatch(addToList(params.id, params.quantity));
  }, [dispatch, params.id, params.quantity]);

  const { listItems } = useSelector((state) => {
    return state.list;
  });

  const checkoutList = () => {
    navigate('/shopper/signin?redirect=catalogue');
  };

  return (
    <Row>
      <Col md={8}>
        <h1>LIST</h1>
        <ListGroup variant='flush'>
          {listItems.map((listItem) => (
            <ListGroup.Item key={listItem._id}>
              <Row>
                <Col md={2}>
                  <Image
                    src={listItem.image}
                    alt={listItem.name}
                    fluid
                    rounded
                  />
                </Col>
                <Col md={3}>
                  <Link to={`/item/${listItem._id}`}>{listItem.name}</Link>
                </Col>
                <Col md={2}>R{listItem.price}</Col>
                <Col md={2}>
                  <Form.Control
                    as='select'
                    value={listItem.quantity}
                    onChange={(event) => {
                      dispatch(addToList(listItem._id, event.target.value));
                    }}
                  >
                    {[...Array(listItem.stock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type='button'
                    variant='danger'
                    onClick={() => {
                      dispatch(removeFromList(listItem._id));
                    }}
                  >
                    REMOVE
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                TOTAL FOR (
                {listItems.reduce((total, currentItem) => {
                  return total + Number(currentItem.quantity);
                }, 0)}{' '}
                ) ITEMS
              </h2>
              R
              {listItems.reduce((total, currentItem) => {
                return total + currentItem.quantity * currentItem.price;
              }, 0)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={listItems.length === 0}
                onClick={checkoutList}
              >
                CHECKOUT
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default List;

// List.js ends here
