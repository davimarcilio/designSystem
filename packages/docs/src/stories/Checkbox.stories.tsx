import type { StoryObj, Meta } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@alphacall-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Box
          as={'label'}
          css={{ display: 'flex', flexDirection: 'row', gap: 10 }}
        >
          {Story()}
          <Text size={'sm'}>Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
