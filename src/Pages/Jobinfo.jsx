import React from "react";
import MyNavbar from "../Components/Navbar";
import BrowseMoreJobs from "../Components/BrowseMoreJobs";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

function Jobinfo() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  // console.log(id)
  return (
    <Container>
      <MyNavbar />
      {/* <div>hello</div> */}
      <BrowseMoreJobs ids={id}/>
    </Container>
  );
}

export default Jobinfo;
