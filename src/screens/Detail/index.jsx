import React from 'react'

import {
  ScreenScrollContainer,
  Hero,
  BackButton,
  CustomText,
} from '~/components'

import { useDataStore } from '~/services/stores'

export function Detail() {
  const { selectedData } = useDataStore()
  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail withoutLogo />
      <BackButton />
      <CustomText ml={24} fontFamily="black" size={18}>
        Descrição
      </CustomText>
      <CustomText mt={12} ml={24} mr={24} size={14} lh={20}>
        {selectedData.description}
      </CustomText>
    </ScreenScrollContainer>
  )
}
