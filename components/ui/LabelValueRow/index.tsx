import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const styles = StyleSheet.create({
  row: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {},
});

type Props = {
  label: string;
  value: number;
};

export default function LabelValueRow({ label, value }: Props) {
  return (
    <View style={styles.row}>
      <Text variant="labelLarge" style={styles.text}>
        {label}
      </Text>
      <Text variant="labelLarge" style={styles.text}>
        {`${value} $`}
      </Text>
    </View>
  );
}
