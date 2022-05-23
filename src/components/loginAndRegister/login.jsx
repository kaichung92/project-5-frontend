/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-template */
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Alert, Button } from 'react-bootstrap';

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';

export default function Login({ setUsername }) {
  const [loginDetails, setLoginDetails] = useState({});
  const [msg, setMsg] = useState('');

  function loginCheck(e) {
    e.preventDefault();
    axios
      .get(`${BACKEND_URL}/login`, {
        username: loginDetails.username,
        password: loginDetails.password,
      })
      .then((res) => {
        res.data.msg ? setMsg(res.data.msg) : setUsername(res.data.data.name);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  function details(e) {
    const { value, name } = e.target;
    setLoginDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <Container className="login-container">
      <h1>login page</h1>
      <form onSubmit={loginCheck}>
        <Row>
          <input placeholder="username" name="username" onChange={details} />
        </Row>
        <Row>
          <input
            placeholder="password"
            type="password"
            name="password"
            onChange={details}
          />
        </Row>
        <Row>
          <Button type="submit">Login</Button>
        </Row>
        <Row>{msg && <Alert variant="danger">{msg}</Alert>}</Row>
      </form>
    </Container>
  );
}
