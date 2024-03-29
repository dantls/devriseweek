import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { CardImage, CardContainer } from './styles'

import { useDataStore } from '~/services/stores'

const sizes = {
  small: {
    h: 124,
    w: 88,
  },
  large: {
    h: 150,
    w: 102,
  },
}

export function Card({ item, size }) {
  const navigation = useNavigation()

  const { setSelectedData } = useDataStore()

  function handleSelectedItem() {
    setSelectedData(item)
    navigation.navigate('Detail')
  }
  return (
    <CardContainer
      onPress={handleSelectedItem}
      size={size ? sizes[size] : sizes.small}
    >
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  )
}
