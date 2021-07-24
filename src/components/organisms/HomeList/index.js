import React from 'react'

import { Card } from '../../molecules'
import { CustomText } from '../../atoms'

import { List } from './styles'

const FAKE_DATA = [
  {
    id: 0,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbBdP2gSOm6AcYtmId-RB-IsS6VEYSKgNepQ&usqp=CAU',
  },
  {
    id: 1,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbBdP2gSOm6AcYtmId-RB-IsS6VEYSKgNepQ&usqp=CAU',
  },
  {
    id: 2,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbBdP2gSOm6AcYtmId-RB-IsS6VEYSKgNepQ&usqp=CAU',
  },
  {
    id: 3,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbBdP2gSOm6AcYtmId-RB-IsS6VEYSKgNepQ&usqp=CAU',
  },
  {
    id: 4,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbBdP2gSOm6AcYtmId-RB-IsS6VEYSKgNepQ&usqp=CAU',
  },
]

export function HomeList() {
  return (
    <List
      data={FAKE_DATA}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <Card item={item} />}
      horizontal
    />
  )
}
