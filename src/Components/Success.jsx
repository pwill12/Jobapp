import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import PaidAdminRegister from "./AdminReg";

const Container = styled.div`
  padding: 20px;
  // display: flex;
`;
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 100px;
  // flex-direction: column;
`;
const ImgCon = styled.div`
  width: 50%;
  // height: 480px;
`;
const Img = styled.img`
  width: 500px;
  height: 480px;
`;
const Account = styled.h5``;

function Success() {
  return (
    <Container>
      <Section>
        <ImgCon>
          <Img src="images/Completed-pana.png" />
        </ImgCon>
        <div style={{ width: "50%" }}>
          <PaidAdminRegister />
        </div>
        {/* <Account>Account Created Successfully</Account> */}
        {/* <Button color="secondary" style={{border: '1px solid lightgrey', background: 'lightgrey'}}>Go to Login</Button> */}
      </Section>
    </Container>
  );
}

export default Success;
