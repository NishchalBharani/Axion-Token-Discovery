export type TokenCategory =
  | "new_pairs"
  | "final_stretch"
  | "migrated";

export interface TokenStats {
  buy: number;
  sell: number;
  holders: number;
  bots: number;
  whales: number;
}

export interface Token {
  id: string;
  symbol: string;
  name: string;
  image: string;
  category: TokenCategory;
  price: number;
  change24h: number;
  marketCap: number;
  fdv: number;
  txCount: number;
  pumpLabel: string;
  stats: TokenStats;
  updatedAt: number;
}