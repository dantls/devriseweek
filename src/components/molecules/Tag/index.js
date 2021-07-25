import React from 'react'

import { CustomText } from '~/components/atoms'
import { TagContainer } from './styles'

export function Tag({ children, ...rest }) {
  return (
    <TagContainer {...rest}>
      <CustomText fontFamily="bold" size={14}>
        {children}
      </CustomText>
    </TagContainer>
  )
}
