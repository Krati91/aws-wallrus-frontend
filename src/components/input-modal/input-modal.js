import React, { useEffect, useState } from "react";
import {
  TextField,
  ThemeProvider,
  createMuiTheme,
  Button,
} from "@material-ui/core";
import validator from "validator";
import { useHistory } from "react-router";
import "./input-modal.scss";
import Input from "../input/input";

const InputModal = (props) => {
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState({ email: true });
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#000000",
      },
    },
  });

  useEffect(() => {
    resetInputs();
  }, []);

  const history = useHistory();

  const validation = () => {
    const isEmail = validator.isEmail(email);
    setValidate({ email: isEmail });
    return isEmail;
  };

  const onSubmitHandler = () => {
    const enable = validation();
    if (enable) {
      // Api call goes here
      try {
        // Redirecting to forgot password page
        history.push(`/forgot-password/${email}`);
      } catch (err) {
        alert("Something went wrong");
      }
    }
  };

  const resetInputs = () => {
    setEmail("");
    setValidate({ email: true });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="input-modal--backdrop" onClick={props.hideModal} />
      <div className="input-modal">
        <p>Forgot your password? Enter the your email below</p>
        <Input
          placeholder="Email"
          error={!validate.email}
          helperText={!validate.email ? "Provide a valid email" : null}
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 15 }}
          onClick={onSubmitHandler}
        >
          Submit
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default InputModal;
