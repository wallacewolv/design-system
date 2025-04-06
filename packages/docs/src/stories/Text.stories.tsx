import { Text, TextProps} from '@ignite-ui/react';

import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur, sint, corporis dignissimos deleniti reiciendis architecto quas fuga praesentium, itaque nam! Laudantium doloremque voluptatibus nihil maiores libero unde porro vel.'
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args : {
    children: 'Strong text',
    as: 'strong'
  }
}
