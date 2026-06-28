import React from 'react'
import Link from 'next/link'
import Container from '../../components/ui/Container'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased pb-20">
      {/* Mini Navbar */}
      <header className="border-b border-[var(--border)] bg-[var(--surface)] py-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-bold tracking-tight text-[var(--foreground)] hover:opacity-80 transition-opacity font-heading">
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
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 text-[var(--foreground)]">Aviso de Privacidad</h1>
            <p className="text-sm text-[var(--muted)] mb-8">Última actualización: 28 de Junio de 2026</p>

            <div className="space-y-8 text-[var(--muted)] leading-relaxed text-sm sm:text-base">
              <p>
                En Run Systems nos comprometemos con la protección y confidencialidad de los datos personales de nuestros clientes, prospectos e invitados. Este Aviso de Privacidad detalla cómo recopilamos, utilizamos y resguardamos su información.
              </p>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">1. Responsable del Tratamiento de los Datos</h2>
                <p>
                  El responsable de la recopilación y tratamiento de sus datos personales bajo este portal es Run Systems, con dirección de contacto en <a href="mailto:contacto@runsystems.mx" className="text-blue-600 hover:text-blue-800 underline">contacto@runsystems.mx</a>.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">2. Datos Personales Recopilados</h2>
                <p>
                  Para la correcta prestación de nuestro servicio de agendamiento y soporte técnico, recopilamos los siguientes datos:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Información de contacto (nombre, correo electrónico, número de teléfono).</li>
                  <li>Datos de registro del negocio (nombre comercial, profesionales y servicios ofrecidos).</li>
                  <li>Historial de agendamiento de citas generados automáticamente por el chatbot de WhatsApp.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">3. Finalidad del Tratamiento de Datos</h2>
                <p>
                  Su información personal será utilizada con los siguientes fines primarios:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Proporcionar, operar y mantener la plataforma SaaS y los bots de agendamiento de citas.</li>
                  <li>Gestionar las notificaciones y confirmaciones de citas automáticas enviadas a los clientes finales.</li>
                  <li>Brindar soporte técnico y atención a clientes.</li>
                  <li>Facturación y administración de las suscripciones.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">4. Transferencia de Datos</h2>
                <p>
                  Run Systems no comparte ni vende sus datos personales a terceros. La información puede ser procesada por herramientas de infraestructura tecnológica de confianza necesarias para el funcionamiento del Servicio (como bases de datos en la nube y la API oficial de WhatsApp Cloud de Meta), bajo estrictas políticas de confidencialidad.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">5. Derechos ARCO</h2>
                <p>
                  Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales. Para ejercer cualquiera de estos derechos, o revocar su consentimiento para el tratamiento de su información, puede enviar una solicitud por correo electrónico a <a href="mailto:contacto@runsystems.mx" className="text-blue-600 hover:text-blue-800 underline">contacto@runsystems.mx</a>.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">6. Seguridad de la Información</h2>
                <p>
                  Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales contra pérdidas, robos, alteraciones o accesos no autorizados.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">7. Cambios al Aviso de Privacidad</h2>
                <p>
                  Este Aviso de Privacidad puede modificarse para adaptarse a nuevas disposiciones legales o actualizaciones del Servicio. Los cambios serán notificados a través de este portal oficial de Run Systems.
                </p>
              </section>
            </div>
          </article>
        </Container>
      </main>
    </div>
  )
}
