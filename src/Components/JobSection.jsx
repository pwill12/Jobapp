
import { Jobitems } from "../Data";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Mobile } from "../Mobile";
import { FavoriteBorder, FavoriteBorderOutlined, LocationOnOutlined, SavedSearch } from "@mui/icons-material";



const Container = styled.div`
  height: 100%;
  padding: 20px;
  overflow: hidden;
  background-color: rgb(251, 251, 255);
  ${'' /* ${Mobile({
      height: '100%',
  })} */}

`;

const JobCon = styled.div`
  padding: 100px 200px;
  display: flex;
  justify-content: space-between;
  ${'' /* align-items: center; */}
  margin-bottom: 15px;
  ${Mobile({
    padding: '0px 30px',justifyContent: 'center'
  })}

`

const Section = styled.div`
  display: flex;
  margin-top: 0px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px 200px;
  width: 100%;
  ${Mobile({
    padding: '0px',
  })}


`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  ${'' /* -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75); */}
  background-color: white;
  min-width: 100%;
  height: 150px;
  margin-bottom: 30px;
  border-radius: 10px;
  &&:hover{
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease;

  }
  ${Mobile({
    flexDirection: 'column', padding: '20px',height: '250px',alignItems: 'start',justifyContent: 'space-around'
  })}


`;

const Right = styled.div`
  ${Mobile({
    marginRight: '0px',
  })}
`
const Left = styled.div`
  display: flex;
  ${'' /* flex: 1; */}
  margin-right: 10px;
  justify-content: space-around;
  align-items: center;
  ${Mobile({
    marginRight: '0px',
  })}


`


const Joblisting = styled.h1`
  font-size: 50px;
  ${Mobile({
      display: 'none',
  })}



`


const BrowseMore = styled.button`
  padding: 10px;
  width: 200px;
  height: 55px;
  border-radius:10px;
  border: 1px solid lightgreen;
  background-color: transparent;
  &&:hover{
      color: white;
      background-color: lightgreen;
      transition: all 0.3s ease;
  }

`

const ImgCon = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:10px;
  width: 95px;
  height: 90px;
  background-color: rgb(240, 240, 240);
  object-fit: cover;
  ${Mobile({
      marginRight: '0px',
  })}




`;
const Img = styled.img`
  max-width: 95px;
  max-height: 95px;
  ${Mobile({
      width: '70px',
  })}


`;


const Title = styled.div`
  ${Mobile({
      marginLeft: '20px',
  })}
`;
const Info = styled.h1`

  font-size: 20px;
  font-weight: 600;
  ${Mobile({
    fontSize: '17px',
  })}

`;
const Location = styled.h3`

  font-size: 20px;
  ${Mobile({
      display: 'flex',flexDirection: ''
  })}

`

const Top = styled.div`
  display: flex;
`
const Save = styled.div`
  background-color: hsl(205, 100%, 96%);
  color: lightgreen;
  width: 50px;
  display: flex;
  border-radius:10px;
  align-items: center;
  justify-content: center;
  &&:hover{
      color: white;
      background-color: lightgreen;
      transition: all 0.3s ease;
  }


`
const Apply = styled.button`

  margin-left: 20px;
  width: 130px;
  height: 40px;
  border-radius:10px;
  border: none;
  background-color: lightgreen;
  &&:hover{
      color: green;
      background-color: transparent;
      transition: all 0.3s ease;
      border: 1px solid lightgreen;
  }
  ${'' /* ${Mobile({
    display: 'none',
  })} */}

`
const Bottom = styled.h3`
  color: lightgrey;
  font-size: 16px;
  margin-top: 10px;
  text-align: right;
  ${'' /* font-family: cursive; */}
  ${Mobile({
    marginRight: '50px',
  })}

  

`

const Span = styled.span`
  margin-right: 10px;
`

const Tag = styled.span`
  background-color: hsl(205, 100%, 96%);
  padding: 5px;
  font-size: 13px;
  font-weight: 560;
  border-radius: 10px;
  margin-left: 20px;
  color: black;
  ${Mobile({
    display: 'none',
  })}
`



function JobSection() {
  return (
    <Container>
    <JobCon>
        <Joblisting>Job Listing</Joblisting>
        <BrowseMore>Browse More Job</BrowseMore>
    </JobCon>
        <Section>
        {Jobitems.map((props) => (
          <Item key={props.id}>
          <Left>
            <ImgCon>
              <Img src={props.img}/>
            </ImgCon>
            <Title>
                <Info>{props.title}</Info>
                <Location>
                <Span><LocationOnOutlined/></Span>{props.Location}
                <Tag>{props.tag}</Tag>
                </Location>
            </Title>
            </Left>

            <Right>
              <Top>
                <Save>
                    <FavoriteBorderOutlined/>
                </Save>
                <Apply>Apply now</Apply>
              </Top>
              <Bottom>
                Date line:{props.date}
              </Bottom>
            </Right>
          </Item>
        ))}

        </Section>
    </Container>
  )
}

export default JobSection