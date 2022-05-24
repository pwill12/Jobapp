import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { Mobile } from "../Mobile";

const Container = styled.div`
  padding: 5px 15px;
  margin-top: -15px;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ${
    "" /* background: -webkit-linear-gradient(-45deg, #83c3e3 50%, #ec94ec 50%); */
  }
  ${Mobile({padding: '10px',height: '100%',marginTop: '20px',overflow: 'hidden'})}
`;
const Left = styled.div`
  margin-right: 40px;
  ${Mobile({marginRight: '0px',})}

`;
const Title = styled.h3``;
const Find = styled.h1`
  font-size: 50px;
  font-weight: 700;
  ${Mobile({fontSize: '26px'})}

`;
const Desc = styled.p``;
const Right = styled.div``;
const ImgCon = styled.img`
  width: 100%;
  height: 60vh;
  ${Mobile({display: 'none'})}

`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${Mobile({justifyContent: 'start',padding: '40px'})}

`;

function BodyContent() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <Wrapper>
        <Left data-aos='fade-right'>
          <Title>4536+ Jobs listed</Title>
          <Find>Find Your Dream Job</Find>
          <Desc>
            Lorem ipsum dolor sit cum explicabo id? Quibusdam, itaque doloribus.
          </Desc>
          <Button>Upload resume</Button>
        </Left>
        <Right data-aos='fade-left'>
          <ImgCon src="images/xcc-min1.png" />
        </Right>
      </Wrapper>
    </Container>
  );
}

export default BodyContent;
