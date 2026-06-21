import React from 'react'
import Navbar from '../components/landing/Navbar/Navbar'
import Hero from '../components/landing/Hero/Hero'
import Features from '../components/landing/Features/Features'
import Pricing from '../components/landing/Pricing/Pricing'
import CTA from '../components/landing/CTA/CTA'
import Footer from '../components/landing/Footer/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
