import React from "react";

const Event = ({ name, venue, color, rowSpan }) => {
  return (
    <td rowSpan={rowSpan} className={"Event " + color}>
      <h5>{name}</h5>
      <h6>{venue}</h6>
    </td>
  );
};

export default Event;
