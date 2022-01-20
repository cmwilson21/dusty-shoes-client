import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../actions/sessions";
import { useHistory } from "react-router-dom";
import { Box, TextField, Button } from "@mui/material";

const Signup = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signup(state, history));
  };

  useEffect(() => {
    return () => {
      dispatch({ type: "CLEAR_ERRORS" });
    };
  }, [dispatch]);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <h3>Please Signup Below</h3>
        <TextField
          required
          label="Required"
          variant="filled"
          id="outlined-required"
          name="first_name"
          value={state.first_name}
          placeholder="First Name"
          autoFocus={true}
          helperText="First Name"
          onChange={handleChange}
        />
        <TextField
          required
          label="Required"
          variant="filled"
          name="last_name"
          id="filled-required"
          value={state.last_name}
          placeholder="Last Name"
          helperText="Last Name"
          onChange={handleChange}
        />
        <br />
        <TextField
          required
          label="Required"
          variant="filled"
          name="email"
          id="email"
          value={state.email}
          placeholder="Enter your email"
          helperText="Email"
          onChange={handleChange}
        />
        <TextField
          required
          label="Required"
          variant="filled"
          type="password"
          name="password"
          id="password"
          value={state.password}
          placeholder="Create a password"
          helperText="Password"
          onChange={handleChange}
        />
        <br />
        <Button type="submit">Signup</Button>
      </div>
    </Box>
  );
};

export default Signup;
