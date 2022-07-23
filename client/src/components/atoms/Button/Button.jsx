import "./Button.css";

import React from "react";

function Button({ text, onClick, type }) {
  return (
    <button type={type} onClick={onClick} className="custom_btn">
      {text}
    </button>
  );
}

export default Button;
