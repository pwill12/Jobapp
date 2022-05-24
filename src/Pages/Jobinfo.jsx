import React from "react";
import MyNavbar from "../Components/Navbar";
import BrowseMoreJobs from "../Components/BrowseMoreJobs";
import styled from "styled-components";

const Container = styled.div``;

function Jobinfo() {
  return (
    <Container>
      <MyNavbar />
      <BrowseMoreJobs/>
    </Container>
  );
}

export default Jobinfo;
