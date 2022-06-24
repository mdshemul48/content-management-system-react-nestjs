import './App.css';

import { Routes, Route } from 'react-router-dom';
import Client from './client/Client';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Client />} exact />
    </Routes>
  );
}

export default App;
