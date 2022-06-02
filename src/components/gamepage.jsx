/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-template */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import './gamepage.css';

// const BACKEND_URL =
//   process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';
const socket = io('http://localhost:3004');

export default function Gamepage() {
  const [totalPlayer] = useState(4);
  const [dealer] = useState(4);
  const [potAmount] = useState(126);
  const [potMsg] = useState('player 1 turn');
  const [potCard] = useState([
    { name: 'K', suit: '❤️' },
    { name: 'K', suit: '❤️' },
    { name: 'K', suit: '❤️' },
    { name: 'J', suit: '❤️' },
    { name: 'K', suit: '❤️' },
  ]);
  const [playerInfo] = useState([
    {
      name: 'kai',
      stack: 200,
      cardOneName: 'A',
      cardOneSuit: '❤️',
      cardTwoName: 'K',
      cardTwoSuit: '❤️',
    },
    {
      name: 'paul',
      stack: 400,
      cardOneName: '2',
      cardOneSuit: '❤️',
      cardTwoName: '3',
      cardTwoSuit: '❤️',
    },
    {
      name: 'john',
      stack: 333,
      cardOneName: '4',
      cardOneSuit: '❤️',
      cardTwoName: '5',
      cardTwoSuit: '❤️',
    },
    {
      name: 'sskiller',
      stack: 88,
      cardOneName: '6',
      cardOneSuit: '❤️',
      cardTwoName: '7',
      cardTwoSuit: '❤️',
    },
    {
      name: 'foldingIsBoring',
      stack: 123,
      cardOneName: '9',
      cardOneSuit: '❤️',
      cardTwoName: '10',
      cardTwoSuit: '❤️',
    },
    {
      name: 'moreprothanu',
      stack: 1000,
      cardOneName: 'Q',
      cardOneSuit: '❤️',
      cardTwoName: 'K',
      cardTwoSuit: '❤️',
    },
    {
      name: 'trump',
      stack: 800,
      cardOneName: '8',
      cardOneSuit: '❤️',
      cardTwoName: '8',
      cardTwoSuit: '❤️',
    },
    {
      name: 'cena',
      stack: 234,
      cardOneName: 'J',
      cardOneSuit: '❤️',
      cardTwoName: 'J',
      cardTwoSuit: '❤️',
    },
  ]);

  const [playerId] = useState(2);

  useEffect(() => {
    socket.emit('hello', () => {
      console.log('heelo from client');
    });
  }, []);

  return (
    <Container className="game-container">
      <Row className="table-border" />
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
          <Row className="pot-card-number">
            {potCard[0].name === undefined ? '' : potCard[0].name}
          </Row>
          <Row className="pot-card-suit">
            {potCard[0].suit === undefined ? '' : potCard[0].suit}
          </Row>
        </Col>
        <Col className="pot-card-2">
          <Row className="pot-card-number">
            {potCard[1].name === undefined ? '' : potCard[1].name}
          </Row>
          <Row className="pot-card-suit">
            {potCard[0].suit === undefined ? '' : potCard[1].suit}
          </Row>
        </Col>
        <Col className="pot-card-3">
          <Row className="pot-card-number">
            {potCard[2].name === undefined ? '' : potCard[2].name}
          </Row>
          <Row className="pot-card-suit">
            {potCard[0].suit === undefined ? '' : potCard[2].suit}
          </Row>
        </Col>
        <Col className="pot-card-4">
          <Row className="pot-card-number">
            {potCard[3].name === undefined ? '' : potCard[3].name}
          </Row>
          <Row className="pot-card-suit">
            {potCard[0].suit === undefined ? '' : potCard[3].suit}
          </Row>
        </Col>
        <Col className="pot-card-5">
          <Row className="pot-card-number">
            {potCard[4].name === undefined ? '' : potCard[4].name}
          </Row>
          <Row className="pot-card-suit">
            {potCard[0].suit === undefined ? '' : potCard[4].suit}
          </Row>
        </Col>
      </Row>
      <Row className="pot-name">POT</Row>
      <Row className="pot-value">{potAmount}</Row>
      <Row className="pot-msg">{potMsg}</Row>
      <Row className={`dealer-button-top ${dealer === 5 && 'dealer'}`}>.D</Row>
      <Row
        className={`dealer-button-middle-top-left ${dealer === 4 && 'dealer'}`}
      >
        .D
      </Row>
      <Row
        className={`dealer-button-middle-top-right ${dealer === 6 && 'dealer'}`}
      >
        .D
      </Row>
      <Row
        className={`dealer-button-middle-mid-left ${dealer === 3 && 'dealer'}`}
      >
        .D
      </Row>
      <Row
        className={`dealer-button-middle-mid-right ${dealer === 7 && 'dealer'}`}
      >
        .D
      </Row>
      <Row
        className={`dealer-button-middle-bot-left ${dealer === 2 && 'dealer'}`}
      >
        .D
      </Row>
      <Row
        className={`dealer-button-middle-bot-right ${dealer === 8 && 'dealer'}`}
      >
        .D
      </Row>
      <Row className={`dealer-button-bottom ${dealer === 1 && 'dealer'}`}>
        .D
      </Row>
      <Row className={`player-top ${totalPlayer >= 5 && 'add'}`}>
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
      <Row className={`player-mid-top-left ${totalPlayer >= 4 && 'add'}`}>
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
      <Row className={`player-mid-top-right ${totalPlayer >= 6 && 'add'}`}>
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
      <Row className={`player-mid-mid-left ${totalPlayer >= 3 && 'add'}`}>
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
      <Row className={`player-mid-mid-right ${totalPlayer >= 7 && 'add'}`}>
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
      <Row className={`player-mid-btm-left ${totalPlayer >= 2 && 'add'}`}>
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
      <Row className={`player-mid-btm-right ${totalPlayer >= 8 && 'add'}`}>
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
      <Row className={`player-btm ${totalPlayer >= 1 && 'add'}`}>
        <Row>
          <Col className="player-card">
            <Row className="player-number">
              {playerInfo[playerId].cardOneName}
            </Row>
            <Row className="player-suit">
              {playerInfo[playerId].cardOneSuit}
            </Row>
          </Col>
          <Col className="player-card">
            <Row className="player-number">
              {playerInfo[playerId].cardTwoName}
            </Row>
            <Row className="player-suit">
              {playerInfo[playerId].cardTwoSuit}
            </Row>
          </Col>
        </Row>
        <Row className="player-detail-box">
          <Col>
            <Row className="player-name">{playerInfo[playerId].name}</Row>
            <Row className="player-credit">{playerInfo[playerId].stack}</Row>
          </Col>
        </Row>
      </Row>
      <Button className="back-button">
        <Link to="/">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
      </Button>
    </Container>
  );
}
