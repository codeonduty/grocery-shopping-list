// Navbar.js --- React component for navigation bar

// Code:

// Libraries
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// Component
const NavBar = () => {
  return (
    <Navbar bg='light' variant='light' expand='lg' sticky='top'>
      <Container>
        <LinkContainer to='/item/catalogue'>
          <Navbar.Brand>Grocery Shopping List</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <LinkContainer to='/item/catalogue'>
              <Nav.Link className='mx-3'>
                <i className='fa-solid fa-shop'></i>&nbsp;&nbsp; CATALOGUE
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/shopper/list'>
              <Nav.Link className='mx-3'>
                <i className='fa-solid fa-list-check'></i>&nbsp;&nbsp; LIST
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/shopper/signin'>
              <Nav.Link className='mx-3'>
                <i className='fa-solid fa-arrow-right-to-bracket'></i>
                &nbsp;&nbsp; SIGN IN
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/shopper/signup'>
              <Nav.Link className='mx-3'>
                <i className='fa-solid fa-user-plus'></i>&nbsp;&nbsp;SIGN UP
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

// NavBar.js ends here
