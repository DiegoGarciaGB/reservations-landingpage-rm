import React from 'react'
import Container from '../../ui/Container'
import Section from '../../ui/Section'
import { contact } from '../../../data/contact'

export default function CTA() {
  return (
    <Section id="cta">
      <Container>
        <div className="surface p-8 sm:p-10">
          <h2 className="heading max-w-2xl">
            Listo para organizar tus reservas?
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
            Hablemos sobre como Run Systems puede apoyar la operacion de tu negocio.
          </p>
          <a className="mt-7 inline-block btn-primary" href={contact.ctaHref}>
            {contact.ctaLabel}
          </a>
        </div>
      </Container>
    </Section>
  )
}
