import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Routers(){
  return(
    <Router>
      <Routes>
        <Route exact path = "/" element={<Sidebar />} />
      </Routes>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById('root')
);

