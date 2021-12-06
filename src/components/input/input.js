import React from "react";
import TextField from "@material-ui/core/TextField";
import "./input.css";

const Input = (props) => {
  return (
    <TextField
      helperText={props.helperText}
      error={props.error}
      onChange={(event) => props.onChange(event)}
      id="outlined-basic"
      label={props.placeholder}
      variant="outlined"
      className={`width-100 primary-input ${props.className}`}
      type={props.type}
      value={props.value}
    />
  );
};

export default Input;
