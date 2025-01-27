import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";

type Props = {
  ticker: string;
};

export default function ListItem({ ticker }: Props) {
  return (
    <Link href={`/${ticker}`} asChild>
      <List.Item title={ticker} style={styles.listItem} />
    </Link>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 16,
  },
});
