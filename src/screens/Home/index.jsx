import React from 'react'

import { ScreenScrollContainer, HomeList, Hero } from '~/components'

const FAKE_DATA = [
  {
    id: 0,
    type: 'Personagem',
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbBdP2gSOm6AcYtmId-RB-IsS6VEYSKgNepQ&usqp=CAU',
    title: 'Darth Vader',
    subtitle: 'Anakin SkyWalker',
    description:
      'Darth Vader é um personagem fictício da franquia Star Wars . O personagem é o principal antagonista da trilogia original e, como Anakin Skywalker , é o principal protagonista da trilogia prequela . O criador de Star Wars , George Lucas, se referiu coletivamente aos seis primeiros filmes episódicos da franquia como "a tragédia de Darth Vader".',
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

export function Home() {
  return (
    <ScreenScrollContainer>
      <Hero
        item={{
          title: 'Episódio IX',
          image_url: 'https://wallpaperaccess.com/full/3244446.jpg',
          subtitle: 'The Rise of SkyWalker',
          type: 'Filme',
        }}
      />
      <HomeList data={FAKE_DATA} title="Filmes" />
      <HomeList data={FAKE_DATA} title="Personagens" />
    </ScreenScrollContainer>
  )
}
