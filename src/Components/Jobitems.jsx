import { LocationOnOutlined, TimelineOutlined } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { Mobile } from "../Mobile";
import { Favourited } from "./favourited";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
  ${"" /* -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75); */}
  background-color: white;
  min-width: 50vw;
  height: 150px;
  margin-bottom: 30px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  &&:hover {
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease;
  }
  ${Mobile({
    flexDirection: "column",
    padding: "15px",
    height: "250px",
    minWidth: "90vw",
    alignItems: "start",
    justifyContent: "space-around",
    overFlow: "hidden",
  })}
`;

const Img = styled.img`
  max-width: 60px;
  max-height: 50px;
  ${Mobile({
    maxWidth: "60px",
    maxHeight: "55px",
  })}
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const ImgCon = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  min-width: 80px;
  height: 70px;
  background-color: rgb(240, 240, 240);
  object-fit: cover;
  ${Mobile({
    minWidth: "90px",
    height: "90px",
    marginRight: "15px",
    overFlow: "hidden",
  })}
`;

const Title = styled.div`
  ${Mobile({ marginTop: "10px" })}
`;

const Info = styled.h1`
  font-size: 19px;
  font-weight: 600;
`;
const Location = styled.div`
  font-size: 20px;
  display: flex;
  ${Mobile({
    display: "flex",
    flexDirection: "column",
  })}
`;

const Span = styled.div`
  margin-right: 10px;
`;

const RightSection = styled.div`
  ${Mobile({
    overFlow: "hidden",
  })}
`;

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
  ${Mobile({
    textAlign: "start",
  })}
`;

const LocateSpan = styled.div`
  display: flex;
  ${"" /* justify-content: space-evenly; */}
  margin-right: 15px;
  font-size: 17px;
`;

const Position = styled.div`
  color: lightgrey;
`;

function Jobitems({ tags, filters }) {
  const [jobs, setjobs] = useState([]);
  const [filtered, setFilteredjobs] = useState([]);

  useEffect(() => {
    const getjobs = async () => {
      try {
        const res = await axios.get(
          tags
            ? `https://willdevjobs.herokuapp.com/api/findjobs?tags=${tags}`
            : "https://willdevjobs.herokuapp.com/api/findjobs"
        );

        setjobs(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getjobs();
  }, [tags]);

  //   const mmm = Object.fromEntries(filters)

  console.log(filtered);

  useEffect(() => {
    // filters,tags &&
    setFilteredjobs(
      jobs.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [jobs, tags, filters]);
  // console.log(filtered)
  return (
    <div>
      <>
        {filters
          ? filtered.map((props, i) => (
              <Item key={props._id}>
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
                        {props.location?.map((prop) => (
                          <div>{prop},</div>
                        ))}
                      </LocateSpan>
                      <LocateSpan>
                        <Span>
                          <TimelineOutlined />
                        </Span>
                        {}
                        <Position>{props.vacancy} applied</Position>
                      </LocateSpan>
                    </Location>
                  </Title>
                </LeftSection>

                <RightSection>
                  <Top>
                    <Save>
                      <Favourited jobs={props} />
                    </Save>
                    <Link to={"/jobinfo/" + props._id}>
                      <Apply>Apply now</Apply>
                    </Link>
                  </Top>
                  <Bottom>Date line:{props.createdAt}</Bottom>
                </RightSection>
              </Item>
            ))
          : jobs.map((props, i) => (
              <Item key={i}>
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
                        {/* {props.location} */}
                        {props.location?.map((prop) => (
                          <div>{prop},</div>
                        ))}
                      </LocateSpan>
                      <LocateSpan>
                        <Span>
                          <TimelineOutlined />
                        </Span>
                        {}
                        {/* <Tag>{props.tag}</Tag> */}
                      </LocateSpan>
                    </Location>
                  </Title>
                </LeftSection>

                <RightSection>
                  <Top>
                    <Save>
                      <Favourited jobs={props} />
                    </Save>
                    <Link to={"/jobinfo/" + props._id}>
                      <Apply>Apply now</Apply>
                    </Link>
                  </Top>
                  <Bottom>Date line:{props.createdAt}</Bottom>
                </RightSection>
              </Item>
            ))}
      </>
    </div>
  );
}

export default Jobitems;
