import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

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
                    <span className="w-8 h-8 rounded-xl bg-brand-orange flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3C7.5 3 4 5.5 4 9c0 2.5 1.5 4.5 3.5 5.5V18h9v-3.5C18.5 13.5 20 11.5 20 9c0-3.5-3.5-6-8-6z" fill="white" />
                            <rect x="8" y="18" width="8" height="2" rx="1" fill="white" />
                            <rect x="9" y="21" width="6" height="1.5" rx="0.75" fill="white" />
                        </svg>
                    </span>
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
