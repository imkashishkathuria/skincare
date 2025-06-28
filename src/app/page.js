import React from 'react'
import HeroSection from './components/HeroSection'
import WhyOurProducts from './components/whyOurProducts'
import BestSellingProducts from './components/bestSellingProducts'
import Images from './components/images1'
import ShopNow from './components/shopNow'
import NewArrival from './components/newArrival'
import Faq from './components/faq'
import Footer from './components/footer'
import PageReveal from './components/PageReveal'

const Home = () => {
  return (
    <PageReveal>
      <div>
        <HeroSection />
        <WhyOurProducts />
        <BestSellingProducts />
        <Images />
        <ShopNow />
        <NewArrival />
        <Images />
        <Faq />
        <Footer />
      </div>
    </PageReveal>
  )
}

export default Home
