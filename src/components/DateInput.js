import React from "react";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = props => (
  <div>
    <button className="genric-btn primary circle" onClick={props.handleClick}>
      {" "}
      Random photo
    </button>
  </div>
);
export default DateInput;
