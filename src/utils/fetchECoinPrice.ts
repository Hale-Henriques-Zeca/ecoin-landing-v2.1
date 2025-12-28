import axios from "axios";

// Par E-Coin / USDT na PancakeSwap
const API_URL =
  "https://api.dexscreener.com/latest/dex/pairs/bsc/0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964_0x55d398326f99059fF775485246999027B3197955";

export async function fetchECoinPrice() {
  try {
    const res = await axios.get(API_URL);
    const pair = res.data?.pair;

    if (pair && pair.priceUsd) {
      return {
        price: parseFloat(pair.priceUsd),
        volume: pair.volume?.h24,
        liquidity: pair.liquidity?.usd,
        change24h: pair.priceChange?.h24,
      };
    } else {
      console.warn("⚠️ Nenhum dado de preço retornado da DexScreener.");
      return null;
    }
  } catch (err) {
    console.error("Erro ao buscar preço da E-Coin:", err);
    return null;
  }
}
