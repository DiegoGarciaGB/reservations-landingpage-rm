import React from 'react'
import Link from 'next/link'
import Container from '../../components/ui/Container'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased pb-20">
      {/* Mini Navbar */}
      <header className="border-b border-[var(--border)] bg-[var(--surface)] py-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-bold tracking-tight text-[var(--foreground)] hover:opacity-80 transition-opacity">
              Run Systems
            </Link>
            <Link href="/" className="text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-[var(--foreground)] transition-colors">
              Volver al inicio
            </Link>
          </div>
        </Container>
      </header>

      {/* Content */}
      <main className="mt-12 sm:mt-16">
        <Container>
          <article className="mx-auto max-w-3xl prose">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 text-[var(--foreground)]">Términos y Condiciones</h1>
            <p className="text-sm text-[var(--muted)] mb-8">Última actualización: 28 de Junio de 2026</p>

            <div className="space-y-8 text-[var(--muted)] leading-relaxed text-sm sm:text-base">
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">1. Aceptación de los Términos</h2>
                <p>
                  Al acceder y utilizar los servicios de Run Systems ("el Servicio"), usted acepta cumplir y estar sujeto a los siguientes Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestro Servicio.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">2. Descripción del Servicio</h2>
                <p>
                  Run Systems proporciona una plataforma SaaS de gestión de reservas automatizada mediante integraciones de bots conversacionales de WhatsApp. Este servicio permite a los usuarios configurar calendarios, profesionales y servicios para la atención automática de citas.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">3. Cuentas de Usuario y Seguridad</h2>
                <p>
                  Para acceder a ciertas funciones del dashboard, es posible que deba registrarse y crear una cuenta. Usted es responsable de mantener la confidencialidad de sus credenciales de acceso y de toda la actividad que ocurra bajo su cuenta.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">4. Uso Aceptable y API de WhatsApp</h2>
                <p>
                  El uso de nuestro bot conversacional está sujeto a las políticas de uso comercial de Meta/WhatsApp. Run Systems no se hace responsable por suspensiones o bloqueos de números de teléfono por parte de Meta derivados del uso inapropiado del canal o envío de SPAM por parte del usuario.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">5. Planes y Facturación</h2>
                <p>
                  Nuestros servicios se facturan de forma mensual de acuerdo con el plan contratado (Plan Agenda o Plan Pro). Las tarifas están sujetas al Impuesto al Valor Agregado (IVA) correspondiente. La cancelación del plan puede realizarse en cualquier momento, finalizando el servicio al terminar el ciclo de facturación vigente.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">6. Modificaciones de los Términos</h2>
                <p>
                  Nos reservamos el derecho de modificar estos Térmonos y Condiciones en cualquier momento. Le notificaremos cualquier cambio publicando los nuevos términos en este sitio web. El uso continuo del Servicio después de las modificaciones constituirá su aceptación de dichas modificaciones.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">7. Contacto</h2>
                <p>
                  Si tiene preguntas o dudas acerca de estos Términos y Condiciones, puede ponerse en contacto con nosotros escribiendo a <a href="mailto:contacto@runsystems.mx" className="text-blue-600 hover:text-blue-800 underline">contacto@runsystems.mx</a>.
                </p>
              </section>
            </div>
          </article>
        </Container>
      </main>
    </div>
  )
}
