import React, { useEffect } from "react";
import styled from "styled-components";
import { category } from "../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import ApiIcon from "@mui/icons-material/Api";
import { Mobile } from "../Mobile";
import { Link } from "react-router-dom";



const Container = styled.div`
  height: 100%;
  padding: 20px;
  overflow: hidden;
  background-color: rgb(251, 251, 255);

`;
const Section = styled.div`
  display: flex;
  ${'' /* flex-direction: row; */}
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 100px 90px 50px 90px;
  ${Mobile({
    flexDirection: 'column',padding: '20px'
  })}

  ${'' /* padding: 20px; */}

`;
const Item = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  ${'' /* background-color: ${props=>props.bg}; */}
  ${'' /* -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75); */}
  border: 1px solid lightgrey;
  border-radius: 7px;
  ${'' /* background-color: rgb(251, 251, 255); */}
  background-color: white;
  min-width: 250px;
  max-width: 270px;
  text-decoration: none;
  height: 230px;
  ${'' /* margin-right:20px; */}
  margin: 0px 15px auto;
  margin-bottom: 20px;
  &&:hover{
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.2);
    ${'' /* border: 1px solid green; */}
    transition: none;

  }
  ${Mobile({
    padding: '30px',width: '300px',height: '200px',margin: '15px 0px',flex: 'auto'
  })}

`;
const ImgCon = styled.div`
  ${'' /* background-color: red; */}
  width: 70px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  margin: auto;
  

`;
const Title = styled.h3`
  margin-top: 10px;
  font-size: 17px;
  font-weight: 600;

`;
const Totals = styled.h3`
  font-size: 20px;
  color: red;
`;

const TitleCat = styled.h1`
  text-align: center;
  margin: 40px 0px 0px 0px;

`

function Categories() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <TitleCat data-aos='fade-left'>Explore Top Categories</TitleCat>
      <>

      <Section>
        {category.map((props) => (
          <Item bg={props.bg} key={props.id} data-aos='fade-up'>
          <Link to={'/browsemorejobs/'+props.tag} style={{ textDecoration: 'none' }}>
            <ImgCon>
              {/* <ApiIcon sx={{ fontSize: 70 }} /> */}
              {props.img}
            </ImgCon>
            <Title>{props.title}</Title>
            <Totals>({props.Total})</Totals>
          </Link>  
          </Item>
        ))}
      </Section>
      </>
    </Container>
  );
}

export default Categories;
