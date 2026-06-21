import React from 'react'
import Container from '../../ui/Container'
import Section from '../../ui/Section'
import { features } from '../../../data/features'
import FeatureCard from './FeatureCard'

export default function Features() {
  return (
    <Section id="features">
      <Container>
        <div>
          <h2 className="heading">Caracteristicas</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
