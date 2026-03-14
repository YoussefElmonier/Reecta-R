import appIcon from '../assets/Icon-iOS-Default-1024x1024@1x.png'

export default function Footer() {
    return (
        <footer className="bg-brand-cream border-t border-black/5 py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={appIcon} alt="Receta Logo" className="w-7 h-7 rounded-md object-cover" />
                    <span className="font-display font-bold text-lg text-brand-dark">Receta</span>
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-brand-muted">
                    <a href="#" className="hover:text-brand-orange transition-colors">Support</a>
                    <a href="mailto:hello@receta.app" className="hover:text-brand-orange transition-colors">Contact</a>
                    <a href="/privacy-policy" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
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
