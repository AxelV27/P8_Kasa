import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Hearder';
import Home from './pages/Home/Home';
import Apropos from './pages/A_propos';
import Footer from './components/Footer';
import Error from './components/Error/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Apropos' element ={<Apropos />}/>
        <Route path='*' element = {<Error />} />
      </Routes>
      <Footer />
    </Router>
   
  </React.StrictMode>
);
