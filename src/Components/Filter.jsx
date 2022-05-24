import { Select } from "@mui/material";
import React from "react";
import styled from "styled-components";
import MultipleSelectChip, {
  MultipleSelectChip2,
  MultipleSelected,
} from "./FilterItems";
import { Jobitems } from "../Data";
import { Mobile } from "../Mobile";
import {
  FavoriteBorderOutlined,
  LocationOnOutlined,
  TimelineOutlined,
} from "@mui/icons-material";

const Container = styled.div`
  padding: 20px;
  background-color: rgb(251, 251, 255);
  height: 100%;
  ${Mobile({
    overFlow: "hidden",
  })}
`;

const Section = styled.div`
  padding: 50px 200px;
  display: flex;
  ${Mobile({
    flexDirection: "column",
    padding: "0px",
  })}
`;

const Left = styled.div`
  display: flex;
  flex: 0.7;
  ${"" /* width: 50%; */}
  background-color: white;
  position: relative;
  width: 1vw;
  ${Mobile({
    width: "100%",
    flex: 1,
  })}
`;

const LeftCon = styled.div`
  padding: 35px;
  text-align: left;
  width: 10vw;
  ${Mobile({
    width: "100%",
    textAlign: "center",
  })}
`;

const Header = styled.h2`
  margin-bottom: 15px;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
`;

const Selectbtn = styled.div`
  margin-top: 15px;
  ${Mobile({
    display: "none",
  })}
`;

const Right = styled.div`
  display: flex;
  flex: 2;
  ${"" /* align-items: center; */}
  margin-left: 20px;
  ${Mobile({
    marginRight: '20px'
  })}
`;

const Search = styled.input`
  padding: 10px;
  width: 200px;
  ${Mobile({
    width: 300,
  })}
`;

const RightCon = styled.div`
  ${"" /* width: 60vw; */}
  ${"" /* background-color: white; */}
  ${"" /* width: 100%; */}

`;

const JobList = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
  border-radius: 5px;
  ${Mobile({
    flexDirection: 'column',padding: '20px',alignItems: 'start',marginTop: '20px',width: '100%'
  })}
`;

const Job = styled.h2`
  font-size: 20px;
  font-family: "Roboto", sans-serif;
`;

const SelectDetail = styled.div``;

const JobCon = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ${"" /* overflow: hidden; */}
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
  ${"" /* -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75); */}
  background-color: white;
  width: 100%;
  height: 150px;
  margin-bottom: 30px;
  border-radius: 5px;
  &&:hover {
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease;
  }
`;

const Img = styled.img`
  max-width: 95px;
  max-height: 95px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const ImgCon = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 95px;
  height: 90px;
  background-color: rgb(240, 240, 240);
  object-fit: cover;
`;

const Title = styled.div``;

const Info = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
const Location = styled.h3`
  font-size: 20px;
  display: flex;
`;

const Span = styled.div`
  margin-right: 10px;
`;

const Tag = styled.div`
  background-color: hsl(205, 100%, 96%);
  ${"" /* padding: 5px; */}
  font-size: 13px;
  font-weight: 560;
  border-radius: 10px;
  margin-left: 20px;
  color: black;
`;

const RightSection = styled.div``;

const Top = styled.div`
  display: flex;
`;
const Save = styled.div`
  background-color: hsl(205, 100%, 96%);
  color: lightgreen;
  width: 50px;
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  &&:hover {
    color: white;
    background-color: lightgreen;
    transition: all 0.3s ease;
  }
`;

const Apply = styled.button`
  margin-left: 20px;
  width: 130px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: lightgreen;
  &&:hover {
    color: green;
    background-color: transparent;
    transition: all 0.3s ease;
    border: 1px solid lightgreen;
  }
`;

const Bottom = styled.h3`
  color: lightgrey;
  font-size: 16px;
  margin-top: 10px;
  text-align: right;
  ${"" /* font-family: cursive; */}
`;

const LocateSpan = styled.div`
  display: flex;
  ${"" /* justify-content: space-evenly; */}
  margin-right: 15px;
`;

const Selectbtn1 = styled.div`
  margin-top: 15px;
  display: none;
  ${Mobile({
    display: "block",
  })}
`;

function Filter() {
  return (
    <Container>
      <Section>
        <Left>
          <LeftCon>
            <Header>Filter</Header>
            <Search placeholder="search" />
            <Selectbtn>
              <MultipleSelectChip />
            </Selectbtn>
            <Selectbtn1>
              <MultipleSelectChip2 />
            </Selectbtn1>
            <Selectbtn1>
              <MultipleSelectChip2 />
            </Selectbtn1>
            <Selectbtn1>
              <MultipleSelectChip2 />
            </Selectbtn1>
            <Selectbtn></Selectbtn>
            <Selectbtn>
              <MultipleSelectChip />
            </Selectbtn>
          </LeftCon>
        </Left>
        <Right>
          <RightCon>
            <JobList>
              <Job>JobList</Job>
              <SelectDetail>
                <MultipleSelectChip />
              </SelectDetail>
            </JobList>
            <JobCon>
              {Jobitems.map((props) => (
                <Item key={props.id}>
                  <LeftSection>
                    <ImgCon>
                      <Img src={props.img} />
                    </ImgCon>
                    <Title>
                      <Info>{props.title}</Info>
                      <Location>
                        <LocateSpan>
                          <Span>
                            <LocationOnOutlined />
                          </Span>
                          {props.Location}
                          {/* <Tag>{props.tag}</Tag> */}
                        </LocateSpan>
                        <LocateSpan>
                          <Span>
                            <TimelineOutlined />
                          </Span>
                          {props.time}
                          {/* <Tag>{props.tag}</Tag> */}
                        </LocateSpan>
                      </Location>
                    </Title>
                  </LeftSection>

                  <RightSection>
                    <Top>
                      <Save>
                        <FavoriteBorderOutlined />
                      </Save>
                      <Apply>Apply now</Apply>
                    </Top>
                    <Bottom>Date line:{props.date}</Bottom>
                  </RightSection>
                </Item>
              ))}
            </JobCon>
          </RightCon>
        </Right>
      </Section>
    </Container>
  );
}

export default Filter;
