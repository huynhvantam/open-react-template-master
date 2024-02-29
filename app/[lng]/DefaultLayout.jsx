'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Banner from '../components/banner'
// import Footer from '../components/ui/footer'
import Hero from '../components/hero'
import Features from '../components/features'
import Newsletter from '../components/newsletter'
import Zigzag from '../components/zigzag'
import Testimonials from '../components/testimonials'
import PageIllustration from '../components/page-illustration'
// import Footer from '../components/ui/footer'
import Footer from '../components/ui/footer'

export default function DefaultLayout({
  children, t, lng
}) {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <main className="grow">

        <PageIllustration />

        {children}
        <Hero lng={lng} />
        <Features />
        <Zigzag />
        <Testimonials />
        <Newsletter />
        <Banner />
        <Footer lng={lng} />
      </main>


    </>
  )
}
