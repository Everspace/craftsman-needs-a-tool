import { Global, css } from "@emotion/core"
import React from "react"
import { grey } from "./styles/Colors"
import ReactDOM from "react-dom"
import App from "App"

const globalStyle = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
    font-family: "Roboto", sans-serif;
    background-color: ${grey.dark.color};
  }
`

ReactDOM.render(
  [
    React.createElement(Global, { styles: globalStyle }),
    React.createElement(App),
  ],

  document.getElementById("root"),
)
