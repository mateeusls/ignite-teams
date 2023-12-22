import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

import theme from './src/theme/index'

import {
  useFonts,
  Roboto_400Regular as Roboto400Regular,
  Roboto_700Bold as Roboto700Bold,
} from '@expo-google-fonts/roboto'

import { Loading } from '@components/Loading'
import { Routes } from '@routes/index'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto400Regular,
    Roboto700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}
