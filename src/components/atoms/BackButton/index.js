import React from 'react'
import { BackButtonContainer } from './styles'
import { theme } from '~/styles/theme'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export function BackButton() {
  const navigation = useNavigation()
  return (
    <BackButtonContainer
      onPress={() => {
        navigation.goBack()
      }}
    >
      <Ionicons
        name="chevron-back"
        color={theme.colors.white}
        size={theme.metrics.px(28)}
        mt={theme.metrics.px(8)}
      />
    </BackButtonContainer>
  )
}
