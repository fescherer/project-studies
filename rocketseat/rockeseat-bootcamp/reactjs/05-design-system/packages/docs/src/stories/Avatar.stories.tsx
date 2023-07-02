import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ofelipescherer-ignite/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/ofelipescherer.png',
    alt: 'Diego Fernandes'
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}
