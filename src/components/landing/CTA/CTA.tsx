import React from 'react'
import Link from 'next/link'
import Container from '../../ui/Container'
import Section from '../../ui/Section'
import { links } from '../../../data/links'

export default function CTA() {
  return (
    <Section
      id="cta"
      className="!py-16 sm:!py-20 bg-[var(--foreground)] text-[var(--primary-foreground)]"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading">
            ¿Listo para dejar de perder clientes por no contestar a tiempo?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted-soft)]">
            Hablemos sobre cómo Run Systems puede automatizar la operación de
            tu negocio. Agenda una demo y te mostramos el sistema en acción.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href={links.getWhatsAppDemoLink()} className="btn-inverted">
              Contactar a Run Systems
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
