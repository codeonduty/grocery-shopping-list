// Catalogue.js --- React component for catalogue page

// Code:

// Libraries
import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// Modules
import ItemThumbnail from './../../Item/Thumbnail/Thumbnail';
import { fetchItems } from './../../../action/catalogue';

// Component
const Catalogue = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const catalogue = useSelector((state) => {
    return state.catalogue;
  });
  const { loading, error, items } = catalogue;

  //const { loading, error, items } = catalogue;

  return (
    <>
      <h1>Catalogue</h1>
      <Row>
        {items.map((item) => (
          <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
            <ItemThumbnail item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Catalogue;

// Catalogue.js ends here
