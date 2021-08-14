import React from 'react'
import { InputContainer, TextInput } from './styles'
export function Input(props) {
  return (
    <InputContainer {...props}>
      <TextInput placeholder="Pesquise por título ou personagem" {...props} />
    </InputContainer>
  )
}
