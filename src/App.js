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
import Profilepage from "./Pages/Profilepage";

// import Bodysection from './Components/Body';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <ScrollToTop>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Filter" element={user ? <FilterCat replace /> : <Login/>} />
          <Route element={user ? <Navigate to="/" replace /> : <Home/>}/>
          <Route path="/home" element={user ? <FilterCat replace /> : <Home/>}/>
          {/* <Route
            exact
            path="/"
            // element={user ? <Navigate to="/" replace /> : <Home/>}
          /> */}
          <Route path="/browsemorejobs/:findjobs" element={<FilterCat />} />
          {/* <Route
            path="/home"
            // element={user ? <Navigate to="/" replace /> : <Login />}
          /> */}
          <Route path="/jobinfo" element={<Jobinfo />} />
          <Route path="/Profile" element={user ? <Profilepage replace /> : <Login />}/>
          <Route
            path="/Login"
            element={user ? <Navigate to="/home" replace /> : <Login />}
          />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
