import React, { useState, useEffect } from 'react'
import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  ButtonsView,
} from './styles'
import { colors } from '~/styles/colors'
import { CustomText, Logo } from '~/components/atoms'
import { Tag, IconButton } from '../../molecules'
import { PlayButton } from '../../molecules/PlayButton'
import { useFavorites } from '~/services/hooks'
import { useNavigation } from '@react-navigation/core'
import { useDataStore } from '~/services/stores'

export function Hero({ item, withoutLogo }) {
  const navigation = useNavigation()
  const { setSelectedData } = useDataStore()
  const [loading, setLoading] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const { image_url, type, title, subtitle } = item
  const { addFavorite, getFavorites, removeFavorite } = useFavorites()

  const checkIsFavorite = async () => {
    setLoading(true)
    const favorites = await getFavorites()
    console.log(favorites)
    const isInFavorites = favorites.filter(
      (favorite) => favorite.id === item.id && favorite.type === item.type
    )
    setIsFavorite(isInFavorites.length > 0)
    setLoading(false)
  }
  useEffect(() => {
    checkIsFavorite()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAddFavorite = async () => {
    await addFavorite(item)
    checkIsFavorite()
  }
  const handleRemoveFavorite = async () => {
    await removeFavorite(item)
    checkIsFavorite()
  }

  const handleOpenDetail = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }
  return (
    <HeroContainer>
      <HeroImageBackground source={{ uri: image_url }}>
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          {!withoutLogo && <Logo size="small" />}
          <Tag mt={withoutLogo ? 224 : 200}>{type}</Tag>
          <CustomText fontFamily="bold" size={28} mt={8}>
            {subtitle}
          </CustomText>
          <CustomText size={18}>{title}</CustomText>
          <ButtonsView>
            <IconButton
              label={isFavorite ? 'Remove Favoritos' : 'Add Favoritos'}
              iconName={
                isFavorite ? 'remove-circle-outline' : 'add-circle-outline'
              }
              onPress={() =>
                isFavorite ? handleRemoveFavorite() : handleAddFavorite()
              }
            />
            <PlayButton />
            <IconButton
              onPress={() => handleOpenDetail()}
              label="Saiba mais"
              iconName="information-circle-outline"
            />
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}
