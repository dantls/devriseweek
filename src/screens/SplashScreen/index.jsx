import React, { useEffect } from 'react'

import { CustomText, Logo, Container } from '../../components'

export function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 2000)
  }, [navigation])

  return (
    <Container align="center" justify="center">
      <Logo />
      <CustomText fontFamily="bold" size={24} mt={12}>
        StarWarsWiki
      </CustomText>
    </Container>
  )
}
