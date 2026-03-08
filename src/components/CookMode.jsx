import { Highlighter, Type, Hand } from 'lucide-react'
import PhoneMockup from './PhoneMockup'

const features = [
    {
        icon: Highlighter,
        title: 'Smart highlights',
        desc: 'Ingredients and measurements pop in orange so you never miss a detail while cooking.',
    },
    {
        icon: Type,
        title: 'Auto-sizing text',
        desc: 'Text scales to fill the screen. Long steps, short steps — always perfectly readable.',
    },
    {
        icon: Hand,
        title: 'Tap to advance',
        desc: 'Tap anywhere on screen to move to the next step — hands-free, stress-free cooking.',
    },
]

export default function CookMode() {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-brand-cream">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                {/* Phone — below on mobile, left on desktop */}
                <div className="reveal flex-1 flex justify-center order-2 lg:order-1">
                    <PhoneMockup screen="cook" />
                </div>

                {/* Text */}
                <div className="flex-1 reveal order-1 lg:order-2">
                    <span className="pill bg-brand-orange/10 text-brand-orange mb-4">Cook Mode</span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-brand-dark mt-4 mb-4 leading-tight">
                        Time to cook!
                    </h2>
                    <p className="text-brand-muted text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
                        Step-by-step guidance with highlighted ingredients and auto-resizable text. Just tap to advance — hands-free, stress-free.
                    </p>

                    <div className="flex flex-col gap-5 md:gap-6 mb-8 md:mb-10">
                        {features.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Icon size={18} className="text-brand-orange" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-brand-dark mb-1">{title}</h3>
                                    <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mini inline demo */}
                    <div className="bg-brand-dark rounded-2xl p-4 sm:p-5 text-sm text-white/80 leading-relaxed">
                        Add{' '}
                        <span className="bg-brand-orange text-white px-2 py-0.5 rounded-lg font-semibold text-xs mx-0.5">
                            2 tbsp olive oil
                        </span>{' '}
                        to a large skillet over medium-high heat. Add{' '}
                        <span className="bg-brand-orange text-white px-2 py-0.5 rounded-lg font-semibold text-xs mx-0.5">
                            4 garlic cloves
                        </span>
                        , sliced thin. Cook 1–2 minutes until golden.
                    </div>
                </div>
            </div>
        </section>
    )
}
