import React, { useState, useEffect } from 'react'

import { ScreenScrollContainer, CustomText, Input } from '~/components'
import { GridList } from '~/components/organisms/GridList'
import { useGetData } from '~/services/hooks'

export function SearchScreen() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const { getSearchResult } = useGetData()

  const callGetSearchResult = async () => {
    setLoading(true)
    const result = await getSearchResult(query)
    if (!result.error) {
      setResults(result)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (query.length > 0 && query.length % 3 === 0) {
      callGetSearchResult()
    }
  }, [query])

  return (
    <ScreenScrollContainer withPadding>
      <CustomText fontFamily="bold" size={28} mb={24}>
        Pesquisar
      </CustomText>
      <Input
        mb={24}
        value={query}
        onChangeText={setQuery}
        placeholder="Filme ou nome do personagem"
      />
      <GridList loading={loading} type="search" data={results} />
    </ScreenScrollContainer>
  )
}
