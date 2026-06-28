import React from 'react'
import Link from 'next/link'
import Container from '../../ui/Container'
import { navigation } from '../../../data/navigation'
import { links } from '../../../data/links'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--foreground)] text-[var(--primary-foreground)]">
      <Container>
        {/* Main Footer Content */}
        <div className="py-14 grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr] sm:gap-8">
          {/* Brand Column */}
          <div>
            <p className="text-lg font-semibold tracking-tight text-[var(--muted)]">Run Systems</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/40">
              Gestión de reservas inteligente con automatización por WhatsApp para tu negocio.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
              Navegación
            </p>
            <nav className="flex flex-col gap-2.5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/50 transition-colors hover:text-white w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Legal Column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
              Contacto
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={`mailto:${links.email}`}
                className="text-sm text-white/50 transition-colors hover:text-white w-fit"
              >
                {links.email}
              </a>
              <Link
                href="/terms"
                className="text-sm text-white/50 transition-colors hover:text-white w-fit"
              >
                Términos y Condiciones
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-white/50 transition-colors hover:text-white w-fit"
              >
                Aviso de Privacidad
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] py-6 text-xs text-white/30">
          © {year} Run Systems. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  )
}
