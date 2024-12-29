import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import '../global.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Jakarta-Bold': require('../../assets/fonts/PlusJakartaSans-Bold.ttf'),
    'Jakarta-ExtraBold': require('../../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    'Jakarta-ExtraLight': require('../../assets/fonts/PlusJakartaSans-ExtraLight.ttf'),
    'Jakarta-Light': require('../../assets/fonts/PlusJakartaSans-Light.ttf'),
    'Jakarta-Medium': require('../../assets/fonts/PlusJakartaSans-Medium.ttf'),
    'Jakarta-Regular': require('../../assets/fonts/PlusJakartaSans-Regular.ttf'),
    'Jakarta-SemiBold': require('../../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{ headerShown: false }}
      />
      <Stack.Screen name='+not-found' />
    </Stack>
  );
}
