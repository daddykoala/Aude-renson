import React,{ useState }from 'react'

import ILLUSTRATION from  '../../assets/illustration2.png'
import {Link} from 'react-router-dom';
import { useWindowSize } from "../../service/screenSize";


import './CoversStyles.scss';


function Cover() {

  const [visible, setVisible] = useState(false);
  const { width } = useWindowSize()
  console.log(width);






  return (
    <div className='header '>
      <div className='banniere'>
    
<div className='banniere__slogan'><p>"Donner des racines</p><p>pour développer leurs ailes"</p>  </div>
      </div>
    <div className='nav container--header'>
        <nav className="nav__left nav__all">
            <a ><Link to='/qui-suis-je'>Qui suis-je?</Link></a>
            <a href="#offer__parent"><Link to='/parent'>Parent</Link></a>
            <a href="#offer__professional"><Link to='/professionel'>Professionnel</Link></a>
        </nav>
        {width > 1024 &&(

<div>
<img className ='nav__logo 'src={ILLUSTRATION} alt="logo" />

</div>
  )}
        {width < 1024 &&(

      <div>
    <img className ='nav__logo 'src={ILLUSTRATION} alt="logo" style={{display: visible ? 'block' : 'none '}}/>

      </div>
        )}
        <nav className="nav__right nav__all">
            <a className='link'href="#actualités"><Link to='/professionel'>Actualités</Link></a>
            <a href="#Agenda"><Link to='/agenda'>Agenda</Link></a>
            <a href="#contact"><Link to='/contact'>Contact</Link></a>
            </nav>

            
    </div>
    </div>
  )
}

export default React.memo(Cover)