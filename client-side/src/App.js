import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Client from './Components/Client/Client';

import NavBar from './Components/Shared/NavBar/NavBar';

import './App.css';
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Client />} exact />
      </Routes>
    </>
  );
}

export default App;
