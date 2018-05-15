import React from "react"
import { waiting } from "styles/Shadows";
import { css } from "emotion";

let corners = css`
  border-radius: 0.25rem;
`

export default props => <div
  {...props}
  className={`${waiting} ${corners} ${props.className || ""}`}
/>
