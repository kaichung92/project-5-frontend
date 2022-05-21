/* eslint-disable operator-linebreak */
import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './components/loginAndRegister/login.jsx';
import checkCookie from './components/helperFunction/checkIfLogin.mjs';
import Register from './components/loginAndRegister/register.jsx';

// make sure that axios always sends the cookies to the backend server
axios.defaults.withCredentials = true;

// const BACKEND_URL =
//   process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';

export default function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    checkCookie(setUsername);
  }, []);

  return (
    <div className="container">
      {username ? <Login /> : <Register />}

      <>{username}</>
    </div>
  );
}
