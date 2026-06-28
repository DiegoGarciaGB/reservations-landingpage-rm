import React from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { links } from '../../../data/links'

type PricingCardProps = {
  name: string
  badge?: string
  price: string
  priceSuffix: string
  description: string
  features: string[]
  installation: string
  cta: string
  highlighted: boolean
}

export default function PricingCard({
  name,
  badge,
  price,
  priceSuffix,
  description,
  features,
  installation,
  cta,
  highlighted,
}: PricingCardProps) {
  return (
    <article
      className={`flex h-full flex-col p-8 ${
        highlighted ? 'surface-highlighted' : 'surface'
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <h3 className="subheading">{name}</h3>
        {badge && (
          <span className="rounded-full bg-[var(--muted)]/10 px-3 py-0.5 text-xs font-semibold text-[var(--muted)] ring-1 ring-[var(--muted)]/20">
            {badge}
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-4xl font-bold tracking-tight">{price}</span>
        <span className="text-sm text-[var(--muted-soft)]">{priceSuffix}</span>
      </div>

      <p className="mt-3 leading-7 text-[var(--muted)]">{description}</p>

      {/* Features */}
      <ul className="mt-8 flex-1 space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm leading-6"
          >
            <Check
              size={16}
              className="mt-0.5 shrink-0 text-[var(--foreground)]"
            />
            {feature}
          </li>
        ))}
      </ul>

      {/* Installation cost */}
      <p className="mt-8 text-xs text-[var(--muted-soft)]">
        Instalación: {installation}
      </p>

      {/* CTA */}
      <Link
        href={links.getWhatsAppPlanLink(name)}
        className={`mt-4 text-center ${
          highlighted ? 'btn-primary' : 'btn-ghost'
        }`}
      >
        {cta}
      </Link>
    </article>
  )
}
