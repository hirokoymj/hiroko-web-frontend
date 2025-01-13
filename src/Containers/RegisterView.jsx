import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputText } from "Components/Forms/FormInputText";

import { useAuth } from "contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import { registerFormSchema } from "./validation/formValidations";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
  },
  error: {
    color: "red",
  },
}));

export const RegisterView = () => {
  const classes = useStyles();
  const { userLoggedIn } = useAuth();
  const [error, setError] = useState("");
  const methods = useForm({
    resolver: yupResolver(registerFormSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (values) => {
    const { email, password, confirmPassword } = values;
    console.log("onSubmit");
    // await doCreateUserWithEmailAndPassword(email, password).catch((error) => {
    //   setError(error.code);
    // });
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <Container maxWidth="xs" component={Paper} className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>{" "}
        <Box component="p" className={classes.error}>
          {error}
        </Box>
        <FormProvider {...methods}>
          <FormInputText
            label="Email"
            name="email"
            style={{ marginBottom: "16px" }}
          />
          <FormInputText
            label="Password"
            name="password"
            type="password"
            style={{ marginBottom: "16px" }}
          />
          <FormInputText
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            style={{ marginBottom: "16px" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginBottom: "8px" }}
            onClick={handleSubmit(onSubmit)}>
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </Button>
        </FormProvider>
      </Container>
    </>
  );
};
