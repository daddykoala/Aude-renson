import React from 'react'
import COVER from '../../assets/cover.png'
import LOGO from  '../../assets/logo.png'

import './CoversStyles.scss'

function Cover() {
  return (
    <div className='header '>
      <div className='banniere'>
    
<div className='banniere__slogan'><p>"Donner des racines</p><p>pour leur donner des ailes"</p>  </div>
      </div>
    <div className='nav container--header'>
        <div className="nav__left nav__all">
            <a href="#home">Home</a>
            <a href="#presentation">Qui suis-je?</a>
            <a href="#offer">Accompagnement</a>
        </div>
      <div>
    <img className ='nav__logo 'src={LOGO} alt="logo" />

      </div>
        <div className="nav__right nav__all">
            <a className='link'href="#actualités">Actualités</a>
            <a href="#Agenda">Agenda</a>
            <a href="#contact">Contacts</a>
            </div>

            
    </div>
    </div>
  )
}

export default React.memo(Cover)