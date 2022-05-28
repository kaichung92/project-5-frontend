/* eslint-disable operator-linebreak */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import axios from 'axios';
// import Login from './components/loginAndRegister/login.jsx';
// import checkCookie from './components/helperFunction/checkIfLogin.mjs';
// import Register from './components/loginAndRegister/register.jsx';
import Gamepage from './components/gamepage.jsx';
// make sure that axios always sends the cookies to the backend server
import NavbarCom from './components/navbar.jsx';
import StatsPage from './components/StatPage.jsx';
import Lobby from './components/Lobby.jsx';
import Settings from './components/Settings.jsx';

axios.defaults.withCredentials = true;

// const BACKEND_URL =
//   process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';

export default function App() {
  const [page, setPage] = useState('lobby');
  // const [username, setUsername] = useState('');

  // useEffect(() => {
  //   checkCookie(setUsername);
  // }, []);

  return (
    <div>
      {/* {username ? (
        <Login setUsername={setUsername} />
      ) : (
        <Register setUsername={setUsername} />
      )} */}

      {page === 'game' && <Gamepage setPage={setPage} />}
      {page === 'lobby' && <Lobby setPage={setPage} />}
      {page === 'settings' && <Settings />}
      {page === 'stats' && <StatsPage />}
      {page !== 'game' && <NavbarCom setPage={setPage} />}
    </div>
  );
}
