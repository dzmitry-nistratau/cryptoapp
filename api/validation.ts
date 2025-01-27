import { z } from "zod";

export const coinDataSchema = z.object({
  rate: z.number(),
  ask: z.number(),
  bid: z.number(),
  diff24h: z.number(),
});

export const coinsSchema = z.record(coinDataSchema);

export const coinGroupSchema = z.record(coinsSchema);
