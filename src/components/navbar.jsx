/* eslint-disable object-curly-newline */
import React from 'react';
import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap';
import './navbar.css';

export default function NavbarCom({ setPage }) {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container className="navbar-container">
        <Row className="navbar-row">
          <Col>
            <Nav.Link onClick={() => setPage('stats')}>
              <span className="material-symbols-outlined navbar-symbols">
                list_alt
              </span>
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link onClick={() => setPage('lobby')}>
              <span className="material-symbols-outlined navbar-symbols">
                home
              </span>
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link onClick={() => setPage('game')}>
              <span className="material-symbols-outlined navbar-symbols">
                settings
              </span>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
