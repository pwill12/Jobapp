import {
  MapOutlined,
  Public,
  WorkOutline,
  WorkOutlined,
} from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";
import { Mobile } from "../Mobile";
import { Favourited } from "./favourited";
import { useDispatch } from "react-redux";
import { postsaved } from "../redux/Postdata";
import MySpinner from "./Spinner";

const Container = styled.div`
  display: flex;
  padding: 20px;
  overflow: hidden;
  flex-direction: column;
  min-width: 50vw;
  height: 150px;
  ${"" /* height: 270px; */}
  justify-content: center;
  ${"" /* align-items: flex-start; */}
  background-color: white;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.3);
  ${"" /* border: 1px solid lightgrey; */}
  border-radius: 10px;
  margin-bottom: 30px;
  &&:hover {
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease;
  }
  ${Mobile({
  padding: " 0px 30px 6px 20px",
  flexDirection: "column",
  minHeight: "230px",
  justifyContent: "center",
  minWidth: "90vw",
  //alignItems: "center",
  overFlow: "hidden",
  backgroundColor: "white",
})}
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  ${"" /* padding: 30px; */}
  ${"" /* align-items: center; */}
  ${"" /* -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75); */}
  ${"" /* background-color: white; */}
  ${"" /* min-width: 50vw; */}
  ${"" /* height: 150px; */}
  ${"" /* margin-bottom: 30px; */}
  ${"" /* border-radius: 5px; */}
  ${"" /* border: 1px solid lightgrey; */}
    "" /* &&:hover {
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease;
  } */
  
  ${Mobile({
  backgroundColor: "blue",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  //overFlow: "hidden",
})}
`;

const Img = styled.img`
  ${"" /* max-width: 60px;
  max-height: 50px; */
  }
  max-width: 60px;
  min-width: 60px;
  max-height: 55px;
  border-radius: 7px;
  ${Mobile({
    maxHeight: "65px",
    maxWidth: "65px",
    minWidth: "65px",
  })}
`;

const LeftSection = styled.div`
  display: flex;
  ${"" /* align-items: center; */}
  ${Mobile({
  flexDirection: "row",
  position: "absolute",
})}
`;

const ImgCon = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  max-width: 80px;
  max-height: 80px;
  height: 70px;
  background-color: white;
  ${"" /* background-color: rgb(240, 240, 240); */}
  object-fit: cover;
  ${Mobile({
  maxWidth: "80px",
  height: "90px",
  marginRight: "15px",
  overFlow: "hidden",
})}
`;

const Title = styled.div`
  // font-family: "Roboto", sans-serif;
  display: flex;
  margin-top: -10px;
  justify-content: center;
  flex-direction: column;
  ${Mobile({ marginTop: "5px" })}
`;

const Info = styled.h1`
  font-size: 19px;
  font-weight: 600;
  // font-family: "Roboto", sans-serif;
  margin-bottom: 4px;
  ${Mobile({
  fontSize: "17px",
  marginBottom: "1px"
})}
`;

const Location = styled.div`
  font-size: 20px;
  display: flex;
  ${Mobile({
  display: "flex",
  flexDirection: "column",
  marginTop: "0px",
  fontSize: "17px",
})}
`;

const Span = styled.div`
  ${"" /* margin-right: 10px; */}
  font-size: 15px;
  color: grey;
  ${Mobile({
  marginTop: "0px",
})}
`;

const RightSection = styled.div`
  ${Mobile({
  overFlow: "hidden",
  position: "relative",
  marginTop: "90px",
  display: "flex",
  flexDirection: "column",
  order: 2,
})}
`;

const Top = styled.div`
  display: flex;
  ${Mobile({
  overFlow: "hidden",
  flexDirection: "row",
  order: 1,
})}
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
  width: 170px;
  color: green;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: transparent;
  border: 1px solid lightgreen;
  &&:hover {
    color: white;
    background-color: lightgreen;
    transition: all 0.3s ease;
    border: 1px solid lightgreen;
  }
    ${Mobile({
  width: "200px"
})}
`;

const Bottom = styled.h3`
  color: lightgrey;
  font-size: 12px;
  margin-top: 10px;
  left: 0px;
  text-align: right;
  ${"" /* font-family: cursive; */}
  ${Mobile({
  textAlign: "left",
  marginTop: "10px"
})}
`;

const LocateSpan = styled.div`
  display: flex;
  ${"" /* justify-content: space-evenly; */}
  margin-right: 15px;
  font-size: 17px;
  ${Mobile({
  flexDirection: "row",
  marginBottom: "5px",
  marginTop: "3px",
  fontSize: "15px",
})}
`;

const Salary = styled.div`
  color: lightgrey;
  font-size: 15px;
  margin-top: 3px;
  ${Mobile({
  marginTop: "",
})}
`;

const Tag = styled.span`
  background-color: hsl(205, 100%, 96%);
  padding: 10px;
  min-width: 170px;
  font-size: 13px;
  font-weight: 560;
  border-radius: 5px;
  margin-right: 10px;
  color: black;
  ${Mobile({
  marginRight: "5px",
  minWidth: "60px",
  fontSize: "10px",
  padding: "5px",
})}
`;

const TagLoc = styled.span`
  background-color: hsl(0, 0.00%, 96.10%);
  padding: 5px;
  min-width: 70px;
  font-size: 13px;
  font-weight: 560;
  border-radius: 5px;
  margin-right: 10px;
  color: black;
  cursor: pointer;
  ${Mobile({
  marginRight: "5px",
  minWidth: "60px",
  fontSize: "10px",
  padding: "5px",
})}
`;
const TagsCon = styled.div`
  margin-top: 5px;
  minwidth: 170px;
  ${Mobile({
  minWidth: "60px",
  marginTop: "10px",
})}
`;

const MyLoc = styled.div`
  margin-left: 7px;
  color: grey;
  font-size: 16px;
  ${Mobile({
  marginTop: "0px",
})}
`;

function Jobitems({ tags, filters }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [jobs, setjobs] = useState([]);
  const [loading, setloading] = useState(false);
  const [filtered, setFilteredjobs] = useState([]);
  const [errloading, seterrloading] = useState(false);


  useEffect(() => {
    const getjobs = async () => {
      setloading(true);
      try {
        const res = await axios.get(
          tags
            ? `https://jobs-api-u83r.onrender.com/api/findjobs?tags=${tags}`
            : "https://jobs-api-u83r.onrender.com/api/findjobs"
        );
        setjobs(res.data);
        setloading(false);
      } catch (err) {
        console.log(err);
        seterrloading(true)
        setloading(false)
      }
    };
    getjobs();
  }, [tags]);

  const dispatch = useDispatch();

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

  return (
    <div>
      {loading ? <MySpinner /> : errloading ? <p>error loading jobs</p> : jobs.length === 0 ? <p>No jobs found</p> : filtered.length === 0 ? <p>No jobs found</p> :
        filters
          ?
          <>
            {filtered.map((props, i) => (
              <Container data-aos="fade-up" key={props._id}>
                <Item>
                  <LeftSection>
                    <ImgCon>
                      <Img src={`https://ik.imagekit.io/will12${props.img}`} />
                    </ImgCon>
                    <Title>
                      <Info>{props.title}</Info>
                      <Location>
                        <LocateSpan>
                          {/* <Span>
                            <Public />
                          </Span> */}
                          {/* {props.location?.map((prop, i) => (
                            <MyLoc key={i}>{prop}</MyLoc>
                          ))} */}
                          {props.location?.slice(0,4).map((prop, i) => (
                            <MyLoc key={i}><TagLoc>{prop.slice(0,7)}</TagLoc></MyLoc>
                          ))}
                        </LocateSpan>
                        <LocateSpan>
                          <Span>
                            <WorkOutlined
                              style={{ fontSize: "", marginRight: "5px" }}
                            />
                          </Span>
                          <>
                            {props.salary?.map((props, i) => (
                              <Salary key={i}>{props}</Salary>
                            ))}
                          </>
                          {/* <Salary style={{}}>{props.salary}</Salary> */}

                          { }
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
                    <Bottom>Date:{format(props.createdAt)}</Bottom>
                  </RightSection>
                </Item>
                <TagsCon>
                  {props.tag?.map((prop, i) => (
                    <Tag key={i}>{prop}</Tag>
                  ))}
                </TagsCon>
              </Container>
            ))}
          </>
          :
          <>
            {jobs?.map((props) => (
              <Container data-aos="fade-up" key={props._id}>
                <Item>
                  <LeftSection>
                    <ImgCon>
                      <Img src={`https://ik.imagekit.io/will12${props.img}`} />
                    </ImgCon>
                    <Title>
                      <Info>{props.title}</Info>
                      <Location>
                        <LocateSpan>
                          {/* <Span>
                            <MapOutlined />
                          </Span> */}
                          {/* {props.location} */}

                          {props.location?.slice(0,4).map((prop, i) => (
                            <MyLoc key={i}><TagLoc>{prop.slice(0,7)}</TagLoc></MyLoc>
                          ))}
                        </LocateSpan>
                        <LocateSpan>
                          <Span>
                            <WorkOutline
                              style={{ fontSize: "", marginRight: "5px" }}
                            />
                          </Span>
                          <>
                            {props.salary?.map((props, i) => (
                              <Salary key={i}>{props}</Salary>
                            ))}
                          </>
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
                        <Apply onClick={() => dispatch(postsaved(props))}>
                          Apply now
                        </Apply>
                      </Link>
                    </Top>
                    <Bottom>Posted: {format(props.createdAt)}</Bottom>
                  </RightSection>
                </Item>
                <TagsCon>
                  {props.tag?.map((prop, i) => (
                    <Tag key={i}>{prop}</Tag>
                  ))}
                </TagsCon>
              </Container>
            ))}
          </>
      }
    </div>
  );
}

export default Jobitems;
