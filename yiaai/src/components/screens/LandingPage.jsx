import React from 'react'
import BestRegards from '../includes/BestRegards'
import Certificate from '../includes/Certificate'
import Faq from '../includes/Faq'
import Footer from '../includes/Footer'
import Header from '../includes/Header'
import JoinTefun from '../includes/JoinTefun'
import Spotlight from '../includes/Spotlight'
import TalropOTT from '../includes/TalropOTT'
import Technologies from '../includes/Technologies'

function LandingPage() {
  return (
    <>
            <Header />
            <Spotlight />
            <BestRegards />
            <Technologies />
            <Certificate />
            <JoinTefun />
            <TalropOTT />
            <Faq />
            <Footer />
        </>
  )
}

export default LandingPage