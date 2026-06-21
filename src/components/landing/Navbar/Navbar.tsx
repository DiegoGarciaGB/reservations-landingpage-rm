import React from 'react'
import Link from 'next/link'
import Container from '../../ui/Container'
import { navigation } from '../../../data/navigation'

export default function Navbar() {
  return (
    <header className="border-b border-[var(--border)]">
      <Container>
        <nav className="nav-breathing flex items-center justify-between py-6" aria-label="Navegacion principal">
          <Link href="/" className="subheading">
            Run Systems
          </Link>

          <div className="flex items-center gap-8 text-sm font-medium text-[var(--muted)]">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  )
}
