import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export default function LoadScreenSpinner() {
  return <ActivityIndicator animating={true} size="large" style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
