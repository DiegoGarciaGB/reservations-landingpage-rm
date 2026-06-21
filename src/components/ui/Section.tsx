import React from 'react'

type SectionProps = {
  children: React.ReactNode
  id?: string
}

export default function Section({ children, id }: SectionProps) {
  return (
    <section id={id} className="py-24">
      {children}
    </section>
  )
}
