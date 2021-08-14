import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const Container = styled.View`
  display: flex;
  flex-direction: ${({ dir }) => dir || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  background-color: ${({ bg, theme }) => theme.colors[bg || 'dark']};
  width: ${({ w, theme }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
  height: ${({ h, theme }) => (h ? `${theme.metrics.px(h)}px` : '100%')};
`
export const ScreenScrollContainer = styled.ScrollView.attrs(
  ({ theme, withPadding }) => ({
    contentContainerStyle: withPadding
      ? {
          paddingVertical:
            Platform.OS === 'ios' ? theme.metrics.px(24) : theme.metrics.px(12),
          paddingHorizontal: theme.metrics.px(24),
        }
      : {},
  })
)`
  background-color: ${({ bg, theme }) => theme.colors[bg || 'dark']};
`
