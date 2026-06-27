import React from 'react'
import Link from 'next/link'
import Container from '../../ui/Container'

export default function Hero() {
  return (
    <section className="pb-16 pt-12 sm:pb-20 sm:pt-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Text */}
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="display mt-6">
              Tus clientes reservan por WhatsApp.{' '}
              <span className="text-[var(--muted)]">
                Tú solo ves tu agenda crecer.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              Run Systems automatiza las reservas de tu negocio con un bot de
              WhatsApp que atiende 24/7 y un dashboard donde controlas todo:
              citas, clientes, cobros y más.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#cta" className="btn-primary">
                Agenda una demo
              </Link>
              <Link href="#how-it-works" className="btn-ghost">
                Ver cómo funciona
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Placeholder */}
          <div
            className="animate-fade-in-up relative mx-auto w-full max-w-md lg:max-w-none"
            style={{ animationDelay: '150ms' }}
          >
            {/* Blank Canvas Placeholder for future mockup/screenshot */}
            <div className="aspect-[4/5] w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm sm:aspect-square lg:aspect-[4/5]">
              <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 rounded-full bg-[var(--background)] p-4 text-[var(--muted-soft)]">
                  <svg
                    xmlns="http://www.w3.org/Dom/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-[var(--muted)]">
                  Espacio reservado
                </p>
                <p className="mt-1 text-xs text-[var(--muted-soft)]">
                  Para futuro mockup o captura de pantalla
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
