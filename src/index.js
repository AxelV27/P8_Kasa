import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/Main_style/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Apropos from './pages/A_propos';
import Error404 from './pages/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Apropos' element ={<Apropos />}/>
        <Route path='*' element = {<Error404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
