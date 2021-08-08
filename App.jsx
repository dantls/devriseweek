import 'react-native-gesture-handler'
import React from 'react'
import Routes from './src/routes'
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'react-native'
import { theme } from './src/styles'
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
  SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro'
import { SplashScreen } from './src/screens'

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
      <StatusBar
        barStyle="light-content"
        // backgroundColor="transparent"
        // translucent
        // networkActivityIndicatorVisible={true}
      />
      <Routes />
    </ThemeProvider>
  )
}
