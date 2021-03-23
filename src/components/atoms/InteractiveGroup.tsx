/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro"
import { EmotionJSX } from "@emotion/core"
import React from "react"

const seperatedStyle = tw`
  all-child:(
    not-first:not-last:(
      border-l border-r
      border-dotted
      border-black
    )
  )
`

export interface InteractiveGroupProps extends EmotionJSX.Element {
  seperated?: boolean
  children: JSX.Element[] | JSX.Element
}

/**
 * When you set a border, set the background the same colour
 * @returns
 */
const InteractiveGroup = ({
  seperated = false,
  children,
  ...props
}: InteractiveGroupProps) => {
  return (
    <div
      tw="
    bg-transparent
    inline-flex
    p-0 m-1
    rounded
    shadow
    all-child:(
      hover:(shadow-lg)
      active:(shadow-none)
      not-last:(rounded-r-none)
      not-first:(rounded-l-none)
      not-first:not-last:(m-0 shadow-none)
      first:(rounded-l shadow-none)
      last:(rounded-r shadow-none)
    )!
  "
      {...props}
      css={[seperated && seperatedStyle]}
    >
      {children}
    </div>
  )
}

export default InteractiveGroup
