import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@alphacall-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/davimarcilio.png',
    alt: 'Davi Marcilio',
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
