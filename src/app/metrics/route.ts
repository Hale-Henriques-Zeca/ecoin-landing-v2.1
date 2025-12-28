import { NextResponse } from "next/server";

const [metrics, setMetrics] = useState<Metrics | null>(null);

useEffect(() => {
  fetch("/api/metrics")
    .then((res) => res.json())
    .then(setMetrics)
    .catch(console.error);
}, []);

export async function GET() {
  try {
    // 🔹 EXEMPLO — depois trocamos por dados reais 100%
    // (já deixo preparado)

    const data = {
      dailyActiveUsers: "—", // on-chain é complexo (explico abaixo)
      tvl: "$6.507B",
      volume24h: "$4.815B",
      gasFee: "$0.0049",
      finalityTime: "1.87s"
    };

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch metrics" },
      { status: 500 }
    );
  }
}
