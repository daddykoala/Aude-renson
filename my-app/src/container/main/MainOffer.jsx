import React from 'react'
import Socials from '../../components/social/Socials';
import Offer from '../../components/accompagnement/Offer';
import Contact from '../../components/contact/contact';

import './MainStyles.scss'


function MainOffer
() {
  return (
    <div className='Main'>
        <Socials/>
        <Offer/>
        <Contact/>
    </div>
  )
}

export default React.memo(MainOffer)