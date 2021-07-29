import React, { useEffect, useState } from 'react'

import { ScreenScrollContainer, HomeList, Hero, Loader } from '~/components'

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

  if (loading) {
    return (
      <ScreenScrollContainer>
        <Loader />
      </ScreenScrollContainer>
    )
  }

  return (
    <ScreenScrollContainer>
      <Hero item={{ ...films[9], type: 'Filme' }} />
      <HomeList data={films} title="Filmes" type="Filme" />
      <HomeList data={characters} title="Personagens" type="Personagem" />
    </ScreenScrollContainer>
  )
}
