import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'
export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  color: '$white',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  listStyle: 'none',
  padding: '$3 $5',
  fontFamily: '$default',
  display: 'flex',
  justifyContent: 'space-between',
  minWidth: 360,
})

export const ToastContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
})
export const ToastDescription = styled(Toast.Description, {
  fontWeight: '$regular',
  fontSize: '$sm',
  color: '$gray200',
})
export const ToastClose = styled(Toast.Close, {
  color: '$gray200',
  cursor: 'pointer',
  transition: 'color, 0.150s',
  '&:hover': {
    color: '$gray100',
  },
})
export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '$8',
  right: '$8',
})
