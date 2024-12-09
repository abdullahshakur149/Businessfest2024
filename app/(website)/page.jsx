import Intro from '@/components/Homepage/Intro'
import WelcomeBfest from '@/components/Homepage/Team'
import React from 'react'
import Bfesthistory from '@/components/Homepage/Bfesthistory'
import BfestWinners from '@/components/Homepage/BfestWinners'
import Faqs from '@/components/Homepage/Faqs'
import Footer from '@/components/Homepage/Footer'

const page = () => {
  return (
    <div>
      <Intro/>
      <Bfesthistory/>
      <WelcomeBfest/>
      <BfestWinners/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default page