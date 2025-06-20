import React from 'react'
import Hero from '../components/Hero'
import Journey from '../components/Journey'
// import Workshops from '../components/Workshops'
import Courses from '../components/Courses'
import Achievements from '../components/Achievements'
import Youtube from '../components/YouTube'
import AppBanner from '../components/AppBanner'

function Homepage() {
  return (
  <>
      <Hero />
      <Journey/>
      {/* <Workshops/> */}
      <Courses/>
      <Achievements/>
      <Youtube/>
      <AppBanner/>
  </>
  )
}

export default Homepage