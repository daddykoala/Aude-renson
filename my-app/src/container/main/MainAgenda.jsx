import React from 'react'
import Socials from '../../components/social/Socials';
import Agenda from '../../components/Agenda/Agenda';
import Contact from '../../components/contact/contact';

import './MainStyles.scss'


function MainAgenda
() {
  return (
    <div className='Main'>
        <Socials/>
        <Agenda/>
        <Contact/>
    </div>
  )
}

export default React.memo(MainAgenda)