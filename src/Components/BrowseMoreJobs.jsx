import {
  ArrowBack,
  Facebook,
  FavoriteBorderOutlined,
  Google,
  Instagram,
  LocationOnOutlined,
  PunchClock,
  Twitter,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { publicRequest, userRequest } from "../apirequests";
import { Mobile } from "../Mobile";

import styled from "styled-components";
import { apply } from "../redux/applyapicalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  padding: 20px;
  background-color: rgb(249, 249, 253);
  scroll-behavior: smooth;
`;

const Section = styled.div`
  padding: 30px 200px;
  display: flex;
  justify-content: center;
  ${Mobile({
    flexDirection: "column",
    padding: "0px",
  })}
`;

const Left = styled.div`
  display: flex;
  flex: 2;
  ${Mobile({
    order: 1,
  })}
`;

const Jobsection = styled.div`
  width: 96%;
  ${Mobile({
    width: "100%",
  })}
`;

const Leftsection = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 30px;
  border-radius: 7px;
  ${Mobile({
    flexDirection: "column",
  })}
`;

const ImgContain = styled.div`
  // background-color: lightgrey;
  height: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Mobile({
    maxWidth: "60px",
    maxHeight: "55px",
  })}
`;

const ImgCon = styled.img`
  ${Mobile({
    maxWidth: "60px",
    maxHeight: "55px",
  })}
`;

const Title = styled.div`
  margin-left: 20px;
  ${Mobile({})}
`;

const Header = styled.h2`
  font-size: 23px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  ${Mobile({
    fontSize: "19px",
  })}
`;

const Location = styled.div`
  ${Mobile({
    marginBottom: "5px",
  })}
`;

const RightSection = styled.div`
  background-color: hsl(205, 100%, 96%);
  color: lightgreen;
  width: 39px;
  height: 39px;
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  &&:hover {
    color: white;
    background-color: lightgreen;
    transition: all 0.3s ease;
  }
  ${Mobile({
    marginTop: "5px",
  })}
`;

const LeftSectionTitle = styled.div`
  display: flex;
  align-items: center;
  ${Mobile({
    alignItems: "start",
  })}
`;

const Right = styled.div`
  ${"" /* background-color: white; */}
  display: flex;
  flex: 1;
  width: 100%;
  ${Mobile({
    order: 1,
    marginBottom: "10px",
  })}
`;
const RightCon = styled.div`
  width: 100%;
`;
const JobSummary = styled.div`
  ${"" /* margin-bottom: 5px; */}
  background-color: white;
  padding: 30px;
  ${"" /* height: 100%; */}
  ${Mobile({
    marginTop: "20px",
  })}
`;
const JobDetailsCon = styled.div`
  margin-top: 4px;
  background-color: white;
  ${"" /* padding: 30px; */}
`;
const JobDetails = styled.li`
  ${"" /* background-color: white; */}
  margin-top: 10px;
  color: grey;
  font-size: 18px;
`;

const ShareAt = styled.div`
  margin-top: 10px;
  background-color: white;
  height: 50px;
  display: flex;
  align-items: center;
`;

const MoreInfo = styled.div`
  padding: 30px;
  background-color: white;
  margin-top: 5px;
  ${"" /* border-radius: 7px; */}
`;
const JobDescription = styled.div`
  margin-bottom: 30px;
`;

const Desc = styled.h4`
  font-weight: 600;
  letter-spacing: 2px;
  margin: 10px 0px 25px 0px;
`;

const Content = styled.p`
  color: grey;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  margin-top: 5px;
  word-spacing: 2px;
`;

const List = styled.li`
  color: grey;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  margin-top: 5px;
`;

const Responsibilities = styled.div`
  margin-top: 30px;
`;

const Summary = styled.h5`
  font-size: 25;
  font-weight: 600;
`;

const JobDetailsSec = styled.div`
  padding: 30px;
`;

const Bold = styled.span`
  font-weight: 500;
  margin-left: 10px;
  color: black;
`;

const Apply = styled.div`
  padding: 30px;
  background-color: white;
  margin-top: 5px;
  ${Mobile({})}
`;

const Applynow = styled.h2`
  margin: 30px 0px;
`;

const Input1 = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Name = styled.input`
  padding: 10px;
  width: 50%;
  margin-right: 30px;
  border: "1px solid lightgrey";
`;

const Email = styled.input`
  width: 50%;
  ${"" /* margin-left: 10px; */}
  padding: 10px;
  border: "1px solid lightgrey";
`;

const Website = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: "1px solid lightgrey";
`;

const Cv = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Resume = styled.span`
  font-size: 18px;
  margin-right: 10px;
`;

const Upload = styled.input`
  border: "1px solid lightgrey";
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 50vh;
  ${"" /* margin-top: 30px; */}
  padding: 10px;
  margin-bottom: 20px;
`;

const IconsSocial = styled.div`
  padding: 30px;
  display: flex;
`;
const Social = styled.a`
  margin-right: 10px;
  color: lightgrey;
`;
const SubmitBtn = styled.button`
  width: 100%;
  color: white;
  background-color: green;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  padding: 10px;
`;

const Back = styled.div`
  padding: 0px 200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${Mobile({
    flexDirection: "row",
    padding: "0px",
    width: "100%",
    justifyContent: "center",
    marginBottom: "10px",
  })}
`;

const Goback = styled.div`
  display: "flex";
  align-items: "flex-start"
    ${Mobile({
      marginBottom: "10px",
    })};
`;

const Arrow = styled.a`
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;
function BrowseMoreJobs({ ids }) {
  const [myjobs, setjobs] = useState({});

  useEffect(() => {
    const getjobsinfo = async () => {
      try {
        const res = await publicRequest.get("/findjobs/" + ids);
        setjobs(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getjobsinfo();
  }, [ids]);

  const user1 = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user1 && JSON.parse(user1).currentUser;
  let user = currentUser._id;

  const [applied, setapplied] = useState([]);

  // const storedjobs = applied.jobitems;

  // const { error } = useSelector((state) => state.apply);

  const response = myjobs.responsibilities;

  // const my = useSelector((state) => state.apply.jobs);

  const [email, setemail] = useState("");
  // const [click, myhandleClick] = useState(false);
  const [username, setname] = useState("");
  const [cover, setcover] = useState("");
  const [projectlinks, setproject] = useState("");
  const dispatch = useDispatch();

  let jobs = ids;

  const handleClick = (e) => {
    e.preventDefault();
    // myhandleClick(true);
    apply(dispatch, {
      user,
      jobitems: {
        email: email,
        jobs: jobs,
        projectlinks: projectlinks,
        cover: cover,
        username: username,
      },
    });
  };

  useEffect(() => {
    // if (click) {
    const userapplied = async () => {
      try {
        const res = await userRequest.get("/findapplied/" + user);
        if (null) {
          console.log("null yes");
          setapplied("");
        } else if (res.data !== null) {
          setapplied(res.data.jobitems);
        }
        // setapplied(res.data.jobitems);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
      // };
      // userapplied()
    };
    userapplied();
  }, []);
  let storedJobs = applied.find((o) => o.jobs === ids);
  let qualify = myjobs.qualifications;

  return (
    <Container>
      {storedJobs ? (
        <h5 style={{ textAlign: "center" }}>Already applied</h5>
      ) : (
        false
      )}
      <Back>
        <Arrow href="/">
          <ArrowBack />
        </Arrow>
        <Goback>Go back</Goback>
      </Back>
      <Section>
        <Left>
          <Jobsection>
            <Leftsection>
              <LeftSectionTitle>
                <ImgContain>
                  <ImgCon src={myjobs.img} />
                </ImgContain>
                <Title>
                  <Header>{myjobs.title}</Header>
                  <Location>
                    <LocationOnOutlined /> remote(worldwide)
                  </Location>
                  <Location>
                    <PunchClock /> california
                  </Location>
                </Title>
              </LeftSectionTitle>
              <RightSection>
                <FavoriteBorderOutlined />
              </RightSection>
            </Leftsection>

            <MoreInfo>
              <JobDescription>
                <Desc>Job description</Desc>
                <Content>{myjobs.content}</Content>
              </JobDescription>
              <Responsibilities>
                <Desc>Responsiblities</Desc>
                {response?.map((props) => (
                  <List>{props}</List>
                ))}
              </Responsibilities>
              <Responsibilities>
                <Desc>Qualifications</Desc>
                {qualify?.map((props) => (
                  <List>{props}</List>
                ))}
              </Responsibilities>
            </MoreInfo>

            <Apply>
              <Applynow>Apply now</Applynow>
              <Input1>
                <Name
                  placeholder="your name"
                  onChange={(e) => setname(e.target.value)}
                />
                <Email
                  placeholder="your email"
                  onChange={(e) => setemail(e.target.value)}
                />
              </Input1>
              <Website
                placeholder="your github profile link or other projects"
                onChange={(e) => setproject(e.target.value)}
              />
              <Cv>
                <Resume>Resume:</Resume>
                <Upload type="file" />
              </Cv>
              <Resume>Cover Letter:</Resume>
              <TextArea onChange={(e) => setcover(e.target.value)} />
              <SubmitBtn onClick={handleClick}>Submit</SubmitBtn>
            </Apply>
          </Jobsection>
        </Left>
        <Right>
          <RightCon>
            <JobSummary>
              <Summary>Job Summary</Summary>
            </JobSummary>
            <JobDetailsCon>
              <JobDetailsSec>
                <JobDetails>
                  published on:<Bold>12 Nov 2022</Bold>
                </JobDetails>
                <JobDetails>
                  Job Vacancies:<Bold>" position</Bold>
                </JobDetails>
                <JobDetails>
                  Salary:<Bold>80k to 100k</Bold>
                </JobDetails>
                <JobDetails>
                  Location:<Bold>Nigeria,Lagos</Bold>
                </JobDetails>
                <JobDetails>
                  Job Nature:<Bold>On site(fulltime)</Bold>
                </JobDetails>
              </JobDetailsSec>
            </JobDetailsCon>

            <ShareAt>
              <IconsSocial>
                <Social>
                  <Twitter />
                </Social>
                <Social>
                  <Facebook />
                </Social>

                <Social>
                  <Instagram />
                </Social>

                <Social>
                  {/* <Google/> */}
                  <a href="www.google.com">
                    <Google />
                  </a>
                </Social>
              </IconsSocial>
            </ShareAt>
          </RightCon>
        </Right>
      </Section>
    </Container>
  );
}

export default BrowseMoreJobs;
