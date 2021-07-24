import React from 'react'

import { CardImage, CardContainer } from './styles'

export function Card({ item }) {
  return (
    <CardContainer>
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  )
}
