import React from "react";
import { useLocation } from "react-router-dom";

function AssignmentDetailes() {
  const { state } = useLocation();
  console.log("state :>> ", state);

  if (!state || !state.assignment) {
    return <div>No Assignment details available.</div>;
  }

  const { title } = state.assignment;
  console.log("state :>> ", state);

  return (
    <div>
      <div>{title}</div>
    </div>
  );
}

export default AssignmentDetailes;
