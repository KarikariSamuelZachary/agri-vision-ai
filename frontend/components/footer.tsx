export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-forest-green to-forest-green-light flex items-center justify-center">
                <span className="text-sm font-bold text-cream">AV</span>
              </div>
              <span className="text-lg font-heading font-semibold text-forest-green">
                Agri-Vision
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered plant disease detection for farmers worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 text-foreground">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/diagnose" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Diagnose
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 text-foreground">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 text-foreground">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center" suppressHydrationWarning>
            © {currentYear} Agri-Vision AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
