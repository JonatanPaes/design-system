import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',
  background: '$gray900',
  color: '$gray100',
  fontFamily: '$tooltip',
  fontSize: '$sm',
  borderRadius: '$xs',
  fontWeight: '$medium',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
