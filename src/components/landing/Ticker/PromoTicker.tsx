import React from 'react'

export default function PromoTicker() {
  const promoText =
    '🎉 PROMOCIÓN DE LANZAMIENTO: INSTALACIÓN SIN COSTO PARA LOS PRIMEROS 10 NEGOCIOS 🎉'

  return (
    <div className="relative flex w-full overflow-hidden border-y border-[var(--border)] bg-[var(--surface)] py-3 sm:py-4">
      {/* 
        We duplicate the content container inside to create a seamless loop.
        The animation translates -50%, which means we need the text repeated
        so that when it reaches 50% it looks identical to 0%.
      */}
      <div className="animate-marquee flex w-max items-center">
        {/* Render the phrase multiple times to ensure it covers very wide screens before looping */}
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="mx-4 shrink-0 whitespace-nowrap text-sm font-bold uppercase tracking-widest sm:mx-8 sm:text-base"
          >
            <span className="text-[var(--muted)]">
              🎉 PROMOCIÓN DE LANZAMIENTO:
            </span>{' '}
            <span className="text-[var(--foreground)]">
              INSTALACIÓN SIN COSTO PARA LOS PRIMEROS 10 NEGOCIOS 🎉
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
