import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$1',
  padding: '$3 $5',

  borderRadius: '$sm',
  border: '1px solid $gray600',
  background: '$gray800',

  color: '$gray200',
  maxWidth: '20rem',
  cursor: 'default',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  span: {
    fontFamily: '$default',
    fontSize: '$sm',
  },
})

export const CloseButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  width: '$5',
  height: '$5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
