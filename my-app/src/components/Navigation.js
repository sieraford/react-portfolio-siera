import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {

  return (
    <Navbar expand="lg">
    <Container>
      <Navbar.Brand>Siera Ford</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/about-me">
            <Nav.Link>About Me</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/portfolio">
            <Nav.Link>Portfolio</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/resume">
            <Nav.Link>Resume</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Navigation;