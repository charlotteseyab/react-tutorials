import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import HeroSection from '../pages/home/HeroSection'
import About from '../pages/home/about'
import Footer from '../pages/home/footer'
import Reviews from '../pages/home/reviews'
import Map from '../pages/home/map'

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <HeroSection />
      <About />
      <Reviews />
      <Footer />
      <Map />
    </div>
  )
}

export default RootLayout