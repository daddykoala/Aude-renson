import React,{ useState }from 'react'
import LOGO from  '../../assets/logo.png'
import ILLUSTRATION from  '../../assets/illustration.jpg'
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
            <a href="#offer__parent"><Link to='/'>Parent</Link></a>
            <a href="#offer__professional"><Link to='/'>Professionnel</Link></a>
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
            <a className='link'href="#actualités">Actualités</a>
            <a href="#Agenda">Agenda</a>
            <a href="#contact">Contacts</a>
            </nav>

            
    </div>
    </div>
  )
}

export default React.memo(Cover)