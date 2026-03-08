import { ArrowDown } from 'lucide-react'
import PhoneMockup from './PhoneMockup'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-20 -left-40 w-[400px] h-[400px] rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 -right-40 w-[300px] h-[300px] rounded-full bg-brand-orange/8 blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
                {/* Left text */}
                <div className="flex-1 text-center lg:text-left">
                    {/* Pill badge */}
                    <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold mb-5 animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                        Now on App Store &amp; Google Play
                    </div>

                    <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.08] tracking-tight mb-5">
                        <span className="text-gradient">Your personal</span>
                        <br />
                        <span className="text-gradient">recipe extractor.</span>
                    </h1>

                    <p className="text-brand-muted text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-7 leading-relaxed">
                        Extract recipes from any source — Instagram, TikTok, photos, URLs, or your own imagination. Save, organize, and cook without the chaos.
                    </p>

                    {/* App store btns */}
                    <div className="flex flex-col xs:flex-row gap-3 justify-center lg:justify-start mb-8">
                        <AppStoreBtn icon="apple" label="Download on the" store="App Store" href="#" />
                        <AppStoreBtn icon="google" label="Get it on" store="Google Play" href="#" />
                    </div>

                    {/* Social proof */}
                    <div className="flex items-center gap-3 justify-center lg:justify-start">
                        <div className="flex -space-x-2">
                            {[
                                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80',
                                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80',
                                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80',
                                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64&q=80',
                            ].map((url, i) => (
                                <img
                                    key={i}
                                    src={url}
                                    alt="User"
                                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-brand-cream object-cover"
                                    style={{ zIndex: 4 - i }}
                                    loading="lazy"
                                />
                            ))}
                        </div>
                        <div className="text-xs sm:text-sm text-brand-muted">
                            <span className="text-brand-dark font-semibold">10,000+</span> recipes saved this week
                        </div>
                    </div>
                </div>

                {/* Right phone mockup — hidden on very small phones, shown from sm up */}
                <div className="flex-1 flex justify-center w-full mt-4 lg:mt-0">
                    <PhoneMockup screen="hero" />
                </div>
            </div>

            {/* Scroll cue */}
            <a
                href="#features"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-brand-muted/60 hover:text-brand-orange transition-colors text-xs font-medium"
            >
                <ArrowDown size={18} className="animate-bounce" />
            </a>
        </section>
    )
}

function AppStoreBtn({ icon, label, store, href }) {
    return (
        <a
            href={href}
            className="flex items-center gap-3 bg-brand-dark text-white px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl hover:bg-brand-orange transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-orange/25 w-full xs:w-auto justify-center"
        >
            {icon === 'apple' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
            ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.35.19.74.24 1.12.12l11.37-6.57-2.38-2.38-10.11 8.83zM.56 1.24C.21 1.62 0 2.17 0 2.9v18.2c0 .73.21 1.28.57 1.65l.09.09 10.2-10.2v-.24L.65 1.15l-.09.09zM20.46 9.94l-2.43-1.41-2.71 2.71 2.71 2.71 2.44-1.41c.7-.4.7-1.19-.01-1.6zM4.3.12L15.67 6.69l-2.38 2.38L3.18.24C3.57.11 3.96.17 4.3.12z" />
                </svg>
            )}
            <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] text-white/60 font-medium">{label}</span>
                <span className="text-sm font-bold">{store}</span>
            </div>
        </a>
    )
}
