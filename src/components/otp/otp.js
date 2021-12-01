import { Button, CircularProgress, TextField } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import validator from "validator";
import { useSelector } from "react-redux";
import { selectEmailNumber } from "../../redux/Slices/userSignUpSlice/userSignUpSlice";
import Input from "../input/input";
import Logo from "../../images/logo.svg";
import ChevronLeft from "../../images/chevron-left.svg";
import "./otp.scss";

const Otp = (props) => {
  const [counter, setCounter] = useState(60);
  const [otp, setOtp] = useState(0);
  const [code, setCode] = useState(0);
  const [isOtpValid, setOtpValid] = useState(true);
  const [loader, setLoader] = useState(true);
  const emailNumber = useSelector(selectEmailNumber);

  useEffect(() => {
    const init = async () => {
      try {
        const otp = await sendOtp();
        setCode(otp);
        setLoader(false);
      } catch (err) {
        setLoader(false);

        alert(`Couldn't send OTP to ${emailNumber}. Try again`);
      }
    };
    init();
  }, []);

  useEffect(() => {
    startCounter();
  });

  const sendOtp = async () => {
    const choice = isEmail() ? "email" : "sms";
    const emailOrNumber = !isEmail() ? `+91${emailNumber}` : emailNumber;
    let formData = new FormData();
    formData.append("choice", choice);
    formData.append("value", emailOrNumber);

    const response = await fetch("/api/verify-email-phone/", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data;
  };

  const isEmail = () => {
    if (validator.isEmail(emailNumber)) {
      return true;
    } else return false;
  };

  const resetCounter = () => {
    setCounter(60);
    startCounter();
  };

  const resendOtp = async () => {
    resetCounter();
    const otp = await sendOtp();
    setCode(otp);
  };

  const verifyOtp = () => {
    console.log(otp, code);
    if (otp === code) {
      alert("OTP verified successfully");
      setOtpValid(true);
      props.renderSignUp();
    } else {
      setOtpValid(false);
    }
  };

  const startCounter = () => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  };

  const message = props.isEmail ? (
    <p>A 5-digit verification code is sent on {props.email}</p>
  ) : (
    <p>An OTP is sent on {props.phone} via message.</p>
  );

  return (
    <div>
      {loader ? (
        <div style={{ textAlign: "center", margin: "40vh auto" }}>
          <CircularProgress size={80} style={{ color: "#000" }} />
        </div>
      ) : (
        <>
          <img className="main-logo" src={Logo} alt="logo" />
          <div className="otp-wrapper">
            <Button
              variant="filled"
              className="width-auto btn-grey margin-y-40"
              onClick={props.prev}
            >
              <img src={ChevronLeft} alt="logo" />
            </Button>
            <div className="otp-content">
              <h2>Verify your {props.type}</h2>
              {message}
              <Input
                type="number"
                placeholder="OTP"
                className="margin-y-20 width-100"
                onChange={(event) => setOtp(event.target.value)}
                error={!isOtpValid}
                helperText={!isOtpValid ? "Please provide a valid OTP" : null}
              />
              <Button
                variant="contained"
                className="width-100 btn-filled margin-y-20"
                onClick={verifyOtp}
              >
                Verify
              </Button>
              {counter === 0 ? (
                <p>
                  Didn't received OTP?{" "}
                  <span className="bold pointer" onClick={resendOtp}>
                    Resend OTP
                  </span>
                </p>
              ) : (
                <p>00:{counter}</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Otp;
