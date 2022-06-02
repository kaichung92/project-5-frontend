/* eslint-disable react/prop-types */
/* eslint-disable operator-linebreak */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-dis
able arrow-body-style */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './navbar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';

const GetLobby = ({ tableInfo }) => {
  const DisplayRoom = tableInfo.map((x) => {
    return (
      <Link to={`/game/${x.id}/`} className="lobby-link">
        <Container className="lobby-game">
          <Row>
            <Col className="col-5">
              <a>Table ID: {x.id}</a>
            </Col>
            <Col>
              <a>Table Name: {x.name}</a>
            </Col>
          </Row>
          <Row>
            <Col className="col-5">
              <a>In game: 1/{x.max_player}</a>
            </Col>
            <Col>
              <a>
                Blinds: {x.blinds}/{x.blinds * 2}
              </a>
            </Col>
          </Row>
        </Container>
      </Link>
    );
  });

  return <>{DisplayRoom}</>;
};

export default function Lobby({ tableInfo, setPage }) {
  return (
    <Container>
      <GetLobby tableInfo={tableInfo} />
    </Container>
  );
}
