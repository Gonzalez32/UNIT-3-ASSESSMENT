import React from "react";
import "./CircleSelector.css";

const CircleSelector = (props) => {
  return (
    <div className="CircleSelector">
      {props.circleNo.map((cricle, idx) => (
        <button
          key={cricle}
          className={props.selectedCircleIdx === idx ? "selected" : "color"}
          onClick={() => props.handleCircleSelection(idx)}
        >
          {props.selectedCircleIdx === idx
            ? `Circle ${idx + 1} Selected`
            : `Select Circle ${idx + 1}`}
        </button>
      ))}
    </div>
  );
};

export default CircleSelector;
