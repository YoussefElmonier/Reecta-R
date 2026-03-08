export default function PainPoints() {
    const problems = [
        "Where did I save that pasta recipe?",
        "No idea what to cook tonight.",
        "What were the ingredients again?",
        "I just want something easy to make.",
        "That TikTok recipe vanished.",
    ]

    return (
        <section className="py-16 md:py-20 px-4 sm:px-6 bg-brand-dark overflow-hidden">
            <div className="max-w-6xl mx-auto text-center reveal">
                {/* Scrolling ticker */}
                <div className="mb-10 md:mb-14 overflow-hidden relative">
                    <div className="flex gap-4 sm:gap-6 animate-[scroll_20s_linear_infinite] w-max">
                        {[...problems, ...problems].map((p, i) => (
                            <span
                                key={i}
                                className="whitespace-nowrap text-white/30 text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 border border-white/10 rounded-full flex-shrink-0"
                            >
                                {p}
                            </span>
                        ))}
                    </div>
                </div>

                <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
                    Too many questions.
                    <br />
                    <span className="text-brand-orange">Not enough cooking.</span>
                </h2>
                <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto">
                    Receta fixes the chaos — every recipe, perfectly organized.
                </p>
            </div>

            <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    )
}
