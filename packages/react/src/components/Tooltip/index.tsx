import { Text } from '../Text'
import { TooltipContainer, CaretDownIcon } from './styles'

export interface TooltipProps {
  date: string
  isAvailable: boolean
}

export function Tooltip({ date, isAvailable }: TooltipProps) {
  return (
    <TooltipContainer>
      <div>
        <Text as="span" size="sm">
          {date} - {isAvailable ? 'Disponível' : 'Indisponível'}
        </Text>
      </div>

      <CaretDownIcon size={24} weight="fill" />
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
