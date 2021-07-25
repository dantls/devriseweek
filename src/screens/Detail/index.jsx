import React from 'react'

import { ScreenScrollContainer, Hero, BackButton } from '~/components'

import { useDataStore } from '~/services/stores'

export function Detail() {
  const { selectedData } = useDataStore()
  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} withoutLogo />
      <BackButton />
    </ScreenScrollContainer>
  )
}
