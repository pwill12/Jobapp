import { Jobitems } from "../Data";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Mobile } from "../Mobile";
import axios from "axios";
import {
  Favorite,
  FavoriteBorder,
  FavoriteBorderOutlined,
  FavoriteBorderSharp,
  LocationOnOutlined,
  SavedSearch,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { addsaved } from "../redux/SavedJobs";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  height: 100%;
  padding: 20px;
  overflow: hidden;
  background-color: rgb(251, 251, 255);
  ${
    "" /* ${Mobile({
      height: '100%',
  })} */
  }
`;

const JobCon = styled.div`
  padding: 100px 200px;
  display: flex;
  justify-content: space-between;
  ${"" /* align-items: center; */}
  margin-bottom: 15px;
  ${Mobile({
    padding: "0px 30px",
    justifyContent: "center",
  })}
`;

const Section = styled.div`
  display: flex;
  margin-top: 0px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px 200px;
  width: 100%;
  ${Mobile({
    padding: "0px",
  })}
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  ${"" /* -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75); */}
  background-color: white;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.3);
  min-width: 100%;
  height: 150px;
  margin-bottom: 30px;
  border-radius: 10px;
  &&:hover {
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease;
  }
  ${Mobile({
    flexDirection: "column",
    padding: "20px",
    height: "250px",
    alignItems: "start",
    justifyContent: "space-around",
  })}
`;

const Right = styled.div`
  ${Mobile({
    marginRight: "0px",
  })}
`;
const Left = styled.div`
  display: flex;
  ${"" /* flex: 1; */}
  margin-right: 10px;
  justify-content: space-around;
  align-items: center;
  ${Mobile({
    marginRight: "0px",
  })}
`;

const Joblisting = styled.h1`
  font-size: 50px;
  ${Mobile({
    display: "none",
  })}
`;

const BrowseMore = styled.button`
  padding: 10px;
  width: 200px;
  height: 55px;
  border-radius: 10px;
  border: 1px solid lightgreen;
  background-color: transparent;
  &&:hover {
    color: white;
    background-color: lightgreen;
    transition: all 0.3s ease;
  }
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
  ${Mobile({
    marginRight: "0px",
    minWidth: "95px",
  })}
`;
const Img = styled.img`
  max-width: 95px;
  max-height: 95px;
  ${Mobile({
    maxHeight: "70px",
    maxWidth: "90px",
    minWidth: "75px",
  })}
`;

const Title = styled.div`
  ${Mobile({
    marginLeft: "20px",
  })}
`;
const Info = styled.h1`
  font-size: 20px;
  font-weight: 600;
  ${Mobile({
    fontSize: "17px",
  })}
`;
const Location = styled.h3`
  font-size: 20px;
  ${Mobile({
    display: "flex",
    flexDirection: "",
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
  ${
    "" /* ${Mobile({
    display: 'none',
  })} */
  }
`;
const Bottom = styled.h3`
  color: lightgrey;
  font-size: 16px;
  margin-top: 10px;
  text-align: right;
  ${"" /* font-family: cursive; */}
  ${Mobile({
    marginRight: "",
    textAlign: "start",
  })}
`;

const Span = styled.span`
  font-size: 17px;
`;

const Tag = styled.span`
  background-color: hsl(205, 100%, 96%);
  padding: 6px;
  font-size: 11px;
  font-weight: 560;
  border-radius: 10px;
  margin-right: 10px;
  color: black;
  ${Mobile({
    display: "none",
  })}
`;

const TagsCon = styled.div`
  margin-top: 5px;
`;

function JobSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [jobs, setjobs] = useState([]);
  const [click, hanClick] = useState(false);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const Jobsapicall = async () => {
      try {
        const res = await axios.get(
          "https://willdevjobs.herokuapp.com/api/findjobs"
        );
        // console.log(res)
        setjobs(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    Jobsapicall();
  }, []);

  const dispatch = useDispatch();

  let findfavorite = jobs.filter((recipe) => favorite.includes(recipe._id));
  // console.log(findfavorite);

  // const fff = jobs.map((id) => id._id);

  // console.log(fff)

  // const addToFavorite = (id) => {
  //   if (!favorite.includes(id)) setFavorite(favorite.concat(id));

  //   // click ? hanClick(false) : hanClick(true);
  //   dispatch(addsaved(findfavorite));
  //   // console.log(id);
  //   if (fff.includes(id)) {
  //     console.log("yes");
  //     hanClick(true);
  //   }
  // };

  const [favorites, setFavorites] = useState([]);

  // const addfav = (props) => {
  //   let array = favorites;
  //   let addarray = true;

  //   array.map((item, key) => {
  //     if (item === props.i) {
  //       array.splice(key, 1);
  //       addarray = false;
  //     }
  //   });
  //   if (addarray) {
  //     array.push(props.i);
  //   }
  //   setFavorites([...array]);
  //   dispatch(addsaved(favorites))
  //   localStorage.setItem('favorites',JSON.stringify(favorites))
  //   var storage = localStorage.getItem('favItem' + (props.i) || '0')
  //   if (storage == null) {
  //     localStorage.setItem(('favItem' + (props.i)),JSON.stringify(props.props))
  //   }else{
  //     localStorage.removeItem('favItem' + (props.i))
  //   }
  // };

  // const getarray = JSON.parse(localStorage.getItem('favorites') || '0')

  // useEffect(()=>{
  //   if (getarray !== 0) {
  //     setFavorites([...getarray])
  //   }
  // }, [])
  // console.log(jobs);

  return (
    <Container>
      <JobCon>
        <Joblisting>Featured Jobs</Joblisting>
        <Link to={"/Filter"}>
          <BrowseMore>Browse More Job</BrowseMore>
        </Link>
      </JobCon>
      <Section>
        <>
          {jobs.map((props, i) => (
            <Item key={i} data-aos="fade-up">
              <Left>
                <ImgCon>
                  <Img src={props.img} />
                </ImgCon>
                <Title>
                  <Info>{props.title}</Info>
                  <Location>
                    <Span>
                      <LocationOnOutlined style={{ marginRight: "7px" }} />
                      {props.location}
                    </Span>
                    <TagsCon>
                      {props.tag?.map((prop) => (
                        <Tag>{prop}</Tag>
                      ))}
                    </TagsCon>
                  </Location>
                </Title>
              </Left>

              <Right>
                <Top>
                  <Save>
                    <Favorite
                    // onClick={() => addfav({ props, i })}
                    />
                    {/* {favorites.includes(i) ? (
                      <Favorite
                        // onClick={() => addfav({ props, i })}
                        onClick={() => myfav({ props, i })}
                        style={{ color: "red" }}
                      />
                    ) : (
                      <FavoriteBorderOutlined
                        // onClick={() => addfav({ props, i })}
                        onClick={() => myfav({ props, i })}
                      />
                    )} */}
                  </Save>
                  <Link to={"/jobinfo/" + props._id}>
                    <Apply>Apply now</Apply>
                  </Link>
                </Top>
                <Bottom>Date line:{props.createdAt}</Bottom>
              </Right>
            </Item>
          ))}
        </>
      </Section>
    </Container>
  );
}

export default JobSection;
