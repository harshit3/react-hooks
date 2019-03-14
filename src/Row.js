import React from "react";

function Row(props) {
  return (
    <div>
      <label>{props.label}</label>
      <br />
      {props.children}
      <hr />
    </div>
  );
}

export default Row;