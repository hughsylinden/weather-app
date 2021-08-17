import "../styles/WindDetails.css";
import React from "react";
import PropTypes from "prop-types";
import arrow from "../styles/img/arrow.svg";

const WindDetails = ({ speed, direction }) => {
  const map1 = new Map();
  [
    "n",
    "nne",
    "ne",
    "ene",
    "e",
    "ese",
    "se",
    "sse",
    "s",
    "ssw",
    "sw",
    "wsw",
    "w",
    "wnw",
    "nw",
    "nnw",
  ].forEach((a, i) => {
    map1.set(a, i * 22.5);
  });
  const rotationStyle = `rotate(${map1.get(direction)}deg)`;
  const speedString = `${speed}ms`;
  return (
    <div className="wind-details">
      {speedString}
      <img
        className="wind-details__img"
        data-testid="wind-details-image"
        alt="img"
        src={arrow}
        style={{ transform: rotationStyle }}
      />
    </div>
  );
};
WindDetails.propTypes = {
  speed: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
};

export default WindDetails;
