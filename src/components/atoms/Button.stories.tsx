import React, { useState } from "react"
import { Story, Meta } from "@storybook/react"
import Button, { ButtonProps } from "./Button"

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {},
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  colour: "primary",
  children: "Primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  colour: "secondary",
  children: "Secondary",
}

export const Disabled = Template.bind({})
Disabled.args = {
  colour: "disabled",
  children: "I don't work",
}

export const Inactive = Template.bind({})
Inactive.args = {
  colour: "inactive",
  children: "Untoggled",
}
