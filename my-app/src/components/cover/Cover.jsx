import React from 'react'
import COVER from '../../assets/cover.JPG'
import LOGO from  '../../assets/logo.png'

import './CoversStyles.scss'

function Cover() {
  return (
    <div className='header'>
      <div>
    <img className='banniere'src={COVER} alt="papillon" />
<div className='banniere__slogan'>Donner des racines pour leur donner des ailes </div>
      </div>
    <div className='nav'>
        <div className="nav__left nav__all">
            <a href="#home">Home</a>
            <a href="#presentation">Qui suis-je?</a>
            <a href="#offer">Accompagnement</a>
            </div>
    <img className ='nav__logo 'src={LOGO} alt="logo" />
        <div className="nav__right nav__all">
            <a href="#actualités">Actualités</a>
            <a href="#Agenda">Agenda</a>
            <a href="#contact">Contacts</a>
            </div>

            
    </div>
    </div>
  )
}

export default React.memo(Cover)