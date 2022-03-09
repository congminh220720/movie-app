import React from "react";

import "./input.scss";

function Input(props) {
  return (
    <>
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange ? (e) => props.onChange(e) : null}
      />
    </>
  );
}

export default Input;
