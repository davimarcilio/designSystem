import { TooltipArrow, TooltipContainer, TooltipContent } from './styles'
import * as TooltipR from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

export interface TooltipProps {
  children: ReactNode
  content: string
  open?: boolean
}

export function Tooltip({ content, children, open }: TooltipProps) {
  return (
    <TooltipR.Provider>
      <TooltipR.Root open={open}>
        <TooltipR.Trigger asChild>{children}</TooltipR.Trigger>
        <TooltipR.Portal>
          <TooltipContainer>
            <TooltipArrow colorInterpolation={'#fff'} color="#ffff" />
            <TooltipContent>{content}</TooltipContent>
          </TooltipContainer>
        </TooltipR.Portal>
      </TooltipR.Root>
    </TooltipR.Provider>
  )
}
