import React from 'react'

import { Container } from './styles'

export function CustomText({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>
}
