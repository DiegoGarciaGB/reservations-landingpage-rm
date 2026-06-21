import React from 'react'

type PricingCardProps = {
  name: string
  price: string
  description: string
  features: string[]
}

export default function PricingCard({ name, price, description, features }: PricingCardProps) {
  return (
    <article className="surface p-8">
      <h3 className="subheading">{name}</h3>
      <p className="mt-4 text-4xl font-semibold tracking-tight">{price}</p>
      <p className="mt-3 leading-7 text-[var(--muted)]">{description}</p>
      <ul className="mt-8 space-y-3 text-sm leading-7">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  )
}
