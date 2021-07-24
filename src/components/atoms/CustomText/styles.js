import styled from 'styled-components/native'

export const Container = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  color: ${({ color, theme }) => color || theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
`
