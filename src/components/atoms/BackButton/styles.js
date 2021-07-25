import styled from 'styled-components/native'

export const BackButtonContainer = styled.TouchableOpacity`
  padding-left: ${({ theme }) => theme.metrics.px(24)}px;
  position: absolute;
  top: ${({ theme }) => theme.metrics.px(32)}px;
`
