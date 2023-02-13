import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'
export const TooltipContainer = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  border: 'none',
})
export const TooltipContent = styled('h1', {
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$short',
  fontWeight: '$medium',
  color: '$gray100',
})
export const TooltipArrow = styled(Tooltip.Arrow, {
  border: 'none',
  fill: '$gray900',
  width: '$4',
  height: '$2',
})
