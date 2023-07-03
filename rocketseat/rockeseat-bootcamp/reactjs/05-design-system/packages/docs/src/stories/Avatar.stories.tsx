import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ofelipescherer-ignite/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/ofelipescherer.png',
    alt: 'Felipe Scherer'
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}
