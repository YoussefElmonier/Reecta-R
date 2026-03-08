import img0327 from '../assets/IMG_0327.webp'
import img0353 from '../assets/IMG_0353.webp'
import img0355 from '../assets/IMG_0355.webp'
import img0359 from '../assets/IMG_0359.webp'
import img6802 from '../assets/IMG_6802.webp'
import img6805 from '../assets/IMG_6805.webp'

// Reusable phone mockup component with different "screens" (placeholders)
export default function PhoneMockup({ screen = 'hero', className = '' }) {
    const screens = {
        hero: (
            <img src={img0353} alt="Receta App Hero" className="w-full h-full object-contain p-1 animate-fade-in" loading="eager" />
        ),
        organize: (
            <img src={img0355} alt="Organize Recipes" className="w-full h-full object-contain p-1 animate-fade-in" loading="lazy" />
        ),
        plan: (
            <img src={img0359} alt="Meal Planning" className="w-full h-full object-contain p-1 animate-fade-in" loading="lazy" />
        ),
        shop: (
            <img src={img6802} alt="Grocery Lists" className="w-full h-full object-contain p-1 animate-fade-in" loading="lazy" />
        ),
        cook: (
            <img src={img6805} alt="Cook Mode" className="w-full h-full object-contain p-1 animate-fade-in" loading="lazy" />
        ),
    }

    return (
        <div className={`relative ${className}`}>
            {/* Phone frame — scales fluidly: max 260px wide but shrinks on small screens */}
            <div className="phone-glow relative w-[min(260px,80vw)] bg-brand-dark rounded-[44px] p-3 shadow-2xl mx-auto"
                style={{ aspectRatio: '9/18' }}
            >
                {/* Inner screen */}
                <div className="w-full h-full bg-white rounded-[36px] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-brand-dark rounded-full z-10" />
                    <div className="w-full h-full pt-7">
                        {screens[screen] || screens.hero}
                    </div>
                </div>
            </div>
        </div>
    )
}

function RecipeCard({ delay }) {
    const emojis = ['🍝', '🥗', '🍰']
    const emoji = emojis[delay === 0 ? 0 : delay === 0.1 ? 1 : 2]
    return (
        <div
            className="w-full bg-white rounded-2xl flex items-center gap-3 p-3 shadow-sm"
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-xl flex-shrink-0">
                {emoji}
            </div>
            <div className="flex-1 min-w-0">
                <div className="h-2.5 bg-brand-muted/20 rounded-full w-3/4 mb-2" />
                <div className="h-2 bg-brand-muted/10 rounded-full w-1/2" />
            </div>
            <div className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                <span className="text-brand-orange text-xs">→</span>
            </div>
        </div>
    )
}
