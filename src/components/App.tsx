import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // react-router-dom@^6.3.0
import Home from '../pages/Home.tsx';
import DreamInterpretation from '../pages/DreamInterpretation.tsx';
import Header from './Header.tsx';
import InterpretationResult from '../pages/InterpretationResult.tsx';

const App = () => {

  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dream-interpretation" element={<DreamInterpretation/>}/>
        <Route path='/interpretation-result' element={<InterpretationResult/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;