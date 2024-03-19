'use client'

import { useEffect } from 'react'
import FeatImage01 from '@/public/images/banner/banner-home.jpg';
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Footer from '../components/ui/footer'
import Hero from '../components/hero'
import Features from '../components/features'
import Newsletter from '../components/newsletter'
import Zigzag from '../components/zigzag'
import Testimonials from '../components/testimonials'
import PageIllustration from '../components/page-illustration'
// import Footer from '../components/ui/footer'
import Footer from '../components/ui/footer'
import { Header } from './components/Header/index'
import BannerImage from './components/banner'
import Content1 from './components/content1';
import Content2 from './components/content2';
import Content3 from './components/content3';
import Chiasecongdong from './components/chiasecongdong';
import Iconhelp from '../components/iconhelp';
import Googlemap from './components/googlemap';
import Taisaonenchon from './components/taisaonenchon';
import Dangkytuvan from './components/dangkytuvan';
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
        {/* <Header lng={lng} /> */}
        {/* <BannerImage src={FeatImage01}
          text1="GIÁO DỤC PHƯỢNG HOÀNG"
          text2="Tuyển sinh năm học"
          text3=" 2024 - 2025"
          button="Đăng ký ngay"
          href="#tuyen-sinh" /> */}

        {/* <Content1 /> */}
        {/* <Hero lng={lng} /> */}

        {/* <Content2 /> */}
        {/* <Content3 /> */}
        {/* <Taisaonenchon /> */}


        {/* <Iconhelp /> */}
        {children}
        {/* sóng xanh */}
        {/* <PageIllustration /> */}
        {/* <Features /> */}
        {/* <Zigzag /> */}
        {/* <Newsletter /> */}
        {/* <Chiasecongdong /> */}
        {/* <Dangkytuvan /> */}
        {/* <Googlemap /> */}
        <Footer lng={lng} />
      </main>


    </>
  )
}
