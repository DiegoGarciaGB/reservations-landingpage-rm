import React from 'react'
import Link from 'next/link'
import Container from '../../ui/Container'
import HeroMockup from './HeroMockup'
import { links } from '../../../data/links'

export default function Hero() {
  return (
    <section className="pb-16 pt-4 sm:pb-20 sm:pt-6">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[42%_58%] lg:items-center">
          {/* Left Column: Text */}
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="display mt-6">
              WhatsApp agenda.{' '}
              <span className="text-[var(--muted)]">
                Tu dashboard organiza.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              Reservas automáticas por WhatsApp y agenda inteligente para simplificar tu negocio.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={links.getWhatsAppDemoLink()} className="btn-primary">
                Agenda una demo
              </Link>
              <Link href="#how-it-works" className="btn-ghost">
                Ver cómo funciona
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div
            className="animate-fade-in-up relative mx-auto w-full max-w-lg lg:max-w-none"
            style={{ animationDelay: '150ms' }}
          >
            <HeroMockup />
          </div>
        </div>
      </Container>
    </section>
  )
}
