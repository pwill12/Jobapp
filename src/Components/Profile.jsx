import { Link } from "react-router-dom";

import {
  Add as Add,
  CheckBox,
  CheckBoxOutlineBlank,
  CheckRounded,
  Close,
  Delete,
  EmailOutlined,
  EmailRounded,
  FacebookRounded,
  GitHub,
  HdrPlus,
  Instagram,
  LinkedIn,
  LinkOutlined,
  MarkChatRead,
  PhoneAndroidOutlined,
  PhoneAndroidRounded,
  Twitter,
} from "@mui/icons-material";
import { Divider } from "@mui/material";
import React, { useContext } from "react";
import {
  updateSuccess,
  updateStart,
  updateFailure,
} from "../redux/updateContact";
import { useSelector } from "react-redux";
import { Form, ProgressBar } from "react-bootstrap";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { Mobile } from "../Mobile";
import { Mymodals, MymodalsSocials } from "./Modals";
import styled from "styled-components";
import { GlobalContext } from "../redux/Globalstate";
// import { Link } from "react-router-dom";

const Container = styled.div`
  ${'' /* background-color: rgb(251, 251, 255); */}
  background-color: #f2f2f2;
  ${'' /* background-color: white; */}
  padding: 40px 90px;
  ${Mobile({ padding: "20px" })}
`;
const Section = styled.div`
  display: flex;
  justify-content: center;
  ${Mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  ${Mobile({ flex: 0.7, order: 1 })}
`;
const About = styled.div`
  display: flex;
  flex: 1;
  width: 23%;
  justify-content: space-between;
  color: lightgreen;
  cursor: pointer;
  ${Mobile({ width: '100%' })}
`;
const Me = styled.h5``;
const Edit = styled.h5``;
const Right = styled.div`
  flex: 1;
  padding: 10px;
  background-color: white;
  border: 1px solid lightgrey;
  height: 70vh;
  border-radius: 10px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  box-shadow: 14px 14px 20px #cbced1,-14px -14px 20px white;
  ${Mobile({ position: 'relative' ,marginTop: '30px'})}

`;
const Card = styled.div`
  background-color: white;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid lightgrey;
  ${Mobile({ marginTop: "30px" })}

  ${'' /* box-shadow: 14px 14px 20px #cbced1,-14px -14px 20px white; */}


`;
const ImgCon = styled.div``;
const Img = styled.img``;
const Name = styled.h3``;
const Headline = styled.div``;
const Location = styled.div``;

const Center = styled.div`
  flex: 2;
  margin: 0px 30px;
  ${Mobile({ margin: "0px" })}
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 15vh;
  background-color: white;
  ${"" /* margin-top: 30px; */}
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;
const Icon = styled.span`
  margin: 0px 10px 0px 15px;
  border-radius: 10px;
`;
const Email = styled.div`
  margin-bottom: 10px;
`;
const Number = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Divide = styled.div`
  height: 1px;
  width: 100%;
  background-color: lightgrey;
`;

const Website = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 48vh;
  padding: 12px;
  background-color: white;
  margin-top: 30px;
  border: 1px solid lightgrey;
  border-radius: 10px;

`;
const Dash = styled.div`
  padding: 12px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 10px;
  ${'' /* ${Mobile({ padding: '1px' })} */}

`;
const Dashboard = styled.h5`
  font-weight: 600;
  ${Mobile({ marginBottom: '10px' })}

`;
const Board = styled.div`
  display: flex;
  align-items: flex-end;
  ${Mobile({ fontSize: "15px", flexDirection: "column", alignItems: "start" })}
  ${"" /* text-align: right; */}
  ${"" /* justify-content: flex-end; */}
`;

const LineDivide = styled.div`
  width: 2px;
  height: 80px;
  background-color: lightgrey;
  ${Mobile({ display: "none" })}
`;
const Saved = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 10px;
`;
const Save = styled.h5`
  font-weight: 600;
`;
const SaveJ = styled.p``;

const Applied = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  flex: 1;
  ${Mobile({ margin: '10px 0px 0px' })}
`;
const Viewed = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  flex: 1;
  ${Mobile({ margin: "10px 0px 0px", alignItems: "" })}
`;

const Status = styled.div`
  display: flex;
  height: 12vh;
  margin-top: 20px;
  justify-content: space-between;
  background-color: white;
  ${"" /* margin: 0px 15px; */}
  background-color: lightgrey;
  border-radius: 10px;
  padding: 12px;

`;
const LetEmployers = styled.div``;
const Let = styled.h4`
  font-size: 17px;
  font-weight: 600;
`;
const Para = styled.p`
  font-size: 13px;
`;

const ActiveBtn = styled.div``;

const Summary = styled.div`
  border: 1px solid lightgrey;
  padding: 12px;
  border-radius: 10px;
  background-color: white;
  ${'' /* box-shadow: 14px 14px 20px #cbced1,-14px -14px 20px white; */}

  ${"" /* height: 100%; */}
`;
const Executive = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
const ExecSum = styled.h5`
  margin-left: 12px;
  font-size: 17px;
`;
const EditSum = styled.h5`
  font-size: 17px;
  cursor: pointer;
  &&:hover {
    color: red;
  }
`;
const AddedSkills = styled.li`
  font-size: 15px;
`;

const Education = styled.div`
  display: flex;
  padding: 12px;
  background-color: white;
  margin-top: 30px;
  border-radius: 10px;
  border: 1px solid lightgrey;
`;
const Resume = styled.div``;
const Skills = styled.div`
  display: flex;
  padding: 12px;
  background-color: white;
  margin-top: 30px;
  border-radius: 10px;
  border: 1px solid lightgrey;
`;
const Certificate = styled.div``;
const Achievement = styled.div``;
const MoreInfo = styled.div``;
const MyExper = styled.h5`
  margin-left: 12px;
  margin-top: 40px;
`;
const Experience = styled.div`
  padding: 12px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgrey;
`;
const Add2 = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Addbtn = styled.div``;
const Work = styled.h4``;
const Companydetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const Lefts = styled.div``;
const Rights = styled.div``;
const Company = styled.h5`
  font-weight: bold;
`;
const Companys = styled.h5``;
const EditComp = styled.h5``;
const Show = styled.h5``;
const List = styled.div`
  margin-top: 15px;
`;
const Listitem = styled.li``;

const Assistance = styled.div`
  display: flex;
  align-items: center;
  ${"" /* margin-top: 50px; */}

`;
const Aimg = styled.div`
  max-width: 70px;
`;
const Aiimg = styled.img`
  min-width: 70px;
`;
const Recruiter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${"" /* align-items: flex-start; */}
  ${"" /* margin-top: 10px; */}
  margin: auto;
`;

const AIbot = styled.h5`
  margin-top: 15px;
`;
const Air = styled.p`
  font-size: 15px;
`;

const Your = styled.p`
  padding: 12px;
`;

const Addedu = styled.h5`
  margin-left: 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const MyChecks = styled.div`
  margin-top: 15px;
`;

const Check = styled.div`
  display: flex;
  color: lightgreen;
`;
const Checkpro = styled.h5`
  margin-left: 13px;
  color: black;
  font-size: 17px;
  text-decoration: line-through;
`;

const MobiD = styled.div`
  height: 1px;
  width: 100%;
  background-color: lightgrey;
  display: none;
  ${Mobile({ display: "block" })}
`;

function Myprofile() {
  // const now = 60;
  let user = useSelector((state) => state.user.currentUser);

  let updated = useSelector((state) => state.contact.contacts);
  //   const index = Favoritelist.indexOf(0);
  // if (index > -1) {
  //   Favoritelist.splice(index, 1);
  //   // console.log(index) // 2nd parameter means remove one item only
  // }

  const { favorite } = useContext(GlobalContext);
  let count = favorite.length;

  const resumedata = user.skills;

  let signupper = 20;
  let websiteper = updated.website;
  let emailper = updated.email;
  // console.log(emailper);
  let githubper = updated.github;
  let numper = 20;

  if (emailper === undefined) {
    emailper = 0;
  } else {
    emailper = 20;
  }

  if (websiteper === undefined) {
    websiteper = 0;
  } else {
    websiteper = 20;
  }

  if (githubper === undefined) {
    githubper = 0;
  } else {
    githubper = 20;
  }

  let total = signupper + websiteper + emailper + numper + githubper;

  const now = total;

  // console.log(resumedata);
  return (
    <Container>
      {/* <ReactNotification/> */}
      <About>
        <Me>About me</Me>
        <Edit>Edit</Edit>
      </About>
      <Section>
        <Left>
          <Card>
            <ImgCon>
              <Img src={updated.img} />
            </ImgCon>
            <Name>{updated.lastname}</Name>
            <Headline>Headline+</Headline>
            <Location>Lagos,Nigeria</Location>
          </Card>
          <Executive>
            <ExecSum>Contact Info</ExecSum>
            <EditSum>
              <Mymodals />
              <Toaster
                position="top-center"
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
                      primary: "green",
                      secondary: "white",
                    },
                  },
                }}
              />
            </EditSum>
          </Executive>
          <Contact>
            <Email>
              <Icon>
                <EmailRounded />
              </Icon>
              {updated.email}
            </Email>
            <Divide></Divide>
            <Number>
              <Icon>
                <PhoneAndroidRounded />
              </Icon>
              {updated.number ? updated.number : "add number"}
            </Number>
          </Contact>
          <Website>
            <Email>
              <Icon>
                <LinkOutlined />
              </Icon>
              {updated.website ? updated.website : "add a wweebsite"}
            </Email>
            <Divide></Divide>
            <Number>
              <Icon>
                <PhoneAndroidRounded />
              </Icon>
              08081573422
            </Number>
            <Divide></Divide>
            <Number>
              <Icon>
                <Twitter />
              </Icon>
              Add Twitter
            </Number>
            <Divide></Divide>
            <Number>
              <Icon>
                <GitHub />
              </Icon>
              Add github
            </Number>
            <Divide></Divide>
            <Number>
              <Icon>
                <FacebookRounded />
              </Icon>
              Add facebook
            </Number>
            <Divide></Divide>
            <Number>
              <Icon>
                <Instagram />
              </Icon>
              Add Instagram
            </Number>
            <Divide></Divide>
            <Number>
              <Icon>
                <LinkedIn />
              </Icon>
              {updated.linked}
            </Number>
          </Website>
          <div>
            <MymodalsSocials />
          </div>
        </Left>
        <Center>
          <Dash>
            <Dashboard>Dashboard</Dashboard>
            <Board>
              <Saved>
                <Link to={"/saved"} style={{ textDecoration: "none" }}>
                  <Save>{count}</Save>
                  {/* </Link> */}
                  <SaveJ>Saved Jobs</SaveJ>
                </Link>
              </Saved>
              <MobiD></MobiD>
              <LineDivide></LineDivide>
              <Applied>
                <Save>0</Save>
                <SaveJ>Applied Jobs</SaveJ>
              </Applied>
              <LineDivide></LineDivide>
              <MobiD></MobiD>
              <Viewed>
                <Save>0</Save>
                <SaveJ>Companies that Viewed</SaveJ>
              </Viewed>
            </Board>
          </Dash>
          <Status>
            <LetEmployers>
              <Let>Let Employers Find You</Let>
              <Para>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam et autem illo facilis officia eius!
              </Para>
            </LetEmployers>
            <ActiveBtn>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  // label="Check this switch"
                />
              </Form>
            </ActiveBtn>
          </Status>
          <Executive>
            <ExecSum>Executive Summary</ExecSum>
            <EditSum>Edit</EditSum>
          </Executive>
          <Summary>
            <>
              {resumedata.map((data) => (
                <AddedSkills key={data._id}>{data}</AddedSkills>
              ))}
            </>
          </Summary>
          <MyExper>Experience</MyExper>
          <Experience>
            <Add2>
              <Addbtn>
                <Add />
              </Addbtn>
              <Work>Work Experience</Work>
            </Add2>
            <Divide></Divide>
            <Companydetails>
              <Lefts>
                <Company>Work</Company>
                <Companys>Rccg Ict</Companys>
              </Lefts>
              <Rights>
                <EditComp>edit</EditComp>
                <Show>April 2021 current</Show>
              </Rights>
            </Companydetails>
            <List>
              <Listitem>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Listitem>
              <Listitem>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Listitem>
              <Listitem>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Listitem>
              <Listitem>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Listitem>
            </List>
          </Experience>
          <Education>
            <Add
              style={{
                backgroundColor: "white",
                border: "dotted",
                color: "green",
                width: "50px",
                height: "50px",
              }}
            />
            <Addedu>Add education</Addedu>
          </Education>
          <Resume></Resume>
          <Skills>
            <Add
              style={{
                backgroundColor: "lightgrey",
                border: "dotted",
                color: "blue",
                width: "50px",
                height: "50px",
              }}
            />
            <Addedu>Add Skills</Addedu>
          </Skills>
          <Certificate></Certificate>
          <Achievement></Achievement>
          <MoreInfo></MoreInfo>
        </Center>
        <Right>
          <Assistance>
            <Aimg>
              <Aiimg src="https://preview.colorlib.com/theme/jobboard2/img/svg_icon/2.svg" />
            </Aimg>
            <Recruiter>
              <AIbot>Aibot</AIbot>
              <Air>Lorem ipsum dolor sit amet consec </Air>
            </Recruiter>
          </Assistance>
          <Your>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quo
            provident voluptatum nihil, unde mollitia?
          </Your>
          <ProgressBar now={now} label={`${now}%`} variant="success" />
          <MyChecks>
            <Check>
              <CheckBox />
              <Checkpro>Completed Signup</Checkpro>
            </Check>
            <Check>
              {user.number ? <CheckBox /> : <CheckBoxOutlineBlank />}
              {user.number ? (
                <Checkpro>Added number</Checkpro>
              ) : (
                <Checkpro style={{ textDecoration: "none" }}>
                  Add a number
                </Checkpro>
              )}
            </Check>
            <Check>
              <CheckBox />
              <Checkpro>added email</Checkpro>
            </Check>
            {/* <Check>
              <CheckBoxOutlineBlank />
              <Checkpro style={{ textDecoration: "none" }}>Add Cv</Checkpro>
            </Check> */}
            <Check>
              {updated.website ? <CheckBox /> : <CheckBoxOutlineBlank />}
              {updated.website ? (
                <Checkpro>Added website</Checkpro>
              ) : (
                <Checkpro style={{ textDecoration: "none" }}>
                  Add a website
                </Checkpro>
              )}
            </Check>
            <Check>
              {user.github ? <CheckBox /> : <CheckBoxOutlineBlank />}
              {user.github ? (
                <Checkpro>Added github</Checkpro>
              ) : (
                <Checkpro style={{ textDecoration: "none" }}>
                  Add github profile
                </Checkpro>
              )}
            </Check>
          </MyChecks>
        </Right>
      </Section>
    </Container>
  );
}

export default Myprofile;
