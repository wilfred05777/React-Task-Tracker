import React from "react";
import PropTypes from "prop-types";

export const Button = ({ color, text }) => {
  const onClick = (e) => {
    console.log("Click");
  };

  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
    </div>
  );
};
Button.defualtProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};
export default Button;
