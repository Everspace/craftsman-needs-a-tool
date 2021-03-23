import React from "react"
import { Story, Meta } from "@storybook/react"

import { Button, ButtonProps } from "./ButtonOld"
import { error, grey, primary, secondary } from "../../styles/Colors"

const styleMap = { error, grey, primary, secondary }
export default {
  title: "Old Components/OldButton",
  component: Button,

  argTypes: {
    colorSelect: {
      control: {
        type: "select",
        options: Object.keys(styleMap),
      },
    },
  },
} as Meta

const Template: Story<ButtonProps & { colorSelect: string }> = ({
  colorSelect,
  ...args
}) => <Button colorStyle={styleMap[colorSelect]} {...args} />

export const Primary = Template.bind({})
Primary.args = {
  colorSelect: "primary",
  children: "Hello",
}

export const Secondary = Template.bind({})
Secondary.args = {
  colorSelect: "secondary",
  children: "Hello",
}

export const Grey = Template.bind({})
Grey.args = {
  colorSelect: "grey",
  children: "Hello",
}

export const Error = Template.bind({})
Error.args = {
  colorSelect: "error",
  children: "Hello",
}
