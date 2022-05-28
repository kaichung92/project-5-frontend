/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-template */
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './gamepage.css';

// const BACKEND_URL =
//   process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';

export default function Gamepage() {
  return (
    <Container className="game-container">
      <Row className="table-border">oval</Row>
      <Row className="button-container">
        <Col>
          <Button className="button">Fold</Button>
        </Col>
        <Col>
          <Button className="button">Check</Button>
        </Col>
        <Col>
          <Button className="button">Raise</Button>
        </Col>
      </Row>
      <Row className="pot">
        <Col className="pot-card-1">
          <Row className="pot-card-number">1</Row>
          <Row className="pot-card-suit">❤️</Row>
        </Col>
        <Col className="pot-card-2">
          <Row className="pot-card-number">2</Row>
          <Row className="pot-card-suit">❤️</Row>
        </Col>
        <Col className="pot-card-3">
          <Row className="pot-card-number">3</Row>
          <Row className="pot-card-suit">❤️</Row>
        </Col>
        <Col className="pot-card-4">
          <Row className="pot-card-number">4</Row>
          <Row className="pot-card-suit">❤️</Row>
        </Col>
        <Col className="pot-card-5">
          <Row className="pot-card-number">5</Row>
          <Row className="pot-card-suit">❤️</Row>
        </Col>
      </Row>
      <Row className="pot-name">POT</Row>
      <Row className="pot-value">100</Row>
      <Row className="pot-msg">player 1 turn to act</Row>
      <Row className="dealer-button-top">.D</Row>
      <Row className="dealer-button-middle-top-left">.D</Row>
      <Row className="dealer-button-middle-top-right">.D</Row>
      <Row className="dealer-button-middle-mid-left">.D</Row>
      <Row className="dealer-button-middle-mid-right">.D</Row>
      <Row className="dealer-button-middle-bot-left">.D</Row>
      <Row className="dealer-button-middle-bot-right">.D</Row>
      <Row className="dealer-button-bottom">.D</Row>
      <Row className="player-top">
        <Row>
          <Col className="player-card">
            <Row className="player-number">A</Row>
            <Row className="player-suit">❤️</Row>
          </Col>
          <Col className="player-card">
            <Row className="player-number">A</Row>
            <Row className="player-suit">❤️</Row>
          </Col>
        </Row>
        <Row className="player-detail-box">
          <Col>
            <Row className="player-name">kai</Row>
            <Row className="player-credit">100</Row>
          </Col>
        </Row>
      </Row>
      <Row className="player-mid-top-left">
        <Row>
          <Col className="player-card">
            <Row className="player-number">A</Row>
            <Row className="player-suit">❤️</Row>
          </Col>
          <Col className="player-card">
            <Row className="player-number">A</Row>
            <Row className="player-suit">❤️</Row>
          </Col>
        </Row>
        <Row className="player-detail-box">
          <Col>
            <Row className="player-name">kai</Row>
            <Row className="player-credit">100</Row>
          </Col>
        </Row>
      </Row>
      <Row className="player-mid-top-right">
        <Row>
          <Col className="player-card">
            <Row className="player-number">A</Row>
            <Row className="player-suit">❤️</Row>
          </Col>
          <Col className="player-card">
            <Row className="player-number">A</Row>
            <Row className="player-suit">❤️</Row>
          </Col>
        </Row>
        <Row className="player-detail-box">
          <Col>
            <Row className="player-name">kai</Row>
            <Row className="player-credit">100</Row>
          </Col>
        </Row>
      </Row>
      <Row className="player-mid-mid-left">
        <Row>
          <Col className="player-card">
            <Row className="player-number">A</Row>
            <Row className="player-suit">❤️</Row>
          </Col>
          <Col className="player-card">
            <Row className="player-number">A</Row>
            <Row className="player-suit">❤️</Row>
          </Col>
        </Row>
        <Row className="player-detail-box">
          <Col>
            <Row className="player-name">kai</Row>
            <Row className="player-credit">100</Row>
          </Col>
        </Row>
      </Row>
      <Row className="player-mid-mid-right">
        <Row>
          <Col className="player-card">
            <Row className="player-number">A</Row>
            <Row className="player-suit">❤️</Row>
          </Col>
          <Col className="player-card">
            <Row className="player-number">A</Row>
            <Row className="player-suit">❤️</Row>
          </Col>
        </Row>
        <Row className="player-detail-box">
          <Col>
            <Row className="player-name">kai</Row>
            <Row className="player-credit">100</Row>
          </Col>
        </Row>
      </Row>
      <Row className="player-mid-btm-left">
        <Row>
          <Col className="player-card">
            <Row className="player-number">A</Row>
            <Row className="player-suit">❤️</Row>
          </Col>
          <Col className="player-card">
            <Row className="player-number">A</Row>
            <Row className="player-suit">❤️</Row>
          </Col>
        </Row>
        <Row className="player-detail-box">
          <Col>
            <Row className="player-name">kai</Row>
            <Row className="player-credit">100</Row>
          </Col>
        </Row>
      </Row>
      <Row className="player-mid-btm-right">
        <Row>
          <Col className="player-card">
            <Row className="player-number">A</Row>
            <Row className="player-suit">❤️</Row>
          </Col>
          <Col className="player-card">
            <Row className="player-number">A</Row>
            <Row className="player-suit">❤️</Row>
          </Col>
        </Row>
        <Row className="player-detail-box">
          <Col>
            <Row className="player-name">kai</Row>
            <Row className="player-credit">100</Row>
          </Col>
        </Row>
      </Row>
      <Row className="player-btm">
        <Row>
          <Col className="player-card">
            <Row className="player-number">A</Row>
            <Row className="player-suit">❤️</Row>
          </Col>
          <Col className="player-card">
            <Row className="player-number">A</Row>
            <Row className="player-suit">❤️</Row>
          </Col>
        </Row>
        <Row className="player-detail-box">
          <Col>
            <Row className="player-name">kai</Row>
            <Row className="player-credit">100</Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
