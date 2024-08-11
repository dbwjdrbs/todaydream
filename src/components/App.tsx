import React from 'react';
import '../styles/App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // react-router-dom@^6.3.0
import Home from '../pages/Home.tsx';
import Page1 from '../pages/Page1.tsx';
import BounceButton from './BounceButton.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/page1" element={<Page1/>}/>
      </Routes>
      <Link to="/"><button>home</button></Link>
      <Link to="/page1"><button>page1</button></Link>
      <BounceButton name='확인'></BounceButton>
    </BrowserRouter>
  );
}

export default App;
