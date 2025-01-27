import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

type Props = {
  onRefresh: () => void;
};

export default function EmptyList({ onRefresh }: Props) {
  return (
    <>
      <View style={styles.textContainer}>
        <Text variant="labelLarge">There are no coins to display</Text>
      </View>
      <Button onPress={onRefresh}>Try again</Button>
    </>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    padding: 16,
  },
});
