import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import appIcon from '../assets/Icon-iOS-Default-1024x1024@1x.png'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-brand-cream/90 backdrop-blur-md shadow-sm'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <img src={appIcon} alt="Receta Logo" className="w-8 h-8 rounded-lg object-cover" />
                    <span className="font-display font-bold text-xl text-brand-dark tracking-tight">Receta</span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8">
                    {['Features', 'How it works', 'Pricing'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm font-medium text-brand-muted hover:text-brand-orange transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="#"
                        className="text-sm font-semibold text-brand-orange hover:text-brand-dark transition-colors"
                    >
                        App Store
                    </a>
                    <a
                        href="#"
                        className="btn-primary text-sm !py-2.5 !px-5 !rounded-xl"
                    >
                        Get it free →
                    </a>
                </div>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden text-brand-dark"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-brand-cream border-t border-black/5 px-6 py-6 flex flex-col gap-5">
                    {['Features', 'How it works', 'Pricing'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-base font-medium text-brand-muted hover:text-brand-orange transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <a href="#" className="btn-primary text-center !justify-center">
                        Get it free →
                    </a>
                </div>
            )}
        </nav>
    )
}
