import React from 'react'

type FeatureCardProps = {
  title: string
  description: string
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="surface p-6">
      <h3 className="subheading">{title}</h3>
      <p className="mt-3 leading-7 text-[var(--muted)]">{description}</p>
    </article>
  )
}
