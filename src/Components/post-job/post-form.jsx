import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Mobile } from "../../Mobile";
import './post.css'
import Postform from "./form";

const Contain = styled.div`
  ${Mobile({ display: 'none' })}
`

// const Mobilesf = styled.div`
//   display: none;
//   ${Mobile({ display: 'block', textAlign: 'center' })}
// `



function Postsjob() {

  // console.log(employer)

  return (
    <div className="container">
      <h2>
        Job Details
      </h2>
      <Postform />
    </div>
  );
}

export default Postsjob;
