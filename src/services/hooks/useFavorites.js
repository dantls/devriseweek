import AsyncStorage from '@react-native-async-storage/async-storage'

const DB_KEY = '@StarWarsWiki:favorites'

export const useFavorites = () => {
  const addFavorite = async (data) => {
    let newDB
    try {
      const value = await AsyncStorage.getItem(DB_KEY)

      if (value !== null) {
        const db = JSON.parse(value)
        newDB = [...db, data]
      } else {
        newDB = [data]
      }
      const JSONValue = JSON.stringify(newDB)
      await AsyncStorage.setItem(DB_KEY, JSONValue)

      return newDB
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  const getFavorites = async () => {
    const value = await AsyncStorage.getItem(DB_KEY)
    if (value !== null) {
      const db = JSON.parse(value)
      return db
    }
    return []
  }

  const removeFavorite = async (data) => {
    try {
      let newDB
      const value = await AsyncStorage.getItem(DB_KEY)

      if (value !== null) {
        const db = JSON.parse(value)

        newDB = db.filter(
          (item) => !(item.id === data.id && item.type === data.type)
        )
      }
      const JSONValue = JSON.stringify(newDB)
      await AsyncStorage.setItem(DB_KEY, JSONValue)

      return newDB
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  return {
    getFavorites,
    addFavorite,
    removeFavorite,
  }
}
