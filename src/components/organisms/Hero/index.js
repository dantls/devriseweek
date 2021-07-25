import React from 'react'
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

export function Hero() {
  return (
    <HeroContainer>
      <HeroImageBackground
        source={{ uri: 'https://wallpaperaccess.com/full/3244446.jpg' }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          <Logo size="small" />
          <Tag mt={200}>Filme</Tag>
          <CustomText fontFamily="bold" size={28} mt={8}>
            Episódio IX
          </CustomText>
          <CustomText size={18}>The Rise of SkyWalker IX</CustomText>
          <ButtonsView>
            <IconButton label="Favoritos" iconName="add-circle-outline" />
            <PlayButton />
            <IconButton
              label="Saiba mais"
              iconName="information-circle-outline"
            />
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}
