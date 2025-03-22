import {
  ArrowBack,
  Facebook,
  FavoriteBorderOutlined,
  Google,
  Instagram,
  LocationOnOutlined,
  Twitter,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../apirequests";
import { Mobile } from "../Mobile";
import { format } from "timeago.js";
import styled from "styled-components";
import { apply } from "../redux/applyapicalls";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Alert, AlertTitle } from "@mui/material";

const Container = styled.div`
  padding: 20px;
  background-color: rgb(249, 249, 253);
  scroll-behavior: smooth;
  // margin-top: 70px
`;

const Section = styled.div`
  padding: 20px 200px;
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
  order: 2,
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
  border-radius: 7px;
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
  font-size: 15px;
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
  margin: "10px 0px",
})}
`;

const Goback = styled.div`
  display: "flex";
  align-items: "flex-start"
    ${Mobile({
  marginBottom: "3px",
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

const Alertbar = styled.div`
  padding: 0px 200px 14px;
  margin-top: 70px;
  ${Mobile({
  padding: "0px",
  marginTop: "40px",
})}
`
function BrowseMoreJobs({ ids }) {
  const [myjobs, setjobs] = useState({});
  const [errloading, seterrloading] = useState(false);


  useEffect(() => {
    const getjobsinfo = async () => {
      try {
        const res = await publicRequest.get("/findjobs/" + ids);
        setjobs(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getjobsinfo();
  }, [ids]);

  const user1 = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user1 && JSON.parse(user1).currentUser;
  let user = currentUser?._id;

  // console.log(employerId)

  const [applied, setapplied] = useState([]);

  const response = myjobs.responsibilities;

  // const my = useSelector((state) => state.apply.jobs);

  const [email, setemail] = useState("");
  // const [click, myhandleClick] = useState(false);
  const [username, setname] = useState("");
  const [cover, setcover] = useState("");
  const [projectlinks, setproject] = useState("");
  const dispatch = useDispatch();

  let jobs = ids;

  const employerId2 = useSelector((state) => state.post.jobs);

  let employerId = employerId2.employerId;

  const handleClick = (e) => {
    apply(dispatch, {
      user,
      jobitems: {
        employerId: employerId,
        email: email,
        jobs: jobs,
        projectlinks: projectlinks,
        cover: cover,
        username: username,
      },
    });
  };

  const handleClick2 = (e) => {
    mypost(dispatch, {
      jobId: jobs,
      employerId: employerId,
      jobdetails: myjobs.title,
      jobitems: {
        user: user,
        email: email,
        username: username,
        projectlinks: projectlinks,
        cover: cover,
      },
    });
  };

  const mypost = async (dispatch, post) => {
    // dispatch(postStart());
    try {
      const res = await publicRequest.post("/candapply", post);
      // dispatch(postSuccess(res.data));
      // dispatch(updateSuccess(res.data));
      console.log(res.data);
    } catch (err) {
      // dispatch(postFailure());
      console.log(err);
    }
  };

  useEffect(() => {
    // if (click) {
    const userapplied = async () => {
      try {
        const res = await publicRequest.get("/findapplied/" + user);
        if (null) {
          // console.log("null yes");
          setapplied("");
        } else if (res.data !== null) {
          setapplied(res.data.jobitems);
        }
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

  // console.log(myjobs)

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        fullscreen
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Application sent
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Successfully Applied</h4> */}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            deserunt veniam asperiores ea saepe pariatur!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/">
            <Button onClick={props.onHide}>Go back</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }

  const notify = () => toast.success("Successfully applied");

  const [modalShow, setModalShow] = React.useState(false);
  const mydisabled = storedJobs;
  return (
    <Container>
      {storedJobs ? (
        // <h5 style={{ textAlign: "center" }}>Already applied</h5>
        <Alertbar>
          <Alert severity="success">
            <AlertTitle>Already Applied</AlertTitle>
            Application Submitted Successfully —{" "}
            <strong>wait for recruiters reply!</strong>
          </Alert>
        </Alertbar>
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
                    <LocationOnOutlined /> {myjobs.location?.map((prop) => (
                      <span style={{ color: "lightslategray" }}>{prop},</span>
                    ))}
                  </Location>
                  {/* <Location>
                    <PunchClock /> california
                  </Location> */}
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
              <SubmitBtn
                disabled={mydisabled}
                style={
                  mydisabled ? { background: "lightblue" } : { color: "none" }
                }
                onClick={() => {
                  // e.preventDefault();
                  handleClick();
                  handleClick2();
                  notify();
                  setModalShow(true);
                }}
              >
                Submit
              </SubmitBtn>
              {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
              </Button> */}

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <Toaster
                position="bottom-left"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                  // Define default options
                  className: "",
                  duration: 3000,
                  style: {
                    background: "white",
                    padding: "20px",
                    color: "lightgreen",
                  },
                  // Default options for specific types
                  success: {
                    duration: 3000,
                    theme: {
                      primary: "lightgreen",
                      secondary: "white",
                    },
                  },
                }}
              />
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
                  published :<Bold>{format(myjobs.createdAt)}</Bold>
                </JobDetails>
                <JobDetails>
                  Job Vacancy:<Bold>{myjobs.vacancy} position</Bold>
                </JobDetails>
                <JobDetails>
                  Salary:<Bold>{myjobs.salary}</Bold>
                </JobDetails>
                {/* <JobDetails>
                  Location
                  <Bold style={{ display: "flex" }}>
                    {myjobs.location?.map((prop) => (
                      <span style={{ color: "red" }}>{prop},</span>
                    ))}
                  </Bold>
                </JobDetails> */}
                <JobDetails>
                  Job Nature:<Bold>{myjobs.time}</Bold>
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
