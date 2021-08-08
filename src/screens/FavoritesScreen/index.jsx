import React, { useEffect } from 'react'

import { ScreenScrollContainer, CustomText } from '~/components'

import { useFavorites } from '~/services/hooks'

export function FavoritesScreen() {
  const { getFavorites } = useFavorites()
  const callGetFavorites = async () => {
    const favorites = await getFavorites()
  }
  useEffect(() => {
    callGetFavorites()
  }, [])

  return (
    <ScreenScrollContainer withPadding>
      <CustomText fontFamily="bold" size={28}>
        Favorites
      </CustomText>
    </ScreenScrollContainer>
  )
}
