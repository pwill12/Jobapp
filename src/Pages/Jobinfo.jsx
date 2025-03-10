import React, { useEffect, useState } from "react";
import MyNavbar from "../Components/navbar/Navbar";
import BrowseMoreJobs from "../Components/BrowseMoreJobs";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { publicRequest } from "../apirequests";

const Container = styled.div``;

function Jobinfo() {

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  return (
    <Container>
      <MyNavbar />
      <BrowseMoreJobs ids={id}/>
    </Container>
  );
}

export default Jobinfo;
