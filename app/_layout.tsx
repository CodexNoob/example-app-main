import { Stack } from "expo-router";
import { StackNavigationOptions } from '@react-navigation/stack';

type RootStackParamList = {
  index: undefined;
  RegistrationPage: undefined;
  login: undefined; // Define login as a route
  "(tabs)": undefined;
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="RegistrationPage" options={{ headerShown: false }} />
      <Stack.Screen name="LoginPage" options={{ headerShown: false }} /> {/* Add login screen */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
