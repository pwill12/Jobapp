import React, { useState } from "react";
import { Col, Form, Row ,Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Select from 'react-select';
import "./form.css"

export default function Postform() {
  const dispatch = useDispatch();

  const [email, setimgurl] = useState("");
  const [website, setwebsite] = useState("");
  // const [location, setlocation] = useState("");
  const [title, settitle] = useState("");
  const [location, setlocation] = useState([]);




  const colourOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  console.log(location.map((option) => {
    return option.value
  }))


  return (
    <>
    <Form>
      <Col className="mb-3">
        <Form.Group as={Col} controlId="formGridText" className="mb-3">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
          variant='flat'
            type="text"
            size="lg"
            className="ccc"
            placeholder="E.g React Developer"
            onChange={(e) => settitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridText" className="mb-3">
          <Form.Label>Cover Image</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            placeholder="Enter Image Url"
            onChange={(e) => setimgurl(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity" className="mb-3">
          <Form.Label>Location</Form.Label>
          <Select
            // defaultValue={[colourOptions[2], colourOptions[3]]}
            isMulti
            name="colors"
            options={colourOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(option) => setlocation(option)}
          />
          {/* <Form.Control /> */}
        </Form.Group>


        <Form.Group as={Col} controlId="formGridText" className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            size="lg"
            placeholder="website"
            onChange={(e) => setwebsite(e.target.value)}
          />
        </Form.Group>
      </Col>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control
          placeholder="location"
          size="lg"
          onChange={(e) => setlocation(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      
      <Col className="mb-3">
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Col>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="You accept to our terms and condition" />
      </Form.Group>
      {/* <Link to="/checkout"> */}
      <Button
        variant="primary"
        // type="submit"
        href="/checkout"
      // onClick={handleClick}
      >
        continue to create account
      </Button>
      {/* </Link> */}
    </Form>
    </>

  )

}
