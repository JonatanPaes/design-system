import { CaretDown } from 'phosphor-react'
import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 'fit-content',

  div: {
    background: '$gray900',
    borderRadius: '$sm',
    padding: '$3 $4',
    color: '$gray100',
    width: 'fit-content',

    span: {
      lineHeight: '$shorter',
      fontFamily: '$tooltip',
    },
  },
})

export const CaretDownIcon = styled(CaretDown, {
  marginTop: '-0.563rem',
  color: '$gray900',
})
