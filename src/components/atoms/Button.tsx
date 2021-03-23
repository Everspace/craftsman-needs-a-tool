/** @jsxImportSource @emotion/react */
import tw from "twin.macro"
import React from "react"

const baseStyle = tw`
  rounded
  py-1 px-2
  text-lg font-black
  shadow
  hover:(shadow-lg)
  active:(shadow-none)
`

const primary = tw`
  hover:bg-green-800
  active:bg-green-300
  border-green-800
  bg-green-600 text-white
`

const secondary = tw`
  hover:bg-yellow-800
  active:bg-yellow-300
  border-yellow-800
  bg-yellow-700 text-white
`

const inactive = tw`
  hover:bg-gray-800
  active:bg-gray-300
  border-gray-800
  bg-gray-600 text-white
`

const disabled = tw`
  hover:(shadow-none)
  active:(shadow-none)
  shadow-none
  bg-gray-500 text-gray-300
`

const options = {
  primary,
  secondary,
  inactive,
  disabled,
}

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  colour?: keyof typeof options
}

const Button = ({ colour = "primary", ...props }: ButtonProps) => {
  return <button css={[baseStyle, options[colour]]} {...props} />
}
export default Button
