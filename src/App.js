import React from "react";
import Home from "./Pages/Home";
import "./custom.scss";
import Jobinfo from "./Pages/Jobinfo";
import ScrollToTop from "./Scroll";
import FilterCat from "./Pages/FilterCat";
import ReactNotification from "react-notifications-component";
import { Store } from "react-notifications-component";
// import 'animate.css'
import "react-notifications-component/dist/theme.css";
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
import SavedJobs from "./Pages/SavedJobs";
import { GlobalProvider } from "./redux/Globalstate";
import MyRegister from "./Pages/Register";
import Employer from "./Pages/Employer";

// import Bodysection from './Components/Body';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <GlobalProvider>
      <Router>
        <ScrollToTop>
          <Routes>
            {" "}
            {/* <Route path="/jobinfo/:ids" element={<Jobinfo />} /> */}{" "}
            <Route
              exact
              path="/"
              element={user ? <FilterCat replace /> : <Home />}
            />{" "}
            <Route path="/saved" element={<SavedJobs />} />{" "}
            <Route
              path="/Filter"
              element={user ? <FilterCat replace /> : <Login />}
            />{" "}
            <Route element={user ? <Navigate to="/" replace /> : <Home />} />{" "}
            <Route
              path="/home"
              element={user ? <FilterCat replace /> : <Home />}
            />{" "}
            <Route path="/browsemorejobs/:findjobs" element={<FilterCat />} />{" "}
            <Route
              path="/Profile"
              element={user ? <Profilepage replace /> : <Login />}
            />{" "}
            <Route
              path="/Login"
              element={user ? <Navigate to="/home" replace /> : <Login />}
            />{" "}
            <Route
              path="/register"
              element={user ? <Navigate to="/home" replace /> : <MyRegister />}
            />{" "}
            <Route
              path="/jobinfo/:ids"
              element={user ? <Jobinfo replace /> : <Login />}
            />{" "}
            <Route
              path="/company"
              element={<Employer/>}
            />{" "}
          </Routes>{" "}
        </ScrollToTop>{" "}
      </Router>{" "}
    </GlobalProvider>
  );
}

export default App;
