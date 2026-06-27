import React from 'react'
import Link from 'next/link'
import Container from '../../ui/Container'
import { navigation } from '../../../data/navigation'
import { contact } from '../../../data/contact'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--foreground)] py-12 text-[var(--primary-foreground)]">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <p className="text-lg font-semibold tracking-tight">Run Systems</p>
            <p className="mt-2 text-sm text-[var(--muted-soft)]">
              Gestión de reservas inteligente.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-2 sm:flex-row sm:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--border)] transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="text-sm text-[var(--border)]">
            <a
              href={contact.ctaHref}
              className="transition-colors hover:text-white"
            >
              {contact.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-[var(--muted-soft)]">
          © {year} Run Systems. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  )
}
