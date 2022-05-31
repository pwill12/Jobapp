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

const Droptop = styled.div`
  margin-top: 20px;
`;
const Center = styled.div`
  display: flex;
`;

const Signup = styled.div`
  ${"" /* display:flex; */}
  ${"" /* justify-content: flex-end; */}
`;
// const Container = styled.div`
//   display: flex;
//   padding: 20px;
//   justify-content: space-between;
// `

{
  /* <style type="text/css">
  {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      font-size: 1.5rem;
    }
    `}
</style> */
}

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

`
const Loca = styled.h4`
  font-size: 15px;
  text-align: center;
  margin-top: 10px;

`

const View = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
const Profile = styled.button`
  width: 100%;
  padding: 7px;
  border: 1px solid #000;
`
const ItemCon = styled.div`
`
const Item = styled.div`
 display: flex;align-items: center;
 ${'' /* justify-content: start; */}
 ${'' /* margin: 0px; */}
`
const Find = styled.span`
 margin-left: 15px;
`

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container className="mt-2">
        <Navbar.Brand href="#home" className="text-primary">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        {/* <span class="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <Muu>
                <ImgCon>
                  <Cont>
                    <Img src="https://preview.colorlib.com/theme/jobboard2/img/svg_icon/4.svg" />
                  </Cont>
                </ImgCon>
                <Name>princewill</Name>
                <Loca>lagos,Nigeria</Loca>
                <View>
                  <Profile>view profile</Profile>
                </View>
              </Muu>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action/3.1"
                style={{ width: "23vw"}}
              >
                <ItemCon>
                  <Item><LocationOff/><Find>Find a job</Find></Item>
                </ItemCon>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <ItemCon>
                  <Item><LocationOnRounded/><Find>Search</Find></Item>
                </ItemCon>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link
              className="text-dark d-flex align-items-center"
              href="#deets"
            >
              <Signup>Login</Signup>
            </Nav.Link>
            <Button
              className="btn btn-primary btn-md"
              style={{ width: "150px" }}
            >
              <Nav.Link className="text-white" href="#deets">
                <Signup>Post JoB</Signup>
              </Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
