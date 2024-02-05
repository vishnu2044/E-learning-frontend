import React from 'react'
import HomeHeader from '../../components/home/HomeHeader'
import HomeBanner from '../../components/home/homeBanner/HomeBanner'


const HomePage = () => {
  
  return (
    <main className="bg-white relative h-auto flex-row overflow-y-hidden">

      <HomeHeader/>

      <HomeBanner />


    </main>
  )
}

export default HomePage