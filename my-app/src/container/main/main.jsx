import React from 'react'
import Socials from '../../components/social/Socials';
import About from '../../components/about/About';
import Contact from '../../components/contact/contact';
import Offer from '../../components/accompagnement/Offer';
import './MainStyles.scss'


function Main
() {
  return (
    <div className='Main'>
        <Socials/>
        <About/>
        <Offer/>
        <Contact/>
    </div>
  )
}

export default React.memo(Main)