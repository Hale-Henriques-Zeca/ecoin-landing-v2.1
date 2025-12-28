export default function BuyBackSection() {
  return (
    <section
      id="buyback-visual"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* FUNDO CINEMATOGRÁFICO */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D4AF37]/20 blur-[40px]" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-[#1C2D5A]/60 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-4">
          E-Coin Buy-Back Engine
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 text-sm sm:text-base mb-16">
          Um sistema econômico vivo, projetado para absorver dumps, eliminar
          liquidações forçadas e sustentar a valorização orgânica da E-Coin
          através de recompra inteligente e receitas reais.
        </p>

        {/* DIAGRAMA */}
        <div className="relative mx-auto h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px]">
          {/* CENTRO */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full border-4 border-[#D4AF37] bg-black flex items-center justify-center shadow-[0_0_50px_#D4AF37]">
              <span className="font-bold text-[#D4AF37]">E-Coin</span>
            </div>
          </div>

          {/* ORBITA */}
          <svg viewBox="0 0 380 380" className="absolute inset-0 animate-spin-slow">
            <circle
              cx="190"
              cy="190"
              r="150"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeDasharray="8 12"
            />
          </svg>

          {/* NÓS */}
          {[
            "Venda",
            "Recompra",
            "Queima",
            "Estabilização",
            "Emissão",
            "Crescimento",
          ].map((label, i) => {
            const angle = (i / 6) * 2 * Math.PI;
            const x = 190 + 150 * Math.cos(angle);
            const y = 190 + 150 * Math.sin(angle);

            return (
              <div
                key={i}
                style={{ left: x, top: y }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <div className="rounded-md bg-black/90 border border-[#D4AF37]/40 px-2 py-1 text-[10px] sm:text-xs text-[#D4AF37] whitespace-nowrap shadow-[0_0_20px_#D4AF37]">
                  {label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
