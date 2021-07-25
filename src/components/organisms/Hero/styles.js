import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const HeroContainer = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(460)}px;
`
export const HeroImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`
export const HeroGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
  padding-top: ${({ theme }) => theme.metrics.px(56)}px;
`

export const ButtonsView = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: ${({ theme }) => theme.metrics.px(16)}px;
  justify-content: space-between;
`
