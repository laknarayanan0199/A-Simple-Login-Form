import React from "react";
import classes from "./Login.module.css";

const Input = (props) => {
  const { label, type, value, changeHandler, validateHandler } = props;
  return (
    <div
      className={`${classes.control} ${
        value.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={type}>{label}</label>
      <input
        type={type}
        id={type}
        value={value.value}
        onChange={changeHandler}
        onBlur={validateHandler}
      />
    </div>
  );
};

export default Input;
