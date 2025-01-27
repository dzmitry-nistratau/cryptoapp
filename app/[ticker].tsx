import { useLocalSearchParams } from "expo-router";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import { Error, LabelValueRow, LoadScreenSpinner } from "@/components/ui";
import coinsStore from "@/store/coins";
import { TickerScreenParams } from "@/types";

export default observer(function CoinScreen() {
  const { ticker } = useLocalSearchParams<TickerScreenParams>();

  const { getSingleCoinData, isLoading, refetchCoins } = coinsStore;

  useEffect(() => {
    // Temporary solution: Fetches all coins to ensure the data is current when navigating to this screen.
    // This approach is used because users might access a coin's screen before the main screen in the web app.
    // Ideally, only the specific coin's data should be fetched.
    refetchCoins();
  }, []);

  if (isLoading) {
    return <LoadScreenSpinner />;
  }

  const coin = getSingleCoinData(ticker);

  if (!coin) {
    return <Error />;
  }

  const { ask, bid, diff24h, rate } = coin;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.rate} variant="headlineMedium">
        {rate} $
      </Text>
      <LabelValueRow label="Ask Price" value={ask} />
      <LabelValueRow label="Bid Price" value={bid} />
      <LabelValueRow label="Diff 24h" value={diff24h} />
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rate: {
    padding: 16,
  },
});
