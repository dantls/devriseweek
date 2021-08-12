import React, { useEffect, useState } from 'react'

import { ScreenScrollContainer, CustomText } from '~/components'
import { GridList } from '~/components/organisms/GridList'

import { useFavorites } from '~/services/hooks'

export function FavoritesScreen({ navigation }) {
  const { getFavorites } = useFavorites()
  const [favoritesList, setFavoritesList] = useState([])
  const callGetFavorites = async () => {
    const favorites = await getFavorites()
    setFavoritesList(favorites)
  }
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      callGetFavorites()
    })
  }, [])

  return (
    <ScreenScrollContainer withPadding>
      <CustomText fontFamily="bold" size={28} mb={24}>
        Favorites
      </CustomText>
      <GridList type="favorites" data={favoritesList} />
    </ScreenScrollContainer>
  )
}
