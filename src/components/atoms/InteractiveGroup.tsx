/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro"
import React from "react"

const seperatedStyle = tw`
  all-child:(
    not-first:not-last:(
      border-l! border-r!
      border-dotted
      border-black
    )
  )
`

export interface InteractiveGroupProps {
  seperated?: boolean
  children: JSX.Element[] | JSX.Element
}

const InteractiveGroup: React.FC<InteractiveGroupProps> = ({
  seperated = false,
  children,
}) => {
  return (
    <div
      tw="
    bg-transparent
    inline-flex
    p-0 m-1
    rounded

    all-child:(
      box-shadow[none]
      not-first:not-last:(m-0)
      not-last:(rounded-r-none)
      not-first:(rounded-l-none)
      first:(rounded-l)
      last:(rounded-r)
    )!
  "
      css={[seperated && seperatedStyle]}
    >
      {children}
    </div>
  )
}

export default InteractiveGroup
