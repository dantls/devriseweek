import styled from 'styled-components/native'

export const Container = styled.Image`
  height: ${({ theme, size }) => theme.metrics.px(size)}px;
  width: ${({ theme, size }) => theme.metrics.px(size)}px;
`
