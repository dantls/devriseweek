import React from 'react'

import { Card } from '../../molecules'
import { CustomText } from '../../atoms'

import { List, ListContainer } from './styles'
import { theme } from '~/styles/theme'

export function HomeList({ data, title, type }) {
  return (
    <ListContainer>
      <CustomText fontFamily="black" size={18} ml={24}>
        {title}
      </CustomText>
      <List
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Card item={{ ...item, type }} />}
        horizontal
        contentContainerStyle={{
          paddingTop: theme.metrics.px(12),
          paddingLeft: theme.metrics.px(24),
          paddingBottom: theme.metrics.px(24),
        }}
      />
    </ListContainer>
  )
}
