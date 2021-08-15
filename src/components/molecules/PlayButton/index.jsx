import React from 'react'
import { CustomText } from '~/components/atoms'
import { PlayButtonContainer } from './styles'
import { theme } from '~/styles/theme'
import { Ionicons } from '@expo/vector-icons'

export function PlayButton(props) {
  return (
    <PlayButtonContainer {...props}>
      <Ionicons
        name="play"
        color={theme.colors.black}
        size={theme.metrics.px(16)}
        mt={theme.metrics.px(8)}
      />
      <CustomText mt={2} ml={4} fontFamily="bold" color="black" size={14}>
        Assistir
      </CustomText>
    </PlayButtonContainer>
  )
}
