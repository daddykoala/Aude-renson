import React from 'react'
import Socials from '../../components/social/Socials';
import About from '../../components/About/About';
import Contact from '../../components/contact/contact';

import './MainStyles.scss'


function MainAbout
() {
  return (
    <div className='Main'>
        <Socials/>
        <About/>
        <Contact/>
    </div>
  )
}

export default React.memo(MainAbout)