'use client'

import React, { useEffect, useRef, useState } from 'react'
import Container from '../../ui/Container'
import Section from '../../ui/Section'
import { pricingPlans, pricingPromo } from '../../../data/pricing'
import PricingCard from './PricingCard'

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Section id="pricing">
      <Container>
        <div ref={sectionRef}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading">Planes simples, sin sorpresas</h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              Elige el plan que se ajuste a tu negocio. Sin contratos a largo
              plazo.
            </p>
          </div>



          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            {pricingPlans.map((plan, i) => (
              <div
                key={plan.name}
                className={visible ? 'animate-fade-in-up' : 'opacity-0'}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <PricingCard
                  name={plan.name}
                  badge={plan.badge}
                  price={plan.price}
                  priceSuffix={plan.priceSuffix}
                  description={plan.description}
                  features={plan.features}
                  installation={plan.installation}
                  cta={plan.cta}
                  highlighted={plan.highlighted}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
