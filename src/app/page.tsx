import React from 'react'
import Navbar from '../components/landing/Navbar/Navbar'
import Hero from '../components/landing/Hero/Hero'
import PromoTicker from '../components/landing/Ticker/PromoTicker'
import Features from '../components/landing/Features/Features'
import HowItWorks from '../components/landing/HowItWorks/HowItWorks'
import Pricing from '../components/landing/Pricing/Pricing'
import CTA from '../components/landing/CTA/CTA'
import Footer from '../components/landing/Footer/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PromoTicker />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
