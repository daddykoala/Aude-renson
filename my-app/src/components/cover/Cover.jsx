import React from 'react'
import COVER from '../../assets/cover.JPG'
import LOGO from  '../../assets/logo.png'

import './CoversStyles.scss'

function Cover() {
  return (
    <div>
    
    <img className='banniere'src={COVER} alt="papillon" />
    <div className='nav'>
        <div className="nav__left nav__all">
            <a href="#home">Home</a>
            <a href="#presentation">Qui suis-je?</a>
            <a href="#accompagnement">Accompagnement</a>
            </div>
    <img className ='nav__logo 'src={LOGO} alt="logo" />
        <div className="nav__right nav__all">
            <a href="#actualités">actualités</a>
            <a href="#Agenda">Agenda</a>
            <a href="#contact">Contacts</a>
            </div>

            
    </div>
    </div>
  )
}

export default React.memo(Cover)