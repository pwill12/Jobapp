import { DeleteForeverOutlined } from "@mui/icons-material";
import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../redux/Globalstate";

const MyBtn = styled.button`
  border: none;
  text-decoration: none;
  background: transparent;
  ${'' /* color: red; */}

`
export const RemoveFave = ({type,jobs}) => {
  const {
    removefav,
  } = useContext(GlobalContext);

  return (
    <div>
    {type === "delfav" && (
      <>
        <MyBtn
          onClick={() => removefav(jobs._id)}
        >
          <DeleteForeverOutlined/>
        </MyBtn>
      </>
    )}
    </div>
  )
};