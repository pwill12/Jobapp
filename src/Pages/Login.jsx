import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apicalls";

import { Mobile } from "../Mobile";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(240, 241, 245);
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  justify-content: center;
  ${
    "" /* ${Mobile({ background: '-webkit-linear-gradient(-45deg, #83c3e3 50%, #ec94ec 50%)' })} */
  }
`;

const CenterLogo = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  ${'' /* position: absolute; */}
`;

const Wrapper = styled.div`
  width: 25%;
  border-radius: 10px;
  ${'' /* height: 70vh; */}
  padding: 20px;
  background-color: white;
  ${Mobile({ width: "75%", borderRadius: "5px" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  //   disabled={isFetching}

  return (
    <Container>
      <CenterLogo>WillJobs</CenterLogo>
      <Wrapper>
        {/* <CenterLogo>
          WillJobs
      </CenterLogo> */}
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick}>LOGIN</Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}
