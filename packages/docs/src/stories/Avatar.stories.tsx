import { Avatar, AvatarProps } from '@ignite-ui/react';

import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/wallacewolv.png',
    alt: 'Wallace Wesley',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args : {
    src: undefined
  }
}

