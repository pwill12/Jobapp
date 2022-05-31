import React from 'react';
import Home from './Pages/Home';
import './custom.scss'
import Jobinfo from './Pages/Jobinfo';
import FilterCat from './Pages/FilterCat';
import { BrowserRouter as Router, Routes, Route,Navigate,useParams } from "react-router-dom";

// import Bodysection from './Components/Body';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/browsemorejobs/:jobs/" element={<FilterCat />} />
        <Route path="/jobinfo" element={<Jobinfo />} />
        </Routes>
      </Router>
    
  );
}

export default App;
