import React, { useState } from "react"
import { Story, Meta } from "@storybook/react"
import Button, { ButtonProps } from "./Button"
import InteractiveGroup, {
  InteractiveGroupProps,
} from "components/atoms/InteractiveGroup"

export default {
  title: "Atoms/Interactive Group",
  component: InteractiveGroup,
  subcomponents: {
    Button,
  },
  argTypes: {
    children: {
      defaultValue: [
        <Button>1</Button>,
        <Button>2</Button>,
        <Button>3</Button>,
      ],
    },
  },
} as Meta

const Template: Story<InteractiveGroupProps> = args => (
  <InteractiveGroup {...args} />
)

export const Buttons = Template.bind({})
