/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';

export default function App() {
  const [tableInfo, setTableInfo] = useState({});
  // const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`${BACKEND_URL}/gettableinfo`);
      console.log(data.data);
      setTableInfo(data.data);
      console.log(tableInfo);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <NavbarCom />
        <Routes>
          <Route path="/lobby" element={<Lobby tableInfo={tableInfo} />} />
          <Route path="setting" element={<Settings />} />
          <Route path="stats" element={<StatsPage />} />
        </Routes>
        <Routes>
          <Route path="game/:id" element={<Gamepage />} />
        </Routes>
      </div>
    </Router>
  );
}
