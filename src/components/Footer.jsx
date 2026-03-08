export default function Footer() {
    return (
        <footer className="bg-brand-cream border-t border-black/5 py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-brand-orange flex items-center justify-center">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <path d="M12 3C7.5 3 4 5.5 4 9c0 2.5 1.5 4.5 3.5 5.5V18h9v-3.5C18.5 13.5 20 11.5 20 9c0-3.5-3.5-6-8-6z" fill="white" />
                            <rect x="8" y="18" width="8" height="2" rx="1" fill="white" />
                            <rect x="9" y="21" width="6" height="1.5" rx="0.75" fill="white" />
                        </svg>
                    </span>
                    <span className="font-display font-bold text-lg text-brand-dark">Receta</span>
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-brand-muted">
                    <a href="#" className="hover:text-brand-orange transition-colors">Support</a>
                    <a href="mailto:hello@receta.app" className="hover:text-brand-orange transition-colors">Contact</a>
                    <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-brand-orange transition-colors">Terms &amp; Conditions</a>
                </div>

                {/* Copyright */}
                <p className="text-brand-muted/50 text-sm">
                    © {new Date().getFullYear()} Receta. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
