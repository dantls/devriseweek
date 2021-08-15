import React, { useState, useEffect } from 'react'
import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  ButtonsView,
} from './styles'
import { colors } from '~/styles/colors'
import { CustomText, Logo } from '~/components/atoms'
import { Tag, IconButton, FavoriteStateModal } from '../../molecules'
import { PlayButton } from '../../molecules/PlayButton'
import { useFavorites } from '~/services/hooks'
import { useNavigation } from '@react-navigation/core'
import { useDataStore } from '~/services/stores'

export function Hero({ item, withoutLogo, onDetail }) {
  const navigation = useNavigation()
  const { setSelectedData } = useDataStore()
  const [showFavoriteModal, setShowFavoriteModal] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const { image_url, type, title, subtitle } = item
  const { addFavorite, getFavorites, removeFavorite } = useFavorites()

  const closeFavoriteModal = () => {
    setTimeout(() => {
      setShowFavoriteModal(null)
    }, 1000)
  }

  const checkIsFavorite = async () => {
    const favorites = await getFavorites()
    const isInFavorites = favorites.filter(
      (favorite) => favorite.id === item.id && favorite.type === item.type
    )
    setIsFavorite(isInFavorites.length > 0)
  }
  useEffect(() => {
    checkIsFavorite()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAddFavorite = async () => {
    await addFavorite(item)
    setShowFavoriteModal('added')
    checkIsFavorite()
    closeFavoriteModal()
  }
  const handleRemoveFavorite = async () => {
    await removeFavorite(item)
    setShowFavoriteModal('removed')
    checkIsFavorite()
    closeFavoriteModal()
  }

  const handleOpenDetail = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }
  const handleOpenWatch = () => {
    setSelectedData(item)
    navigation.navigate('Watch')
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
          <ButtonsView onDetail={onDetail}>
            <IconButton
              label={isFavorite ? 'Remove Favoritos' : 'Add Favoritos'}
              iconName={
                isFavorite ? 'remove-circle-outline' : 'add-circle-outline'
              }
              onPress={() =>
                isFavorite ? handleRemoveFavorite() : handleAddFavorite()
              }
            />
            {type !== 'Personagem' && <PlayButton onPress={handleOpenWatch} />}
            {!onDetail && (
              <IconButton
                onPress={handleOpenDetail}
                label="Saiba mais"
                iconName="information-circle-outline"
              />
            )}
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
      {!!showFavoriteModal && (
        <FavoriteStateModal
          type={showFavoriteModal}
          visible={!!showFavoriteModal}
          onClose={() => setShowFavoriteModal(null)}
        />
      )}
    </HeroContainer>
  )
}
