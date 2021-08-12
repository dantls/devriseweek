import React from 'react'
import { FlatList } from 'react-native'

import { Card } from '~/components/molecules'

import { SeparatorView, NoDataImage } from './styles'

import { CustomText } from '~/components/atoms/CustomText'
import { Container } from '~/components/atoms/Container'

import noDataSearch from '../../../../assets/no-data-search.png'
import noDataFavorites from '../../../../assets/no-data-favorites.png'

export function GridList({ data, noDataText, type }) {
  return (
    <FlatList
      numColumns={3}
      data={data}
      renderItem={({ item }) => <Card item={item} size="large" />}
      keyExtractor={(item) => String(item.id)}
      ItemSeparatorComponent={() => <SeparatorView />}
      ListEmptyComponent={() => (
        <Container>
          <NoDataImage
            source={type === 'favorites' ? noDataFavorites : noDataSearch}
          />
          <CustomText fontFamily="semiBold" size={14}>
            {`Nenhum 
            ${type === 'favorites' ? 'favorito' : 'resultado'}
            Encontrado.`}
          </CustomText>
        </Container>
      )}
    />
  )
}
