import { Link2, KeyboardIcon } from 'lucide-react'

const features = [
    {
        icon: Link2,
        title: 'Import from any URL',
        desc: 'Instagram, TikTok, YouTube — paste a link or share directly. Zero friction.',
        tag: 'Extract',
    },
    {
        icon: KeyboardIcon,
        title: 'Type it',
        desc: 'Write it. It turns into a beautiful, organized recipe automatically.',
        tag: 'Type',
    },
]

export default function Features() {
    return (
        <section id="features" className="py-16 md:py-24 px-4 sm:px-6 bg-brand-cream">
            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <div className="mb-10 md:mb-16 reveal">
                    <span className="pill bg-brand-orange/10 text-brand-orange mb-4">Any recipe, any source</span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-brand-dark mt-4 mb-4">
                        One tap. That's all it takes.
                    </h2>
                    <p className="text-brand-muted text-base md:text-lg max-w-xl mx-auto">
                        Paste a link, snap a photo, or just describe your craving. Receta handles the rest — beautifully.
                    </p>
                </div>

                {/* Cards grid — centered and balanced for 2 items */}
                <div className="flex justify-center mb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl text-left">
                        {features.map(({ icon: Icon, title, desc, tag }, i) => (
                            <div
                                key={title}
                                className="feature-card reveal flex flex-col gap-4"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <span className="pill bg-brand-orange/10 text-brand-orange self-start">{tag}</span>
                                <div className="w-11 h-11 rounded-2xl bg-brand-orange/10 flex items-center justify-center">
                                    <Icon size={20} className="text-brand-orange" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-brand-dark text-base md:text-lg mb-2">{title}</h3>
                                    <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Language badge */}
                <div className="mt-8 md:mt-12 reveal bg-white rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 shadow-sm mx-auto max-w-3xl text-left">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-2xl flex-shrink-0">
                        🌍
                    </div>
                    <div>
                        <h3 className="font-display font-bold text-xl md:text-2xl text-brand-dark mb-1">No language barriers.</h3>
                        <p className="text-brand-muted text-sm md:text-base">
                            Every recipe in the language you choose. Set it once — Receta handles the rest.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
