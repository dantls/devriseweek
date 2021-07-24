import React from 'react'
import { SplashScreen } from './src/screens/SplashScreen'
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
  SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro'
import { StatusBar } from 'react-native'
import { theme } from './src/styles'

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
    SourceSansPro_900Black,
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <SplashScreen />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        networkActivityIndicatorVisible={true}
      />
    </ThemeProvider>
  )
}
