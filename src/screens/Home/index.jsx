import React, { useEffect, useState } from 'react'

import { ScreenScrollContainer, HomeList, Hero } from '~/components'

import { useGetData } from '~/services/hooks'

export function Home() {
  const [loading, setLoading] = useState(true)
  const [films, setFilms] = useState()
  const [characters, setCharacters] = useState()

  const { getFilms, getCharacters } = useGetData(true)

  const callGetData = async () => {
    const [filmsResponse, charactersResponse] = await Promise.all([
      getFilms(),
      getCharacters(),
    ])
    if (!filmsResponse.error && !charactersResponse.error) {
      setFilms(filmsResponse)
      setCharacters(charactersResponse)
      setLoading(false)
    }
  }

  useEffect(() => {
    callGetData()
  }, [])

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
      <HomeList data={films} title="Filmes" />
      <HomeList data={characters} title="Personagens" />
    </ScreenScrollContainer>
  )
}
