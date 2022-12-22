import React from 'react'
import Socials from '../../components/social/Socials';
import About from '../../components/about/About';
import Contact from '../../components/contact/contact';
import Offer from '../../components/accompagnement/Offer';


function Main
() {
  return (
    <div>
        <Socials/>
        <About/>
        <Offer/>
        <Contact/>
    </div>
  )
}

export default React.memo(Main)