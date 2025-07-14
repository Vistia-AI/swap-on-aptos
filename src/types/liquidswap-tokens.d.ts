declare module "@/resource/liquidswap-tokens.json" {
  interface TokenData {
    name: string;
    type: string;
    symbol: string;
    source: string;
    decimals: number;
    logoUrl: string;
  }

  const tokens: Record<string, TokenData>;
  export default tokens;
} 