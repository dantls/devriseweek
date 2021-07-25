import React from 'react'
import { Container } from './styles'
import logoImage from '../../../../assets/logo.png'

const sizes = {
  small: 28,
  large: 64,
}

export function Logo({ size }) {
  return <Container source={logoImage} size={sizes[size || 'large']} />
}
