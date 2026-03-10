import StoreBadgeButton from './StoreBadgeButton'

export default function CTA() {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-brand-dark relative overflow-hidden">
            {/* Glow blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] h-[200px] md:h-[300px] bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center reveal relative z-10">
                <div className="text-5xl md:text-6xl mb-5 md:mb-6">🍽️</div>

                <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3 leading-tight tracking-tight">
                    <span className="text-gradient">No more questions.</span>
                </h2>
                <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-8 sm:mb-10 leading-tight tracking-tight">
                    <span className="text-gradient">Just cooking.</span>
                </h2>

                <p className="text-white/50 text-base md:text-lg mb-8 md:mb-10">
                    Free to download. Your recipes stay with you forever.
                </p>

                {/* App store buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <StoreBadgeButton
                        icon="apple"
                        label="Download on the"
                        store="App Store"
                        href="#"
                        variant="glass"
                    />
                    <StoreBadgeButton
                        icon="google"
                        label="Get it on"
                        store="Google Play"
                        href="#"
                        variant="glass"
                    />
                </div>

                <p className="text-white/20 text-xs mt-6 md:mt-8">
                    Available on iOS 15+ and Android 8+
                </p>
            </div>
        </section>
    )
}
