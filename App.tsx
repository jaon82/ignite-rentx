import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Inter_400Regular as InterRegular,
  Inter_500Medium as InterMedium,
} from '@expo-google-fonts/inter';
import {
  Archivo_400Regular as ArchivoRegular,
  Archivo_500Medium as ArchivoMedium,
  Archivo_600SemiBold as ArchivoBold,
} from '@expo-google-fonts/archivo';
import AppLoading from 'expo-app-loading';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import theme from './src/global/styles/theme';
import Home from './src/screens/Home';
import CarDetails from './src/screens/CarDetails';
import Scheduling from './src/screens/Scheduling';

export default function App() {
  const [fontsLoaded] = useFonts({
    InterRegular,
    InterMedium,
    ArchivoRegular,
    ArchivoMedium,
    ArchivoBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Scheduling />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
