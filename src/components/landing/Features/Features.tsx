'use client'

import React, { useEffect, useRef, useState } from 'react'
import Container from '../../ui/Container'
import Section from '../../ui/Section'
import { features } from '../../../data/features'
import FeatureCard from './FeatureCard'

export default function Features() {
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
    <Section id="features">
      <Container>
        <div ref={sectionRef}>
          <div className="max-w-2xl">
            <h2 className="heading">Todo lo que necesita tu negocio</h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              Desde la gestión de agenda hasta la atención automatizada por
              WhatsApp, cada funcionalidad está pensada para que tu negocio
              opere con menos fricción.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              // Asymmetrical Bento layout for 4 items:
              // Desktop & Tablet: [2-cols] [1-col], [1-col] [2-cols]
              let spanClass = ''
              if (i === 0 || i === 3) spanClass = 'md:col-span-2 lg:col-span-2'
              
              return (
                <div
                  key={feature.title}
                  className={`${
                    visible ? 'animate-fade-in-up' : 'opacity-0'
                  } ${spanClass}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
