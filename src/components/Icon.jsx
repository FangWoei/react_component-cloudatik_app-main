import React from "react";
import "../styles/icon.css";
import PropTypes from "prop-types";

export const WaterIcon = ({ color, shape, width, label, ...props }) => {
  return (
    <>
      <svg
        version="1.1"
        id="water-15"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        style={color && { color }}
        viewBox="0 0 15 15"
        {...props}>
        <path d="M7.49,15C4.5288,14.827,2.1676,12.4615,2,9.5C2,6.6,6.25,1.66,7.49,0c1.24,1.66,5,6.59,5,9.49S10.17,15,7.49,15z" />
        {shape}
      </svg>
      {label}
    </>
  );
};

WaterIcon.propTypes = {
  color: PropTypes.string,
  shape: PropTypes.oneOf(["electric", "pH", "thermometer"]),
  width: PropTypes.string,
  label: PropTypes.string.isRequired,
};

WaterIcon.defaultProps = {
  color: null,
  shape: "electric",
  size: "50px",
};
