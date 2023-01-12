import React from 'react'
import LOGO from  '../../assets/logo.png'
import ILLUSTRATION from  '../../assets/illustration.jpg'



import './CoversStyles.scss'

function Cover() {
  return (
    <div className='header '>
      <div className='banniere'>
    
<div className='banniere__slogan'><p>"Donner des racines</p><p>pour développer leurs ailes"</p>  </div>
      </div>
    <div className='nav container--header'>
        <div className="nav__left nav__all">
            <a href="#presentation">Qui suis-je?</a>
            <a href="#offer__parent">Parent</a>
            <a href="#offer__professional">Professionnel</a>
        </div>
      <div>
    <img className ='nav__logo 'src={ILLUSTRATION} alt="logo" />

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