import React from 'react'
import Container from '../../ui/Container'
import Section from '../../ui/Section'
import { pricingPlans } from '../../../data/pricing'
import PricingCard from './PricingCard'

export default function Pricing() {
  return (
    <Section id="pricing">
      <Container>
        <div>
          <h2 className="heading">Planes</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.name}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
