import React from 'react'

import { CustomText, Logo, Container } from '../../components'

export function SplashScreen() {
  return (
    <Container
      align="center"
      justify="center"
    >
      <Logo />
      <CustomText>StarWarsWiki</CustomText>
    </Container>
  )
}
