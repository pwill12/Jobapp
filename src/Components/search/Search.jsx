import React, { useState } from "react";
import styled from "styled-components";
import MultipleSelectChip from "../FilterItems";
import { Mobile } from "../../Mobile";
import { MultipleSelected } from "../FilterItems";
import { Button, TextField } from "@mui/material";
import {
  InputOutlined,
  SearchOffOutlined,
  SearchRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Searched from "./Searchtext";

const Container = styled.div`
  // margin-top: 30px;
  // height: 30vh;
  display: flex;
  justify-content: center;
  ${Mobile({ height: "5vh",marginBottom: '10px' })}
  background-color: rgb(251, 251, 255);
`;
const Section = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  margin-top: 30px;
  ${Mobile({ flexDirection: "column" })}
`;
const Input = styled.input`
  padding: 10px;
  font-size: 20px;
  margin-right: 25px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  ${Mobile({
    marginRight: "10px",
    width: 200,
  })}
`;
const Select = styled.select`
  padding: 16px;
  color: black;
  margin-right: 25px;
  width: 150px;
  ${Mobile({
    marginRight: "0px",
    width: 300,
    marginTop: "15px",
  })}
`;
const Option = styled.option`
  margin-top: 30px;
  margin-right: 10px;
  padding: 20px;
  ${
    "" /* ${Mobile({
    marginRight: '0px'
  })} */
  }
`;

const Multple = styled.div`
  margin: 0px 25px;
  ${Mobile({
    margin: "20px 0px",
    // marginTop: "15px",
  })}
`;

// const Button = styled.button`
//   padding: 10px;
//   border: none;
//   margin-top: 15px;
//   width: 200px;
//   display: flex;
//   text-align:center;
//   padding: 10px;
//   align-items: center;

// `

function Search() {

  const [change, setchange] = useState("");
  const handleChange = (e) => {
    setchange(e.target.value)
  };

  return (
    <Container>
      <Section>
        <Input placeholder='search'/>
        <Button
          variant="contained"
          color="success"
          size="small"
          startIcon={<SearchRounded />}
        >
          <Link
            to={"/browsemorejobs/" + change}
            style={{ textDecoration: "none",color: 'white' }}
          >
            Find Jobs
          </Link>
        </Button>
      </Section>
    </Container>
  );
}

export default Search;
