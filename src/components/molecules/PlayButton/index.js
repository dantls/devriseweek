import React from 'react'
import { CustomText } from '~/components/atoms'
import { PlayButtonContainer } from './styles'
import { theme } from '~/styles/theme'
import { Ionicons } from '@expo/vector-icons'

export function PlayButton() {
  return (
    <PlayButtonContainer>
      <Ionicons
        name="play"
        color={theme.colors.black}
        size={theme.metrics.px(16)}
        mt={theme.metrics.px(8)}
      />
      <CustomText fontFamily="bold" color="black" size={12}>
        Assistir
      </CustomText>
    </PlayButtonContainer>
  )
}
