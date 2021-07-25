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

export function Hero({ item, withoutLogo }) {
  const { image_url, type, title, subtitle } = item

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
