import { Groups } from '@app/Groups';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { StatusBar } from 'react-native'
import { LoadingApp } from '@components/Loading'

import { ThemeProvider } from 'styled-components/native'

import theme from '../theme'


export default function App() {
  const [isLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {isLoadedFonts ? <Groups /> : <LoadingApp />}
    </ThemeProvider>
  );
}