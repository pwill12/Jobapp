import React from "react";
import { Mobile } from "../Mobile";
// import './Nav.css'

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
import { LocationOff, LocationOnRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Droptop = styled.div`
  margin-top: 20px;
`;
const Center = styled.div`
  display: flex;
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
  background-color: black;
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
  max-width: 30px;
  max-height: 30px;
`;
const Imgg = styled.img`
  width: 30px;
`;

function MyNavbar() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      // style={{
      //   position: "-webkit-sticky",
      //   position: "sticky",
      //   top: 0,
      // }}
    >
      <Container className="mt-2" style={{ fontSize: "20px"}}>
        <Navbar.Brand
          href="#home"
          className="text-primary"
          style={{ fontSize: "30px" }}
        >
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto"></Nav>
          <Nav>
            {user ? (
              <Nav className="">
                <Nav.Link href="#features">
                  <Myimg>
                    <Imgg src={user.img} />
                  </Myimg>
                </Nav.Link>
                {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                <NavDropdown
                  title={user.username}
                  id="collasible-nav-dropdown"
                  align={{ sm: "end" }}
                  // style={{border: '1px solid green'}}
                >
                  <Muu>
                    <ImgCon>
                      <Cont>
                        <Img src={user.img} />
                      </Cont>
                    </ImgCon>
                    <Name>{user.username}</Name>
                    <Loca>lagos,Nigeria</Loca>
                    <View>
                      <Profile>view profile</Profile>
                    </View>
                  </Muu>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#action/3.1"
                    style={{ width: "20vw" }}
                  >
                    <ItemCon>
                      <Item>
                        <LocationOff />
                        <Find>Find a job</Find>
                      </Item>
                    </ItemCon>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <ItemCon href="#action/3.1">
                      <Item>
                        <LocationOnRounded />
                        <Find>Search</Find>
                      </Item>
                    </ItemCon>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Signout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link
                  className="text-dark d-flex align-items-center"
                  href="#deets"
                >
                  <Signup>For Employers</Signup>
                </Nav.Link>
                {/* <Button> */}
                <Nav.Link className="text-white" href="/login">
                  <Text>Login</Text>
                </Nav.Link>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
