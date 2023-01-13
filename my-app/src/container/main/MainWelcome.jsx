import React from 'react'
import Socials from '../../components/social/Socials';
import Welcome  from '../../components/welcome/Welcome';
import Contact from '../../components/contact/contact';

import './MainStyles.scss'


function MainWelcome
() {
  return (
    <div className='Main'>
        <Socials/>
        <Welcome/>
        <Contact/>
    </div>
  )
}

export default React.memo(MainWelcome)