import React, { useState } from "react";
import "./forgot-password.scss";

import { Button, Box, CircularProgress } from "@material-ui/core";
import Input from "../input/input";
import { useParams } from "react-router";
import Logo from "../../images/logo.svg";
// import ChevronLeft from "../../images/chevron-left.svg";

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [validator, setValidator] = useState({
    newPassword: true,
    confirmNewPassword: true,
  });
  const { email } = useParams();

  const validation = () => {
    const isNewPassword = newPassword.length >= 7;
    const isConfirmNewPassword = confirmNewPassword === newPassword;

    setValidator({
      newPassword: isNewPassword,
      confirmNewPassword: isConfirmNewPassword,
    });

    return isNewPassword && isConfirmNewPassword;
  };
  const onSubmitHandler = () => {
    const shouldSubmit = validation();
    if (shouldSubmit) {
      console.log("Submitted");
    }
  };

  return (
    <div className="forgot-password-container">
      <img src={Logo} alt="logo" />
      <p>Set New Password for {email}</p>
      <div className="forgot-password-form" fullWidth>
        <Input
          value={newPassword}
          placeholder="New password"
          onChange={(e) => setNewPassword(e.target.value)}
          error={!validator.newPassword}
          helperText={
            !validator.newPassword
              ? "Password must be atleast 8 of character"
              : null
          }
        />
        <Input
          value={confirmNewPassword}
          placeholder="Confirm new password"
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          error={!validator.confirmNewPassword}
          helperText={
            !validator.confirmNewPassword ? "Passwords do not match" : null
          }
        />
        <Button
          variant="contained"
          className="btn-filled"
          onClick={onSubmitHandler}
        >
          {loader ? (
            <CircularProgress size={30} style={{ color: "#fff" }} />
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </div>
  );
};

export default ForgotPassword;
