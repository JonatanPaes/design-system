import { X } from 'phosphor-react'
import { Heading } from '../Heading'
import { CloseButton, ToastContainer } from './styles'

export interface ToastProps {
  title: string
  text: string
  onClickClose: () => void
}

export function Toast({ title, text, onClickClose }: ToastProps) {
  return (
    <ToastContainer>
      <div>
        <Heading size="sm">{title}</Heading>
        <CloseButton onClick={onClickClose}>
          <X weight="bold" size={20} />
        </CloseButton>
      </div>
      <span>{text}</span>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
