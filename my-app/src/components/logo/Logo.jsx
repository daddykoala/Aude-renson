

import React from 'react';
import LOGO from  '../../assets/logo.png';


import './LogoStyles.scss'

function Logo() {
  return (
    <div className='logo '>
    <img className ='nav__logo 'src={LOGO} alt="logo" />
    </div>
  )
}

export default React.memo(Logo)