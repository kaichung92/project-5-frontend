/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-template */
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Alert } from 'react-bootstrap';

export default function Login({ setUser }) {
  const [loginDetails, setLoginDetails] = useState({});
  const [msg, setMsg] = useState('');

  function loginCheck(e) {
    e.preventDefault();
    axios
      .post('/login', {
        username: loginDetails.username,
        password: loginDetails.password,
      })
      .then((res) => {
        res.data.msg ? setMsg(res.data.msg) : setUser(res.data.data.name);
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
      <form onSubmit={loginCheck}>
        <Row>
          {' '}
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
          <input type="submit" />
        </Row>
        <Row>{msg && <Alert variant="danger">{msg}</Alert>}</Row>
      </form>
    </Container>
  );
}
