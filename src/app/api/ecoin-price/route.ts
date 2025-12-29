import { NextResponse } from "next/server";
import { JsonRpcProvider } from "ethers";
import { ChainId, Fetcher, Route, Token } from "@pancakeswap/sdk";

export async function GET() {
  try {
    // 🔗 RPC BSC
    const provider = new JsonRpcProvider(
      "https://bsc-dataseed.binance.org/"
    );

    // 🪙 E-COIN
    const Ecoin = new Token(
      ChainId.BSC,
      "0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964",
      18,
      "ECOIN",
      "E-Coin"
    );

    // 💵 USDT (BSC)
    const Usdt = new Token(
      ChainId.BSC,
      "0x55d398326f99059fF775485246999027B3197955",
      18,
      "USDT",
      "Tether USD"
    );

    // 🔎 Tentar buscar par (pode falhar)
    const pair = await Fetcher.fetchPairData(Ecoin, Usdt, provider);

    // 🧮 Calcular rota
    const route = new Route([pair], Usdt);
    const price = Number(
      route.midPrice.invert().toSignificant(6)
    );

    // ✅ Preço válido
    if (!price || isNaN(price)) {
      throw new Error("INVALID_PRICE");
    }

    return NextResponse.json({
      price,
      source: "pancakeswap",
      status: "ok",
    });

  } catch (err: any) {
    // ⚠️ FALLBACK SEGURO
    console.warn("⚠️ E-COIN API fallback ativado:", err?.message || err);

    return NextResponse.json(
      {
        price: 1,              // 🔒 preço temporário fixo
        source: "fallback",
        status: "paused",
        reason: err?.message || "PAIR_NOT_FOUND_OR_RPC_ERROR",
      },
      { status: 200 }           // ⚠️ 200 de propósito (não quebra o client)
    );
  }
}
