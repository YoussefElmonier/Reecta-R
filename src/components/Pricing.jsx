import { Check } from 'lucide-react'

const perks = [
    'Extract from any URL',
    'Organize into collections',
    'Auto-generated grocery lists by category',
    'Step-by-step cook mode with smart highlights',
    'No language barriers — any language',
]

export default function Pricing() {
    return (
        <section id="pricing" className="py-16 md:py-24 px-4 sm:px-6 bg-brand-cream">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10 md:mb-16 reveal">
                    <span className="pill bg-brand-orange/10 text-brand-orange mb-4">Pricing</span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-brand-dark mt-4 mb-4">
                        Unlock your full kitchen.
                    </h2>
                    <p className="text-brand-muted text-base md:text-lg max-w-md mx-auto">
                        Everything you need to cook smarter and save time, every single day.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch max-w-2xl mx-auto">
                    {/* Monthly */}
                    <PricingCard
                        title="Monthly"
                        price="$5.99"
                        period="/month"
                        trial="1 week free trial"
                        featured={false}
                    />

                    {/* Annual */}
                    <PricingCard
                        title="Annual"
                        price="$34.99"
                        period="/year"
                        trial="1 week free trial"
                        featured={true}
                        badge="Best value — save 58%"
                    />
                </div>

                {/* Perks list */}
                <div className="reveal mt-10 md:mt-16 bg-white rounded-3xl p-6 md:p-8 shadow-sm max-w-2xl mx-auto">
                    <h3 className="font-display font-bold text-xl md:text-2xl text-brand-dark mb-5 md:mb-6 text-center">
                        Everything included
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-8">
                        {perks.map((perk) => (
                            <div key={perk} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                                    <Check size={12} className="text-brand-orange" />
                                </div>
                                <span className="text-brand-dark text-sm">{perk}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-brand-muted/60 text-xs mt-5 md:mt-6">
                        Cancel anytime. No commitment.
                    </p>
                </div>
            </div>
        </section>
    )
}

function PricingCard({ title, price, period, trial, featured, badge }) {
    return (
        <div
            className={`reveal flex-1 rounded-3xl p-6 md:p-8 flex flex-col gap-5 md:gap-6 transition-all duration-300 ${featured
                ? 'bg-brand-dark text-white shadow-2xl sm:scale-[1.02]'
                : 'bg-white text-brand-dark shadow-sm'
                }`}
        >
            {badge && (
                <span className="pill bg-brand-orange/20 text-brand-orange self-start text-[10px]">{badge}</span>
            )}

            <div>
                <div className="text-sm font-semibold mb-2 opacity-60 tracking-wide">{title}</div>
                <div className="flex items-baseline gap-1">
                    <span className="font-display font-bold text-4xl md:text-5xl">$</span>
                    <span className="font-display font-bold text-4xl md:text-5xl tracking-tight">{price.substring(1)}</span>
                    <span className="text-sm opacity-50 ml-2">{period}</span>
                </div>
                <div className="text-sm mt-2 text-brand-orange font-medium">{trial}</div>
            </div>

            <a
                href="#"
                className={`w-full py-3.5 md:py-4 rounded-2xl font-semibold text-center transition-all duration-200 hover:-translate-y-0.5 text-sm md:text-base ${featured
                    ? 'bg-brand-orange text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-brand-orange/30'
                    : 'bg-brand-cream text-brand-dark hover:bg-brand-orange hover:text-white'
                    }`}
            >
                Start free trial
            </a>

            <p className="text-xs opacity-40 text-center">Free to download. Cancel anytime.</p>
        </div>
    )
}
