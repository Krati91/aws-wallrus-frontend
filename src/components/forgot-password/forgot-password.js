import React, { useState } from "react";
import "./forgot-password.scss";

import { Button, CircularProgress } from "@material-ui/core";
import Input from "../input/input";
import { useParams, useLocation, useHistory } from "react-router";
import Logo from "../../images/logo.svg";
import axios from "axios";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [validator, setValidator] = useState({
    newPassword: true,
    confirmNewPassword: true,
  });
  const { email } = useParams();
  const query = useQuery();
  const history = useHistory();

  const validation = () => {
    const isNewPassword = newPassword.length >= 7;
    const isConfirmNewPassword = confirmNewPassword === newPassword;

    setValidator({
      newPassword: isNewPassword,
      confirmNewPassword: isConfirmNewPassword,
    });

    return isNewPassword && isConfirmNewPassword;
  };

  const onSubmitHandler = async () => {
    const shouldSubmit = validation();
    if (shouldSubmit) {
      setLoader(true);
      try {
        const formData = new FormData();
        formData.append("uidb64", query.get("uidb64"));
        formData.append("token", query.get("token"));
        formData.append("password", newPassword);
        await axios.patch("/api/password-reset-complete", formData);

        setLoader(false);
        alert("Your password was changed successfully");
        history.replace("/login");
      } catch (err) {
        setLoader(false);
        alert("Couldn't change your password. Please try again");
      }
    }
  };

  return (
    <div className="forgot-password-container">
      <img src={Logo} alt="logo" />
      <p className="forgot-password-title">Set New Password for {email}</p>
      <div className="forgot-password-form" fullWidth>
        <Input
          type="password"
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
          type="password"
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
