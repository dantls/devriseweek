import styled from 'styled-components/native'

export const Modal = styled.Modal``

export const ModalBackgroundContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkTransparent};
`
export const ModalContentContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark};
  height: ${({ theme }) => theme.metrics.px(326)}px;
  width: ${({ theme }) => theme.metrics.px(326)}px;
  padding: ${({ theme }) => theme.metrics.px(12)}px;
`
export const FavoriteImage = styled.Image`
  height: ${({ theme }) => theme.metrics.px(80)}px;
  width: ${({ theme }) => theme.metrics.px(80)}px;
`
