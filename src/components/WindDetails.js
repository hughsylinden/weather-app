import "../styles/WindDetails.css";
import React from "react";
import PropTypes from "prop-types";
import arrow from "../styles/img/arrow.svg";

const WindDetails = ({ speed, direction }) => {
  let rotation = "";
  if (direction === "n") {
    rotation = 0;
  }
  if (direction === "nne") {
    rotation = 23;
  }
  if (direction === "ne") {
    rotation = 45;
  }
  if (direction === "ene") {
    rotation = 68;
  }
  if (direction === "e") {
    rotation = 90;
  }
  if (direction === "ese") {
    rotation = 113;
  }
  if (direction === "se") {
    rotation = 135;
  }
  if (direction === "sse") {
    rotation = 158;
  }
  if (direction === "s") {
    rotation = 180;
  }
  if (direction === "ssw") {
    rotation = 203;
  }
  if (direction === "sw") {
    rotation = 225;
  }
  if (direction === "wsw") {
    rotation = 248;
  }
  if (direction === "w") {
    rotation = 270;
  }
  if (direction === "wnw") {
    rotation = 293;
  }
  if (direction === "nw") {
    rotation = 315;
  }
  if (direction === "nnw") {
    rotation = 338;
  }
  const rotationStyle = `rotate(${rotation}deg)`;
  const speedString = `${speed}ms`;
  return (
    <div className="wind-details">
      {speedString}
      <img alt="img" src={arrow} style={{ transform: rotationStyle }} />
    </div>
  );
};
WindDetails.propTypes = {
  speed: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
};

export default WindDetails;
