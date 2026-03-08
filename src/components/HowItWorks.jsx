const steps = [
    {
        number: '01',
        title: 'Extract',
        desc: 'Paste a URL, share from any app, snap a photo, describe a dish, or type it in. Any way works.',
        emoji: '🔗',
    },
    {
        number: '02',
        title: 'Save',
        desc: 'Receta cleans up the recipe and saves it to your personal digital cookbook — beautifully formatted.',
        emoji: '📚',
    },
    {
        number: '03',
        title: 'Shop',
        desc: 'Your grocery list builds itself from your meals — grouped by category, zero duplicates.',
        emoji: '🛒',
    },
    {
        number: '04',
        title: 'Cook',
        desc: 'Step-by-step mode highlights every ingredient in orange so you never miss a detail.',
        emoji: '👨‍🍳',
    },
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6 bg-brand-dark relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10 md:mb-16 reveal">
                    <span className="pill bg-brand-orange/20 text-brand-orange mb-4">How it works</span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-4">
                        Four steps to cooking bliss.
                    </h2>
                    <p className="text-white/50 text-base md:text-lg max-w-md mx-auto">
                        From recipe chaos to calm kitchen in under a minute.
                    </p>
                </div>

                {/* Mobile: simple vertical stack */}
                <div className="flex flex-col gap-4 lg:hidden">
                    {steps.map((step, i) => (
                        <div
                            key={step.number}
                            className="reveal flex items-start gap-4 bg-white/5 border border-white/[0.08] rounded-2xl p-5"
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className="flex flex-col items-center gap-2 flex-shrink-0 pt-1">
                                <span className="text-2xl">{step.emoji}</span>
                                {i < steps.length - 1 && (
                                    <div className="w-0.5 h-8 bg-brand-orange/20 rounded-full mt-1" />
                                )}
                            </div>
                            <div>
                                <div className="text-brand-orange text-[10px] font-bold tracking-widest uppercase mb-0.5">{step.number}</div>
                                <h3 className="font-display font-bold text-xl text-white mb-1">{step.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop: alternating timeline */}
                <div className="hidden lg:block relative">
                    {/* Connecting line */}
                    <div className="absolute left-[calc(50%-1px)] top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-orange/0 via-brand-orange/30 to-brand-orange/0" />

                    <div className="flex flex-col gap-6">
                        {steps.map((step, i) => (
                            <div
                                key={step.number}
                                className={`reveal flex items-center gap-6 ${i % 2 === 1 ? 'flex-row-reverse' : 'flex-row'}`}
                                style={{ transitionDelay: `${i * 0.12}s` }}
                            >
                                {/* Card */}
                                <div className="flex-1 bg-white/5 border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.08] transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="text-3xl">{step.emoji}</div>
                                        <div>
                                            <div className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-1">{step.number}</div>
                                            <h3 className="font-display font-bold text-2xl text-white mb-2">{step.title}</h3>
                                            <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Center dot */}
                                <div className="w-4 h-4 rounded-full bg-brand-orange flex-shrink-0 shadow-[0_0_12px_rgba(217,94,58,0.6)]" />

                                {/* Empty spacer */}
                                <div className="flex-1" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
