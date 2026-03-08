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
                    <CTABtn icon="apple" label="Download on the" store="App Store" href="#" />
                    <CTABtn icon="google" label="Get it on" store="Google Play" href="#" />
                </div>

                <p className="text-white/20 text-xs mt-6 md:mt-8">
                    Available on iOS 15+ and Android 8+
                </p>
            </div>
        </section>
    )
}

function CTABtn({ icon, label, store, href }) {
    return (
        <a
            href={href}
            className="flex items-center gap-3 bg-white/10 hover:bg-brand-orange text-white px-5 md:px-6 py-3.5 md:py-4 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-orange/20 border border-white/10 hover:border-brand-orange w-full sm:w-auto justify-center"
        >
            {icon === 'apple' ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
            ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.35.19.74.24 1.12.12l11.37-6.57-2.38-2.38-10.11 8.83zM.56 1.24C.21 1.62 0 2.17 0 2.9v18.2c0 .73.21 1.28.57 1.65l.09.09 10.2-10.2v-.24L.65 1.15l-.09.09zM20.46 9.94l-2.43-1.41-2.71 2.71 2.71 2.71 2.44-1.41c.7-.4.7-1.19-.01-1.6zM4.3.12L15.67 6.69l-2.38 2.38L3.18.24C3.57.11 3.96.17 4.3.12z" />
                </svg>
            )}
            <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] text-white/50">{label}</span>
                <span className="text-sm font-bold">{store}</span>
            </div>
        </a>
    )
}
