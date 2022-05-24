import React from "react";

// import './Navbar.scss'

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

function MyNavbar() {
  return (
  <Navbar collapseOnSelect expand="lg"  variant="light">
      <Container className="mt-2">
        <Navbar.Brand href="#home" className="text-primary">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="PAGES" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
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
            <Button className="btn btn-primary btn-sm">
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
