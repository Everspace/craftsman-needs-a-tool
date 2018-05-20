import React from "react"
import { css } from "emotion"
import { cssClass } from "styles/Colors"
import classnames from "lib/Style/classnames"

//
// A shameless copy of bootstrap's progress thing.
//

let containerCSS = css`
  display: flex;
  overflow: hidden;
  height: 1rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
`

let barCSS = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  transition: width .6s ease;
`

let corners = css`
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
`

let Bar = props => {
  let classes = [barCSS, props.className]
  if (props.rounded) {
    classes.push(corners)
  }

  return <div
    {...props}
    className={classnames(...classes)}
    style={{width: props.percent + "%", ...props.style}}
  >
    {props.text}
  </div>
}

export default props => {
  let max = props.max || 100
  let elements = []

  elements = props.bars.map((element, index) => {
    if ( index === props.bars.length - 1 ) {
      element.rounded = true
    }

    return <Bar
      {...element}
      percent={element.value / max * 100}
      key={index}
    />
  })

  return <div
    {...props}
    className={classnames(containerCSS, cssClass.grey500, props.className)}
  >
    {elements}
  </div>
}
