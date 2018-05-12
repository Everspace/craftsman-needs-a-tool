import React from "react";

export default props => (
  <div
    {...props}
    className={`text-center ${props.className || ""}`}
  />
)
