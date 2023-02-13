import type { StoryObj, Meta } from '@storybook/react'
import { Box, Toast, ToastProps, Button } from '@alphacall-ui/react'
import { useState } from 'react'

export default {
  title: 'Form/Toast',
  component: Toast,
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)
      return (
        <Box
          as={'label'}
          css={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Button onClick={() => setOpen((state) => !state)}>Push Toast</Button>
          {Story({
            args: {
              open,
              title: 'Example Title',
              description: 'Example description',
            },
          })}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
