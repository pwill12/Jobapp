import React from "react";
import Home from "./Pages/Home";
import "./custom.scss";
import Jobinfo from "./Pages/Jobinfo";
import ScrollToTop from "./Scroll";
import FilterCat from "./Pages/FilterCat";
import Login from "./Pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import { useSelector } from "react-redux";

// import Bodysection from './Components/Body';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const user = useSelector((state)=> state.user.currentUser)
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={user ? <Navigate to="/home" replace /> : <Home/>} />
          <Route path="/browsemorejobs/:findjobs" element={<FilterCat />} />
          <Route path="/home" element={<FilterCat />} />
          <Route path="/jobinfo" element={<Jobinfo />} />
        <Route path="/Login"  element={user ? <Navigate to="/home" replace /> : <Login/>}/>
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
