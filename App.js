import React from 'react';
import { SplashScreen } from './src/screens/SplashScreen';
import { StatusBar } from 'react-native';


export default function App() {
  return (
    <>
      <SplashScreen />
      <StatusBar
        barStyle = "light-content"
        backgroundColor = "transparent"
        translucent
        networkActivityIndicatorVisible = {true}
      />
    </>
  );
}

