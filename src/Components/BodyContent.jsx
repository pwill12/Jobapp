import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Button } from "react-bootstrap";
import styled from "styled-components";
import { Mobile } from "../Mobile";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 0px;
  ${"" /* margin-top: -15px; */}
  height: 90vh;
  display: flex;
  align-items: center;
  background-color: #f1f0fe;
  ${"" /* justify-content: center; */}
  ${Mobile({
    padding: "10px",
    height: "100%",
    marginTop: "0px",
    overflow: "hidden",
  })}
`;
const Left = styled.div`
  margin-left: 30px;
  ${"" /* margin-bottom: 50px; */}
  ${"" /* flex: 1; */}
  width: 50%;
  ${"" /* margin-top: -20px; */}
  ${Mobile({ margin: "0px", width: "100%", marginTop: "20px" })}
`;
const Title = styled.h2`
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  ${Mobile({ fontSize: "25px" })}
`;
const Find = styled.h1`
  font-size: 50px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  margin: 20px 0px;
  ${Mobile({ fontSize: "31px", margin: "10px 0px" })}
`;
const Desc = styled.p`
  ${"" /* word-wrap: break-word; */}
  font-size: 20px;
  margin-bottom: 20px;
  ${Mobile({ fontSize: "17px" })}
`;
const Right = styled.div`
  width: 50%;
  ${"" /* flex: 1; */}
  ${Mobile({ display: "none" })}
`;
const ImgCon = styled.img`
  width: 85%;
  height: 70vh;
  margin-left: 90px;
  image-fit: cover ${"" /* ${Mobile({display: 'none'})} */};
`;

const Wrapper = styled.div`
  display: flex;
  padding: 50px 120px;
  justify-content: center;
  margin: auto;
  align-items: center;
  ${Mobile({ justifyContent: "start", padding: "20px" })}
`;

const Button = styled.div`
  display: flex;
  ${Mobile({ flexDirection: "column" })}
`;
const Btn1 = styled.button`
  margin-right: 20px;
  border: none;
  background-color: black;
  color: white;
  width: 200px;
  padding: 10px;
  border-radius: 4px;
  ${Mobile({ width: "100%", marginBottom: "15px" })}
`;
const Btn2 = styled.button`
  border: none;
  color: grey;
  background-color: white;
  width: 200px;
  padding: 10px;
  border-radius: 7px;
  ${Mobile({ width: "100%" })}
`;
const Trusted = styled.div`
  margin-top: 20px;
`;
const Trust = styled.p`
  font-weight: bold;
`;
const Companies = styled.div`
  width: 100%;
  margin-top: 20px;
`;
const Company = styled.img`
  ${"" /* margin-right: 10px; */}
  margin-right: 13px;
  margin-bottom: 12px;
  width: 130px;
  ${Mobile({ width: "100px", marginBottom: "15px" })}
`;

function BodyContent() {
  useEffect(() => {
    Aos.init({ duration: 2200 });
  }, []);
  return (
    <Container>
      <Wrapper>
        <Left data-aos="fade-right">
          <Title>4536+ Jobs listed</Title>
          <Find>Find Your Dream Job</Find>
          <Desc>
            Lorem ipsum dolor sit cum explicabo id? Quibusdam, itaque doloribus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            optio voluptatum, ullam magnam nulla placeat. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quas, fugiat.
          </Desc>
          <Button>
            <Link to={'/login'}>
              <Btn1>Apply</Btn1>
            </Link>
            <Link to={'/company'}>
              <Btn2>Post a Job</Btn2>
            </Link>
          </Button>
          <Trusted>
            <Trust>Trusted by 1500+ companies and business</Trust>
          </Trusted>
          <Companies>
            <Company src="images/logo-03.png" />
            <Company src="images/logo-06.png" />
            <Company src="images/logo-05.png" />
            <Company src="images/logo-01.png" />
            <Company src="images/logo-04.png" />
          </Companies>
        </Left>
        <Right data-aos="fade-left">
          <ImgCon src="images/xcc-min1.png" />
        </Right>
      </Wrapper>
    </Container>
  );
}

export default BodyContent;
