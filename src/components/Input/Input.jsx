import { useState } from "react";

const Input = ({ label, inputChange, ...props }) => {
  return (
    <span>
      <label>{label}</label>
      <input type="number" onChange={inputChange} {...props} required />
    </span>
  );
};

export default Input;
