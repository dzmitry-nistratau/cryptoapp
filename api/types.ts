export type CoinGroup = {
  [coinGroup: string]: Coins;
};

export type Coins = {
  [coin: string]: CoinData;
};

export type CoinData = {
  rate: number;
  ask: number;
  bid: number;
  diff24h: number;
};
