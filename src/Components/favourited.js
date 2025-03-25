
import { FavoriteBorder, FavoriteBorderOutlined, FavoriteBorderTwoTone, FavoriteOutlined } from "@mui/icons-material";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { GlobalContext } from "../redux/Globalstate";

const MyBtn = styled.button`
  border: none;
  text-decoration: none;
  background: transparent;
  ${'' /* color: red; */}

`

export const Favourited = ({ jobs }) => {
  const { addfav, favorite } = useContext(GlobalContext);
  // console.log(favorite)
  let storedFav = favorite.find((o) => o._id === jobs._id);
  // console.log(storedFav)

  const favdisabled = storedFav ? true : false;
  return <MyBtn disabled={favdisabled} onClick={() => addfav(jobs)} ><FavoriteOutlined style={favdisabled?{color: 'lightskyblue',}: {color: 'lightgray'}}/></MyBtn>
  ;
};
