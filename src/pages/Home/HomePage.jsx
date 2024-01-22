import React from 'react'
import HomeHeader from '../../components/home/HomeHeader'
import HomeSlider from '../../components/home/banner slider/HomeSlider'
import HomeBanner from '../../components/home/homeBanner/HomeBanner'


const HomePage = () => {
  return (
    <main className="bg-white relative h-auto">

      <HomeHeader />

      <HomeBanner />


    </main>
  )
}

export default HomePage