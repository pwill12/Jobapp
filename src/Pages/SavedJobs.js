import {
  Delete,
  DeleteForeverOutlined,
  Favorite,
  FavoriteBorderOutlined,
  LocationOnOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {RemoveFave } from "../Components/removefav";
import { Mobile } from "../Mobile";
import { GlobalContext } from "../redux/Globalstate";

const JobCon = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ${"" /* overflow: hidden; */}
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

const RightSection = styled.div``;

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

const Section = styled.div`
  padding: 50px 200px;
  display: flex;
  ${Mobile({
    flexDirection: "column",
    padding: "20px",
  })}
`;

const Left = styled.div`
  display: flex;
  flex: 0.7;
  ${"" /* width: 50%; */}
  background-color: white;
  width: 1vw;
  height: 50vh;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  ${Mobile({
    width: "100%",
    flex: 0.7,
    padding: "20px",
    justifyContent: "center",
    position: "relative",
  })}
`;

const LeftCon = styled.div`
  padding: 35px;
  text-align: left;
  width: 10vw;
  ${Mobile({
    width: "",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
`;

const Item = styled.div`
  display: flex;
  ${"" /* flex: 1; */}
  justify-content: space-between;
  padding: 30px;
  align-items: center;
  ${"" /* -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75); */}
  background-color: white;
  width: 70vw;
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
    width: "100%",
    alignItems: "start",
    justifyContent: "space-around",
  })}
`;

const Img = styled.img`
  max-width: 60px;
  max-height: 55px;
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
  ${Mobile({ minWidth: "90px", height: "90px", marginRight: "15px" })}
`;

const Title = styled.div`
  ${Mobile({ marginTop: "10px" })}
`;

const Info = styled.h1`
  font-size: 19px;
  font-weight: 600;
`;
const Location = styled.h3`
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

function SavedJobs() {
  

  const getarray = JSON.parse(localStorage.getItem("favorites") || "0");

  // var Favoritelist = [{}];
  // //   console.log(getarray)
  // for (let i = 0; i < getarray.length; i++) {
  //   let x = getarray[i];
  //   // console.log(x)
  //   Favoritelist[i] = JSON.parse(localStorage.getItem("favItem" + [x]) || 0);
    
  // }

  
  

  const remfav = (props) => {
    // var storage = localStorage.getItem('favItem')
  // var storage1 = localStorage.getItem('favItem' + (props.i))   
    localStorage.removeItem('favItem' + (props.i))
   
  };
  // var storage = localStorage.getItem('favorites')

  // let ffff = []

  let storage1 = []
  for (let i = 0; i < getarray.length; i++) {
    let x = getarray[i];
    // console.log(x)
    storage1[i] = JSON.parse(localStorage.getItem("favItem" + [x]) || 0);
    // let ggg = Favoritelist.splice(1,1)
    console.log(storage1)

    if (storage1 === false) {
      console.log('ok')
      localStorage.removeItem('favorites')
      }
    console.log(storage1)
    


      const index = storage1.indexOf(0);
    if (index > -1) {
      storage1.splice(index);
      console.log('yes') // 2nd parameter means remove one item only
    }
      
  }

  // if () {
  //   console.log('ok')
  //   localStorage.removeItem('favorites')
  //   }
  // console.log(storage1)

  // useEffect(()=>{
  //   if (storage1 === null) {
  //     setFavorites([...getarray])
  //   }
  // }, [])
  // if (storage1 === undefined) {
  //   Favoritelist == undefined
  // }
// console.log(Favoritelist)

const { favorite } = useContext(GlobalContext);


  return (
    <JobCon>
    {/* <div> */}
      {favorite.length == 0?<h5>No saved item</h5>:
      favorite.map((props, i) => (
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
                          {props.location}
                          {/* <Tag>{props.tag}</Tag> */}
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
                        {/* <DeleteForeverOutlined onClick={() => remfav({ props, i })}/>
                         */}
                         <RemoveFave type='delfav' jobs={props}/>
                      </Save>
                      <Link to={'/jobinfo/'+props._id}>
                      <Apply>Apply now</Apply>
                      </Link>
                    </Top>
                    <Bottom>Date line:{props.createdAt}</Bottom>
                  </RightSection>
                </Item>
          ))}
      
      
      {/* } */}
    {/* </div> */}
    </JobCon>
  );
}

export default SavedJobs;
