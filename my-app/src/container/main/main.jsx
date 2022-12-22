import React from 'react'
import Socials from '../../components/social/Socials';
import About from '../../components/about/About';
import Contact from '../../components/contact/contact';


function Main
() {
  return (
    <div>
        <Socials/>
        <About/>
        <Contact/>
    </div>
  )
}

export default React.memo(Main)