import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Divider } from "react-native-paper";

import { EmptyList, ListItem } from "@/components/list";
import { Error, LoadScreenSpinner } from "@/components/ui";
import coinsStore from "@/store/coins";

const keyExtractor = (item: string) => item;
const renderItem = ({ item }: { item: string }) => <ListItem ticker={item} />;
const ItemSeparatorComponent = () => <Divider />;

export default observer(function CoinsList() {
  const { hasCoins, coinKeys, isLoading, isError, refetchCoins } = coinsStore;

  useEffect(() => {
    // Temporary solution to ensure data is up-to-date when navigating to the screen
    refetchCoins();
  }, []);

  if (isLoading) {
    return <LoadScreenSpinner />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      {hasCoins ? (
        <FlatList
          style={styles.list}
          data={coinKeys}
          keyExtractor={keyExtractor}
          initialNumToRender={25}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      ) : (
        <EmptyList onRefresh={refetchCoins} />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
  },
  listItem: {
    paddingHorizontal: 16,
  },
});
