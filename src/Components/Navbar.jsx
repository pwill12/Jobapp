import React, { useState } from "react";
import { Mobile } from "../Mobile";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Nav.css";

import styled from "styled-components";

import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LocationOff,
  LocationOnRounded,
  Search,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useSelector } from "react-redux";
import { logout } from "../redux/users";
import { updatedout } from "../redux/updateContact";
import { blue } from "@mui/material/colors";
import { Badge } from "@mui/material";

const Conts = styled.div`
  ${"" /* margin-top: 20px; */}
  ${Mobile({ display: "none" })}
`;

const Signup = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-right: 10px;
`;

const ImgCon = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Cont = styled.div`
  display: flex;
  justify-content: center;
  // background-color: grey;
  border-radius: 50%;
  ${"" /* max-width: 200px; */}
  width: 100px;
  height: 100px;
  object-fit: cover;
  align-items: center;
`;
const Img = styled.img`
  max-width: 100px;
  border-radius: 10px;
  ${"" /* width: 10vw; */}
`;

const Name = styled.h3`
  font-size: 20px;
  text-align: center;
`;

const Muu = styled.div`
  padding: 10px;
`;
const Loca = styled.h4`
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
`;

const View = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const Profile = styled.button`
  width: 100%;
  padding: 7px;
  border: 1px solid #000;
`;
const ItemCon = styled.div``;
const Item = styled.div`
  display: flex;
  align-items: center;
  ${"" /* justify-content: start; */}
  ${"" /* margin: 0px; */}
`;
const Find = styled.span`
  margin-left: 15px;
`;

const Text = styled.button`
  font-size: 15px;
  color: white;
  background-color: lightgreen;
  width: 170px;
  border-radius: 4px;
  padding: 15px;
  border: none;
`;

const Myimg = styled.div`
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
`;

const Myimg2 = styled.a`
  max-height: 40px;
  ${"" /* border-radius: 50%; */}
  display: none;
  ${Mobile({ display: "block", maxWidth: "40px" })}
`;
const Imgg = styled.img`
  width: 30px;
  border-radius: 50%;
`;

const Imgg2 = styled.img`
  width: 40px;
  border-radius: 50%;
`;

const Overall = styled.div``;
const MobCon = styled.div`
  display: none;
  ${Mobile({ display: "block" })}
`;

const Signout = styled.div`
  border: none;
  ${"" /* background-color: white; */}
`;
const MySearch = styled.div`
  ${"" /* background-color: white; */}
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  ${Mobile({ display: "none" })}
`;
const Searchcon = styled.input`
  display: flex;
  width: 500px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid lightgrey;
  ${"" /* flex: 1; */}
  justify-content: center;
  align-items: center;
  ${"" /* background-color: white; */}
`;

function MyNavbar() {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const user = useSelector((state) => state.user.currentUser);

  const MyClick = (e) => {
    e.preventDefault();
    // console.log('first')
    dispatch(logout());
    dispatch(updatedout());
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Will{" "}
            <i class="fas fa-laptop-code" style={{ color: "grey" }}>
              {" "}
            </i>
          </NavLink>{" "}
          {user ? (
            <MySearch>
              <Searchcon placeholder="Search Jobs" />{" "}
              <Search style={{ marginLeft: "-40px" }} />{" "}
            </MySearch>
          ) : (
            <h5 style={{ color: "grey", fontSize: "20px", wordSpacing: "3px" }}>
              {" "}
              Welcome Guest{" "}
            </h5>
          )}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {" "}
            {user ? (
              <Overall>
                <Conts>
                  <Nav className="">
                    <Nav.Link href="#">
                      <Myimg>
                        {/* <Imgg src={user.img} /> */}
                        {user.img === undefined ? (
                          <Imgg src="images/user.png" />
                        ) : (
                          <Imgg src={user.img} />
                        )}
                      </Myimg>{" "}
                    </Nav.Link>{" "}
                    <NavDropdown
                      title={user.username}
                      id="collasible-nav-dropdown"
                      align={{ lg: "end" }}
                      color="secondary"
                      variant="secondary"
                      style={{}}
                    >
                      <Muu>
                        <ImgCon>
                          <Cont>
                            {/* <Img src={user.img} /> */}
                            {user.img === undefined ? (
                              <Img src="images/user.png" />
                            ) : (
                              <Img src={user.img} />
                            )}
                          </Cont>{" "}
                        </ImgCon>{" "}
                        <Name> {user.username} </Name>{" "}
                        <Loca> lagos, Nigeria </Loca>{" "}
                        <Link
                          to={"/Profile"}
                          style={{ textDecoration: "none" }}
                        >
                          <View>
                            <Profile> view profile </Profile>{" "}
                          </View>{" "}
                        </Link>{" "}
                      </Muu>{" "}
                      <NavDropdown.Divider />
                      <NavDropdown.Item style={{ width: "23vw" }}>
                        <ItemCon>
                          <Item>
                            <LocationOff />
                            <Link
                              to={"/home"}
                              style={{ textDecoration: "none" }}
                            >
                              <Find> Find a job </Find>{" "}
                            </Link>{" "}
                          </Item>{" "}
                        </ItemCon>{" "}
                      </NavDropdown.Item>{" "}
                      <NavDropdown.Item href="home">
                        <ItemCon>
                          <Item>
                            <LocationOnRounded />
                            <Find> Search </Find>{" "}
                          </Item>{" "}
                        </ItemCon>{" "}
                      </NavDropdown.Item>{" "}
                      <NavDropdown.Item href="#action/3.3">
                        Something{" "}
                      </NavDropdown.Item>{" "}
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/">
                        <Signout onClick={MyClick}> Singout </Signout>{" "}
                      </NavDropdown.Item>{" "}
                    </NavDropdown>{" "}
                  </Nav>{" "}
                </Conts>{" "}
                <MobCon>
                  <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/"
                        activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                      >
                        Home{" "}
                      </NavLink>{" "}
                    </li>{" "}
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/Profile"
                        activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                      >
                        Myprofile{" "}
                      </NavLink>{" "}
                    </li>{" "}
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/blog"
                        activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                      >
                        <NavLink to="/" style={{ textDecoration: "none" }}>
                          <Signout onClick={MyClick}> Singout </Signout>
                        </NavLink>
                      </NavLink>{" "}
                    </li>{" "}
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/contact"
                        activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                      >
                        Contact Us{" "}
                      </NavLink>{" "}
                    </li>{" "}
                  </ul>{" "}
                </MobCon>{" "}
              </Overall>
            ) : (
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/Login"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Logins
                  </NavLink>{" "}
                </li>{" "}
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/about"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    For Employers{" "}
                  </NavLink>{" "}
                </li>{" "}
                {/* <li className="nav-item">
                                    <NavLink
                                      exact
                                      to="/blog"
                                      activeClassName="active"
                                      className="nav-links"
                                      onClick={handleClick}
                                    >
                                      Blog
                                    </NavLink>
                                  </li> */}{" "}
                {/* <li className="nav-item">
                                    <NavLink
                                      exact
                                      to="/contact"
                                      activeClassName="active"
                                      className="nav-links"
                                      onClick={handleClick}
                                    >
                                      Login
                                    </NavLink>
                                  </li> */}{" "}
              </ul>
            )}{" "}
          </ul>{" "}
          <div className="nav-icon" onClick={handleClick}>
            <div style={{ marginRight: "10px", width: "40px" }}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}> </i>
            </div>
            {user && (
              <>
                <div style={{ display: "flex" }}>
                  <div style={{ width: "40px", marginRight: "10px" }}>
                    <Badge color="secondary" badgeContent={0} showZero>
                      <EmailOutlinedIcon />
                    </Badge>
                  </div>
                  <Myimg2>
                    <NavLink to="/Profile">
                      {user.img === undefined ? (
                        <Imgg2 src="images/user.png" />
                      ) : (
                        <Imgg2 src={user.img} />
                      )}
                      {/* <Imgg2 src={user.img === null ?  : user.img} /> */}
                    </NavLink>
                  </Myimg2>
                </div>
              </>
            )}
          </div>{" "}
        </div>{" "}
      </nav>{" "}
    </>
  );
}

export default MyNavbar;
