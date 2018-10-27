import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { injectGlobal } from "emotion"
import { color } from "./styles/Colors"

injectGlobal`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    background-color: ${color.grey.grey500}
  }
`

ReactDOM.render(React.createElement(App), document.getElementById("root"))
