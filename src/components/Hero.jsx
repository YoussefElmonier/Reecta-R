import { ArrowDown } from 'lucide-react'
import PhoneMockup from './PhoneMockup'
import StoreBadgeButton from './StoreBadgeButton'

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
                        <StoreBadgeButton icon="apple" label="Download on the" store="App Store" href="#" />
                        <StoreBadgeButton icon="google" label="Get it on" store="Google Play" href="#" />
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
