import React from 'react'
import Socials from '../../components/social/Socials';
import OfferPro from '../../components/accompagnement/Offerpro';
import Contact from '../../components/contact/contact';

import './MainStyles.scss'


function MainOfferPro

() {
  return (
    <div className='Main'>
        <Socials/>
        <OfferPro/>
        <Contact/>
    </div>
  )
}

export default React.memo(MainOfferPro)