import { Facebook, FavoriteBorderOutlined, FavoriteOutlined, Google, Instagram, LocationOn, LocationOnOutlined, Pinterest, PunchClock, Timelapse, TimelapseOutlined, Twitter } from '@mui/icons-material'
import { TextareaAutosize } from '@mui/material'
import React from 'react'
import { Mobile } from '../Mobile'

import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
  background-color: rgb(249, 249, 253);


`

const Section = styled.div`
  padding: 50px 200px;
  display: flex;
  justify-content: center;
  ${Mobile({
    flexDirection: 'column',padding: '0px'
  })}

`

const Left = styled.div`
  display: flex;
  flex: 2;

`

const Jobsection = styled.div`
  width: 96%;
  ${Mobile({
    width: '100%',
  })}
`

const Leftsection = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 30px;
  border-radius: 7px;
  ${Mobile({
    flexDirection: 'column',
  })}


`

const ImgContain = styled.div`
  background-color: lightgrey;
  height: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

`

const ImgCon = styled.img``

const Title = styled.div`
  margin-left: 20px;
  ${Mobile({
  })}
`

const Header = styled.h2`
  font-size: 26px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  ${Mobile({
    fontSize: '20px',
  })}

`

const Location = styled.div`
 ${Mobile({
   marginBottom: '5px'
 })}
`

const RightSection = styled.div`
   background-color: hsl(205, 100%, 96%);
  color: lightgreen;
  width: 39px;
  height: 39px;
  display: flex;
  border-radius:10px;
  align-items: center;
  justify-content: center;
  &&:hover{
      color: white;
      background-color: lightgreen;
      transition: all 0.3s ease;
  }
  ${Mobile({
    marginTop: '5px',
  })}

`

const LeftSectionTitle = styled.div`
  display: flex;
  align-items: center;
  ${Mobile({
    alignItems: 'start'
  })}

`

const Right = styled.div`
  ${'' /* background-color: white; */}
  display: flex;
  flex: 1;
  width: 100%;

`
const RightCon = styled.div`
  width: 100%;
`
const JobSummary = styled.div`
  ${'' /* margin-bottom: 5px; */}
  background-color: white;
  padding: 30px;
  ${'' /* height: 100%; */}
  ${Mobile({
    marginTop: '20px',
  })}

`
const JobDetailsCon = styled.div`
  margin-top: 4px;
  background-color: white;
  ${'' /* padding: 30px; */}

`
const JobDetails = styled.li`
  ${'' /* background-color: white; */}
  margin-top: 10px;
  color: grey;
  font-size: 18px;
`

const ShareAt = styled.div`
  margin-top: 10px;
  background-color: white;
  height: 50px;
  display: flex;
  align-items: center;
`

const MoreInfo = styled.div`
  padding: 30px;
  background-color: white;
  margin-top: 5px;
  ${'' /* border-radius: 7px; */}
`
const JobDescription = styled.div`
  margin-bottom: 30px;
`

const Desc = styled.h4`
  font-weight: 600;
  letter-spacing: 2px;
  margin: 10px 0px 25px 0px;
`

const Content = styled.p`
  color: grey;
  font-size: 16px;
  font-family: 'Roboto',sans-serif;
  margin-top: 5px;
  word-spacing: 2px;
`

const List = styled.li`
  color: grey;
  font-size: 16px;
  font-family: 'Roboto',sans-serif;
  margin-top: 5px;
`

const Responsibilities = styled.div`
  margin-top: 30px;
`

const Summary = styled.h5`
  font-size: 25;
  font-weight: 600;

`

const JobDetailsSec = styled.div`
  padding: 30px;
`

const Bold = styled.span`
  font-weight: 500;
  margin-left: 10px;
  color: black;

`

const Apply = styled.div`
  padding: 30px;
  background-color: white;
  margin-top: 5px;

`

const Applynow = styled.h2`
  margin: 30px 0px;

`

const Input1 = styled.div`
  display: flex;
  margin-bottom: 20px;

`

const Name = styled.input`
  padding: 10px;
  width: 50%;
  margin-right: 30px;

`

const Email = styled.input`
  width: 50%;
  ${'' /* margin-left: 10px; */}
  padding: 10px;

`

const Website = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;

`

const Cv = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

const Resume = styled.span`
  font-size: 18px;
  margin-right: 10px;

`

const Upload = styled.input``

const TextArea = styled.textarea`
  width: 100%;
  height: 50vh;
  ${'' /* margin-top: 30px; */}
  padding: 10px;
  margin-bottom: 20px;

`

const IconsSocial = styled.div`
  padding: 30px;
  display: flex;
`
const Social = styled.a`
  margin-right: 10px;
  color: lightgrey;
`
const SubmitBtn = styled.button`
  width: 100%;
  color: white;
  background-color: green;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  padding: 10px;
`


function BrowseMoreJobs() {
  return (
    <Container>
        <Section>
            <Left>
                <Jobsection>
                    <Leftsection>
                        <LeftSectionTitle>
                        <ImgContain>
                            <ImgCon src='https://preview.colorlib.com/theme/jobboard2/img/svg_icon/4.svg'/>
                        </ImgContain>
                        <Title>
                            <Header>Software Engineer</Header>
                            <Location>
                              <LocationOnOutlined/> remote(worldwide)
                            </Location>
                            <Location>
                              <PunchClock/> california
                            </Location>
                        </Title>
                        </LeftSectionTitle>
                        <RightSection>
                        <FavoriteBorderOutlined/>
                        </RightSection>
                    </Leftsection>
                    <MoreInfo>
                        <JobDescription>
                            <Desc>Job description</Desc>
                            <Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nobis nulla debitis vitae fuga, quae corrupti autem reiciendis dolores aliquid perferendis? Accusantium non cupiditate, nam ab at quod, enim facilis iure reprehenderit sit vero alias voluptas. Ipsam animi et, perferendis accusamus suscipit, facere quam distinctio debitis nobis tenetur ea?</Content>
                        </JobDescription>
                        <Responsibilities>
                            <Desc>Responsiblities</Desc>
                            <List>listitem</List>
                            <List>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum.</List>
                            <List>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, inventore!</List>
                            <List>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere..</List>


                        </Responsibilities>
                        <Responsibilities>
                            <Desc>Qualifications</Desc>
                            <List>listitem2</List>
                            <List>BSC</List>
                            <List>50years experience</List>


                        </Responsibilities>
                    </MoreInfo>

                    <Apply>
                        <Applynow>Apply now</Applynow>
                        <Input1>
                            <Name placeholder='your name'/>
                            <Email placeholder='your email'/>
                        </Input1>
                        <Website placeholder='your github profile link or other projects'/>
                        <Cv>
                        <Resume>Resume:</Resume><Upload type='file'/>
                        </Cv>
                        <TextArea />
                        <SubmitBtn>Submit</SubmitBtn>
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
                <JobDetails>published on:<Bold>12 Nov 2022</Bold></JobDetails>
                <JobDetails>Job Vacancies:<Bold>" position</Bold></JobDetails>
                <JobDetails>Salary:<Bold>80k to 100k</Bold></JobDetails>
                <JobDetails>Location:<Bold>Nigeria,Lagos</Bold></JobDetails>
                <JobDetails>Job Nature:<Bold>On site(fulltime)</Bold></JobDetails>

                <JobDetails>listitem</JobDetails>

                </JobDetailsSec>
                
                </JobDetailsCon>

                <ShareAt>
                    <IconsSocial>
                        <Social>
                            <Twitter/>
                        </Social>
                        <Social>
                            <Facebook/>
                        </Social>
                        
                        <Social>
                            <Instagram/>
                        </Social>

                        <Social>
                            {/* <Google/> */}
                            <a href='www.google.com'><Google/></a>
                        </Social>
                    </IconsSocial>
                </ShareAt>
                </RightCon>
            </Right>
        </Section>
    </Container>
  )
}

export default BrowseMoreJobs