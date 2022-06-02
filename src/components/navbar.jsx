/* eslint-disable object-curly-newline */
import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Navbar, Col, Row } from 'react-bootstrap';
import './navbar.css';

export default function NavbarCom() {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container className="navbar-container">
        <Row className="navbar-row">
          <Col>
            <Link to="/stats">
              <span className="material-symbols-outlined navbar-symbols">
                list_alt
              </span>
            </Link>
          </Col>
          <Col>
            <Link to="/lobby">
              <span className="material-symbols-outlined navbar-symbols">
                home
              </span>
            </Link>
          </Col>
          <Col>
            <Link to="/setting">
              <span className="material-symbols-outlined navbar-symbols">
                settings
              </span>
            </Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
