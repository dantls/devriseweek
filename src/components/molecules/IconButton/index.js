import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { CustomText } from '~/components/atoms'
import { ButtonContainer, Icon } from './styles'
import { theme } from '~/styles/theme'

export function IconButton({ iconName, label, ...rest }) {
  return (
    <ButtonContainer {...rest}>
      <Ionicons
        name={iconName}
        color={theme.colors.white}
        size={theme.metrics.px(24)}
        mt={theme.metrics.px(8)}
      />
      <CustomText fontFamily="semiBold" size={10} mt={8}>
        {label}
      </CustomText>
    </ButtonContainer>
  )
}
