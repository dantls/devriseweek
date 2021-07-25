import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { CardImage, CardContainer } from './styles'

import { useDataStore } from '~/services/stores'

export function Card({ item }) {
  const navigation = useNavigation()

  const { setSelectedData } = useDataStore()

  function handleSelectedItem() {
    setSelectedData(item)
    navigation.navigate('Detail')
  }
  return (
    <CardContainer onPress={handleSelectedItem}>
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  )
}
