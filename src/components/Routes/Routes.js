import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home.js';
import Apropos from '../../pages/A_propos/index.js';
import Error404 from '../../pages/Error/Error.js';

export default  function IndexRoutes () {
    return(
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Apropos' element ={<Apropos />}/>
        <Route path='*' element = {<Error404 />} />
      </Routes>
    </Router>
    )
}