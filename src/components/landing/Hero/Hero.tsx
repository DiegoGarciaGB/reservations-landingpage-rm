import React from 'react'
import Container from '../../ui/Container'
import Section from '../../ui/Section'

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="caption text-[var(--muted)]">Run Systems</p>
          <h1 className="display">
            Reservas simples para negocios que quieren avanzar
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Run Systems ayuda a organizar citas, servicios y clientes desde una landing clara y conectada con tu producto.
          </p>
        </div>
      </Container>
    </Section>
  )
}
