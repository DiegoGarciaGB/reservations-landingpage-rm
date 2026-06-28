'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Container from '../../ui/Container'
import { navigation } from '../../../data/navigation'
import { links } from '../../../data/links'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-[var(--foreground)] text-[var(--primary-foreground)] border-b ${
        scrolled ? 'border-white/10 shadow-lg shadow-black/5' : 'border-white/[0.06]'
      }`}
    >
      <Container>
        <nav
          className="flex items-center justify-between py-3.5"
          aria-label="Navegación principal"
        >
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Run Systems
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-10 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={links.getWhatsAppDemoLink()}
              className="btn-nav-primary"
            >
              Empezar
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-white transition-colors md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="animate-fade-in fixed inset-0 top-[57px] z-40 bg-[var(--foreground)] md:hidden">
          <Container>
            <nav className="flex flex-col gap-1 pt-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-4 py-3 text-lg font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={links.getWhatsAppDemoLink()}
                className="btn-nav-primary mt-4 text-center"
                onClick={() => setMobileOpen(false)}
              >
                Empezar
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
