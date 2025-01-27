import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

const onNavigationDismiss = () => router.dismissTo("/");

export default function Error() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text variant="labelLarge">Something went wrong.</Text>
      </View>
      <Button onPress={onNavigationDismiss}>Go to Home screen</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    padding: 16,
  },
});
