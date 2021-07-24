import React from 'react'

import { Container } from './styles'

import { CustomText, Logo } from '../../components'

export function SplashScreen() {
  return (
    <Container>
      <Logo />
      <CustomText>StarWarsWiki</CustomText>
    </Container>
  )
}
