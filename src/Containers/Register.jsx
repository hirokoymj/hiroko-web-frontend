import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useAuth } from "contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    //marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
    backgroundColor: "white",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Register = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      await doCreateUserWithEmailAndPassword(email, password);
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"/home"} replace={true} />}
      <Container maxWidth="xs" style={{ border: "2px solid red" }}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <span>{errorMessage && <span>{errorMessage}</span>}</span>
          <form className={classes.form} onSubmit={onSubmit}>
            <TextField
              name="email"
              label="Email Address"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoFocus
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <TextField
              name="password"
              label="Confirm Password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={confirmPassword}
              onChange={(e) => {
                setconfirmPassword(e.target.value);
              }}
            />

            <Button
              type="submit"
              disabled={isRegistering}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              {isRegistering ? "Signing Up..." : "Sign Up"}
            </Button>
            <div>
              Already have an account? {"   "}
              <Link to={"/login"}>Continue</Link>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};
