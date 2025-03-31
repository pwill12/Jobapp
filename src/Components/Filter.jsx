// import { Select } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import MultipleSelectChip, {
  MultipleSelectChip2,
  MultipleSelected,
} from "./FilterItems";
import { Mobile } from "../Mobile";
import axios from "axios";
import { Link } from "react-router-dom";
import { Favourited } from "./favourited";
// import * as React from 'react';
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import Select from '@mui/material/Select';
import Chip from "@mui/material/Chip";
import Jobitems from "./Jobitems";
import { Select } from "@mui/material";
import Searched from "./search/Searchtext";

const Container = styled.div`
  padding: 15px;
  ${"" /* background-color: rgb(251, 251, 255); */}
  ${"" /* background-color: #f2f2f2; */}
  background-color: rgb(251, 251, 255);
  height: 100%;
  ${Mobile({
  overFlow: "hidden",
  padding: "0px",
  marginTop: '40px'
})}
`;

const Section = styled.div`
  padding: 50px 150px;
  display: flex;
  ${Mobile({
  flexDirection: "column",
  padding: "20px",
  overFlow: "hidden",
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
  padding: "10px",
  justifyContent: "center",
  position: "relative",
  overFlow: "hidden",
})}
`;

const LeftCon = styled.div`
  padding: 35px;
  text-align: left;
  // width: 10vw;
  ${Mobile({
  width: "",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px 0px",
  overFlow: "hidden",
})}
`;

const Header = styled.h2`
  margin-bottom: 15px;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
`;

const Selectbtn = styled.div`
  margin-top: 15px;
  display: none;
  ${Mobile({
  display: "block",
})}
`;

const Right = styled.div`
  display: flex;
  flex: 2;
  ${"" /* align-items: center; */}
  margin-left: 20px;
  ${Mobile({
  margin: "0px",
  flex: 1,
  overFlow: "hidden",
})}
`;

const Search = styled.input`
  padding: 10px;
  width: 200px;
  ${Mobile({
  display: "none",
})}
`;

const RightCon = styled.div`
  ${"" /* width: 60vw; */}
  ${"" /* background-color: white; */}
  ${"" /* width: 100%; */}
  ${Mobile({
  margin: "0px",
  width: "100vw",
  overFlow: "hidden",
})}
`;

const JobList = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
  border-radius: 5px;
  min-width: 50vw;
  ${Mobile({
  flexDirection: "column",
  padding: "20px",
  alignItems: "start",
  marginTop: "20px",
})}
`;

const Job = styled.h2`
  font-size: 20px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  margin: 0px 20px 20px 0px;
`;

const SelectDetail = styled.div``;

const JobCon = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ${"" /* overflow: hidden; */}
`;

const Selectbtn1 = styled.div`
  margin-top: 15px;
  ${"" /* display: none; */}
  ${Mobile({
  display: "block",
})}
`;

const Selects = styled.select`
  padding: 10px;
  margin-right: 100px;
  border: 1px solid lightgrey;
  ${Mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
  padding: 50px;
`;
const mywidth = styled.option`
  min-width: 200;
`;

function Filter({ tags }) {
  const [myfilter, setmyFilters] = useState("");
  const [age, setAge] = useState("");
  const [salary, setsalary] = useState("");

  function BasicSelect() {
    // const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
      const value = event.target.value;
      setmyFilters({
        // ...age,
        [event.target.name]: value,
      });
    };
    return (
      <Box sx={{ width: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"> Country </InputLabel>{" "}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            name="location"
            label="Country"
            onChange={handleChange}
          >
            <MenuItem value="Nigeria"> Nigeria </MenuItem>{" "}
            <MenuItem value="Usa"> Usa </MenuItem>{" "}
            <MenuItem value="Remote Worldwide"> Remote Worldwide </MenuItem>{" "}
          </Select>{" "}
        </FormControl>{" "}
      </Box>
    );
  }

  function BasicSelect2() {
    // const [age, setAge] = React.useState('');

    const handleChange2 = (event) => {
      setsalary(event.target.value);
      const value = event.target.value;
      setmyFilters({
        // ...age,
        [event.target.name]: value,
      });
    };
    // console.log(salary);

    return (
      <Box sx={{ width: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"> Salary </InputLabel>{" "}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={salary}
            name="salary"
            label="Country"
            onChange={handleChange2}
          >
            <MenuItem value="$5000-$15000"> $5000 - $15000 </MenuItem>{" "}
            <MenuItem value="$15000-$25000"> $15000 - $25000 </MenuItem>{" "}
            <MenuItem value="$25000-$50000"> $25000 - $50000 </MenuItem>{" "}
          </Select>{" "}
        </FormControl>{" "}
      </Box>
    );
  }

  return (
    <Container>
      <Section>
        <Left>
          <LeftCon>
            <Header> Filter Jobs</Header> <Search placeholder="Search" />
            <Selectbtn1>
              <BasicSelect />
            </Selectbtn1>
            <Selectbtn1>
              <BasicSelect2 />
            </Selectbtn1>{" "}
            {/* <Selectbtn>
              <BasicSelect />
            </Selectbtn> */}
          </LeftCon>{" "}
        </Left>{" "}
        <Right>
          <RightCon>
            <JobList>
              <Job> JobList </Job>{" "}
              <SelectDetail>
                <MultipleSelectChip />
              </SelectDetail>{" "}
            </JobList>{" "}
            <JobCon>
              <Jobitems tags={tags} filters={myfilter} />{" "}
            </JobCon>{" "}
          </RightCon>{" "}
        </Right>{" "}
      </Section>{" "}
    </Container>
  );
}

export default Filter;
