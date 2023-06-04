import { useCallback } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
} from '@expo-google-fonts/inter';

import { theme } from './src/theme';
import Widget from './src/Components/Widget';

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
            }}
            onLayout={onLayoutRootView}
        >
            <StatusBar
                style="light"
                backgroundColor="transparent"
                translucent
            />

            <Widget />
            
        </View>
    );
}
