import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/registerapi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  regfailures,
  regfetchings,
  regsuccessfulls,
} from "../redux/registerusers";
import MySpinner from "./Spinner";

const theme = createTheme();

export default function Register() {
  const [username, setUsername] = useState("");
  const [number, setnumber] = useState("");
  const [firstname, setfirstname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useNavigate();

  const { fetchingapi, successapi, failureapi } = useSelector(
    (state) => state.registerusers
  );

  const handleClick = (e) => {
    e.preventDefault();
    mypost(dispatch, { username, firstname, email, number, password });
  };

  const BASE_URL = "https://willdevjobs.herokuapp.com/api/";

  const postuserRequest = axios.create({
    baseURL: BASE_URL,
  });
  const mypost = async (dispatch, post) => {
    dispatch(regfetchings());
    try {
      await postuserRequest.post("register", post);
      // if (res.status === 200) {
      dispatch(regsuccessfulls());
      // history('/login')
      // }
    } catch (err) {
      dispatch(regfailures());
      console.log(err);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <i class="fas fa-laptop-code" style={{ color: "white" }}></i>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {failureapi ? <p>Email or Username Already Exists</p> : false}

          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="firstname"
                  label="Firstname"
                  name="firstname"
                  autoComplete="family-name"
                  onChange={(e) => setfirstname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  label="number"
                  name="number"
                  autoComplete="number"
                  onChange={(e) => setnumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setemail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
              onClick={handleClick}
            >
              {fetchingapi ? <MySpinner /> : "Sign up"}
            </Button>
            <Grid container justifyContent="flex-end" mb={6}>
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {successapi ? history("/login") : false}

        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
