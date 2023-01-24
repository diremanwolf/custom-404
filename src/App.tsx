import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import './assets/icons-monkey/see-monkey.webp';
import './assets/icons-monkey/hear-monkey.webp';
import './assets/icons-monkey/speak-monkey.webp';

import Home from './pages/home/home.page';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
} 

export default App;