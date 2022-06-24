import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';

const Client = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} exact />
    </Routes>
  );
};

export default Client;
