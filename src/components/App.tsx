import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // react-router-dom@^6.3.0
import Home from '../pages/Home.tsx';
import Interpretation from '../pages/Interpretation.tsx';
import Header from './Header.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interpretation" element={<Interpretation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;