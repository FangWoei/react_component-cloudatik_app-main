import React from "react";
import "../styles/icon.css";
import PropTypes from "prop-types";
import sprite from "../stories/assets/all_icons.svg";

export const Icon = ({
  color,
  width,
  height,
  label,
  LabelColor,
  LabelSize,
  ...props
}) => {
  // console.log(props.sprite);
  return (
    <>
      <div className="icon-container">
        <svg
          viewBox="0 0 100 50"
          width={`${width}`}
          height={`${height}`}
          style={{ fill: color }}
          {...props}>
          <use xlinkHref={`${sprite}#${props.sprite}`}></use>
        </svg>
      </div>
      <h1 style={{ color: LabelColor, fontSize: `${LabelSize}px` }}>{label}</h1>
    </>
  );
};

Icon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  sprite: PropTypes.oneOf([
    "home_vpd",
    "home_water",
    "cloud_temp",
    "cloud_water",
    "cloud_vpd",
    "icon-sun",
    "total_radiation",
    "water_ec",
    "water_ph",
    "water_temp",
    "pump_state",
  ]),
  label: PropTypes.string,
  LabelColor: PropTypes.string,
  LabelSize: PropTypes.string,
};

Icon.defaultProps = {
  color: null,
  width: 50,
  height: 50,
  sprite: "#home_vpd",
  label: "Hello World",
  labelColor: "black",
  labelSize: "16px",
};
