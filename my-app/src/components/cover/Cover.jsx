import React from 'react'
import COVER from '../../assets/cover.png'
import LOGO from  '../../assets/logo.png'

import './CoversStyles.scss'

function Cover() {
  return (
    <div className='header '>
      <figure>
    <img className='banniere'src={COVER} alt="papillon" />
<figcaption className='banniere__slogan'><p>"Donner des racines</p><p>pour leur donner des ailes"</p>  </figcaption>
      </figure>
    <div className='nav container--header'>
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