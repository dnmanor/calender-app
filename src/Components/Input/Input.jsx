import React from "react";

const Input = ({ handleChange, value }) => {
  return <input type="text" value={value} onChange={handleChange} />;
};

export default Input;
