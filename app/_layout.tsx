import {
  DefaultTheme as NavigationDefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import merge from "deepmerge";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  adaptNavigationTheme,
  Button,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

import { colors } from "@/constants/Colors";
import { TickerScreenParams } from "@/types";
import { Platform } from "react-native";

const customLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
};

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
});

const CombinedLightTheme = merge(LightTheme, customLightTheme);

export default function RootLayout() {
  return (
    <PaperProvider theme={CombinedLightTheme}>
      <ThemeProvider value={CombinedLightTheme as unknown as Theme}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.primary,
            headerLeft: () =>
              Platform.OS === "web" ? (
                <Button onPress={() => router.dismissTo("/")}>Home</Button>
              ) : undefined,
          }}
        >
          <Stack.Screen
            name="index"
            options={{ title: "Home", headerBackVisible: false, headerLeft: undefined }}
          />
          <Stack.Screen
            name="[ticker]"
            options={({ route }) => ({
              title: (route.params as TickerScreenParams).ticker?.toUpperCase(),
            })}
          />
          <Stack.Screen name="+not-found" options={{ title: "Oops! Not Found" }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </PaperProvider>
  );
}
