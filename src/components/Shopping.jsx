import { ShoppingCart, LayoutGrid, CheckCircle2 } from 'lucide-react'
import PhoneMockup from './PhoneMockup'

const features = [
    {
        icon: ShoppingCart,
        title: 'Auto-generated lists',
        desc: 'Pick your meals and the shopping list builds itself — no typing, no thinking.',
    },
    {
        icon: LayoutGrid,
        title: 'Grouped by category',
        desc: 'Produce, dairy, pantry — everything sorted so you shop aisle by aisle.',
    },
    {
        icon: CheckCircle2,
        title: 'Check off as you go',
        desc: 'Tap items in the store and they disappear. Simple, satisfying, done.',
    },
]

export default function Shopping() {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-brand-dark relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-brand-orange/6 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
                {/* Phone */}
                <div className="reveal flex-1 flex justify-center">
                    <PhoneMockup screen="shop" />
                </div>

                {/* Text */}
                <div className="flex-1 reveal">
                    <span className="pill bg-brand-orange/20 text-brand-orange mb-4">Shopping</span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-4 leading-tight">
                        Smart shopping,
                        <br />
                        zero stress.
                    </h2>
                    <p className="text-white/50 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
                        Pick your recipes for the week and the grocery list builds itself automatically. Ingredients are grouped by category — just check them off as you shop.
                    </p>

                    <div className="flex flex-col gap-5 md:gap-6">
                        {features.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Icon size={18} className="text-brand-orange" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">{title}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
