import React from 'react'
import Container from '../../ui/Container'
import { contact } from '../../../data/contact'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium">Run Systems</p>
          <a href={contact.ctaHref}>
            {contact.email}
          </a>
        </div>
      </Container>
    </footer>
  )
}
