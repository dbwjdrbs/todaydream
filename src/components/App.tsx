import React, { useState } from 'react';
import '../styles/app.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // react-router-dom@^6.3.0
import Home from '../pages/Home.tsx';
import DreamInterpretation from '../pages/DreamInterpretation.tsx';
import Header from './Header.tsx';

const App = () => {

  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dream-interpretation" element={<DreamInterpretation/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;