import { Box, BoxProps, Text } from '@ignite-ui/react';

import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Testando o elemento Box</Text>
  },
  argTypes: {
    children: {
      control: {
        type: 'select'
      }
    }
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = { }
