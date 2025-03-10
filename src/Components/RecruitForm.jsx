import { Button } from "@mui/material";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Mobile, Mobile as Mobiles } from "../Mobile";
import { Removedetails } from "../redux/EmployerRedux";
import { recruitadmin } from "../redux/RecruitApi";
import MyNavbar from "./navbar/Navbar";
import MySpinner from "./Spinner";
import StripeContainer from "./StripePayment";
import Success from "./Success";

const Contain = styled.div`
  ${Mobiles({display: 'none'})}
`

const Mobilesf = styled.div`
  display: none;
  ${Mobile({display: 'block', textAlign: 'center'})}
`



function RecruitForm() {
  function GridComplexExample() {
    const dispatch = useDispatch();

    const [email, setemail] = useState("");
    const [website, setwebsite] = useState("");
    const [location, setlocation] = useState("");
    const [name, setname] = useState("");

    const handleClick = (e) => {
      e.preventDefault();
      recruitadmin(dispatch, { email, website, location, name });
      // user = updated
      console.log("clicked");
    };

    // console.log(user)

    return (
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridText">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company Name"
              onChange={(e) => setname(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setemail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>website</Form.Label>
            <Form.Control
              type="text"
              placeholder="website"
              onChange={(e) => setwebsite(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="location"
            onChange={(e) => setlocation(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="You accept to our terms and condition" />
        </Form.Group>
        {/* <Link to="/checkout"> */}
        <Button
          variant="primary"
          // type="submit"
          href="/checkout"
          onClick={handleClick}
        >
          continue to create account
        </Button>
        {/* </Link> */}
      </Form>
    );
  }

  const employer = useSelector((state) => state.employer.details);
  // console.log(employer)
  const { isFetching } = useSelector((state) => state.employer);

  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.preventDefault();
    // user = updated
    dispatch(Removedetails());
    console.log("remove");
  };

  console.log(employer)

  return (
    <div>
    <Contain>
      <MyNavbar />
      {isFetching === true ? (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '120px'}}>
          <MySpinner/>
        </div>
      ) : (
        <>
          {employer === null ? (
            <div style={{ padding: "40px 120px" }}>
              <h2 style={{ marginBottom: "20px" }}>
                Tell Us About Your Company
              </h2>
              <GridComplexExample />
            </div>
          ) : (
            <>
              <Button onClick={handleRemove} style={{padding: '20px 80px'}}>Go back</Button>
              <StripeContainer />
            </>
          )}
        </>
      )}    
    </Contain>
    <Mobilesf>Pls Switch to desktop</Mobilesf>
    </div>
  );
}

export default RecruitForm;
