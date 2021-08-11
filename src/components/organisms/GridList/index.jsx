import React from 'react'
import { FlatList } from 'react-native'

import { Card } from '~/components/molecules'

import { SeparatorView } from './styles'

export function GridList({ data }) {
  return (
    <FlatList
      numColumns={3}
      data={data}
      renderItem={({ item }) => <Card item={item} size="large" />}
      keyExtractor={(item) => String(item.id)}
      ItemSeparatorComponent={() => <SeparatorView />}
    />
  )
}
