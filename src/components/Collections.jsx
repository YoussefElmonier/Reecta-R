import PhoneMockup from './PhoneMockup'

const collections = [
    { name: 'Breakfast', count: 12, emoji: '☕' },
    { name: 'Pasta & Italian', count: 24, emoji: '🍝' },
    { name: 'Salads', count: 8, emoji: '🥗' },
    { name: 'Desserts', count: 15, emoji: '🍰' },
    { name: 'Asian Cuisine', count: 19, emoji: '🍜' },
    { name: 'Quick & Easy', count: 32, emoji: '⏱️' },
]

export default function Collections() {
    return (
        <section id="collections" className="py-16 md:py-24 px-4 sm:px-6 bg-brand-cream">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 md:mb-16 reveal">
                    <span className="pill bg-brand-orange/10 text-brand-orange mb-4">Collections</span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-brand-dark mt-4 mb-4 leading-tight">
                        Organize your kitchen
                        <br />
                        your <span className="text-gradient">way.</span>
                    </h2>
                    <p className="text-brand-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                        Create custom collections and categorize recipes automatically. Keep your favorites exactly where they belong.
                    </p>
                </div>

                {/* Collections Grid */}
                <div className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                    {collections.map((col) => (
                        <div
                            key={col.name}
                            className="bg-white rounded-3xl p-5 shadow-sm border border-transparent hover:border-brand-orange/20 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center gap-3"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-3xl">
                                {col.emoji}
                            </div>
                            <div>
                                <h3 className="font-semibold text-brand-dark text-sm md:text-base leading-tight mb-1">{col.name}</h3>
                                <p className="text-[10px] md:text-xs text-brand-muted font-medium uppercase tracking-wider">{col.count} recipes</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile visualization — simple list */}
                <div className="hidden mt-8 flex flex-col gap-3">
                    {/* (This could be used for a different mobile view if needed) */}
                </div>

                {/* Floating phone mockup */}
                <div className="reveal mt-16 md:mt-24 flex justify-center">
                    <div className="relative">
                        {/* Decorative background for the phone */}
                        <div className="absolute -inset-10 bg-brand-orange/5 blur-3xl rounded-full" />
                        <PhoneMockup screen="organize" className="relative z-10" />
                    </div>
                </div>
            </div>
        </section>
    )
}
