import api from "@/api/api";
import { CoinGroup, Coins } from "@/api/types";
import { coinGroupSchema } from "@/api/validation";
import { action, computed, makeObservable, observable } from "mobx";

// Ideally, the Single Coin screen should have a separate API request and a corresponding separate store.
// This is a temporary solution: currently, there is only one request, one state, and one isLoading for spinners on both screens.
class CoinsStore {
  @observable coinList: Coins = {};
  @observable isLoading = false;
  @observable isError = false;

  constructor() {
    makeObservable(this);
    this.fetchCoins();
  }

  @action.bound
  async fetchCoins() {
    try {
      this.isLoading = true;
      const fetchedCoins = await api.get<CoinGroup>("rates/extended").json();
      const validatedCoins = coinGroupSchema.safeParse(fetchedCoins);

      if (!validatedCoins.success) {
        throw new Error("Invalid coins data");
      }

      this.coinList = validatedCoins.data.usd;
    } catch (error) {
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  }

  @action.bound
  getSingleCoinData = (ticker = "") => {
    return this.coinList[ticker];
  };

  @computed get coinKeys() {
    return Object.keys(this.coinList);
  }

  @computed get hasCoins() {
    return this.coinKeys.length > 0;
  }

  @action.bound
  async refetchCoins() {
    if (this.hasCoins && !this.isLoading && !this.isError) {
      await this.fetchCoins();
    }
  }
}

const coinsStore = new CoinsStore();

export default coinsStore;
