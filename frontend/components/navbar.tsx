'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-forest-green to-forest-green-light flex items-center justify-center">
            <span className="text-sm font-bold text-cream">AV</span>
          </div>
          <span className="text-lg font-heading font-semibold text-forest-green">
            Agri-Vision
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm transition-colors ${
              pathname === '/'
                ? 'text-forest-green font-semibold'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Home
          </Link>
          <Link
            href="/diagnose"
            className={`text-sm transition-colors ${
              pathname === '/diagnose'
                ? 'text-forest-green font-semibold'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Diagnose
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
