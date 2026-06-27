'use client'

import React, { useEffect, useRef, useState } from 'react'
import Container from '../../ui/Container'
import Section from '../../ui/Section'

const steps = [
  {
    number: '01',
    title: 'Tu cliente escribe por WhatsApp',
    description:
      'El bot responde al instante, sin importar la hora. Saluda, muestra los servicios disponibles y guía la conversación.',
  },
  {
    number: '02',
    title: 'Agenda la cita automáticamente',
    description:
      'El sistema busca horarios disponibles, evita conflictos y doble-reservas, y confirma la cita sin intervención humana.',
  },
  {
    number: '03',
    title: 'Tú controlas todo desde el dashboard',
    description:
      'Ve tu agenda en tiempo real, gestiona clientes, registra cobros y recibe recordatorios automáticos antes de cada cita.',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Section id="how-it-works">
      <Container>
        <div ref={sectionRef}>
          <div className="max-w-2xl">
            <h2 className="heading">Cómo funciona</h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              De mensaje de WhatsApp a cita confirmada en menos de 2 minutos,
              sin que tú tengas que hacer nada.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <span className="text-5xl font-bold leading-none tracking-tighter text-[var(--muted)]">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 leading-7 text-[var(--muted)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
