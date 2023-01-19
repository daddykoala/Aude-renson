import React, { useState } from "react";

import ILLUSTRATION from "../../assets/illustration2.png";
import BURGER from "../../assets/menu-burger.png"
import { Link } from "react-router-dom";
import { useWindowSize } from "../../service/screenSize";

import "./CoversStyles.scss";

function Cover() {
  const [visible, setVisible] = useState(false);
  const { width } = useWindowSize();

  const toggleMenu = (e) => {
    console.log("click");
    document.querySelector(".nav__all").classList.toggle("active");
  }


  return (
    <div className="header ">
      <div className="banniere">
        
        <div className="banniere__slogan">
          <p>"Donner des racines</p>
          <p>pour développer leurs ailes"</p>
        </div>
      </div>
      <img className ="burger" onClick={toggleMenu} src={BURGER} alt="menu lateral" />
        
        {width > 1024 && (
      <div className="nav container--header">
          <nav className="nav__left nav__all">
          
          <a className='nav__link' href='#about'>
            <Link to="/qui-suis-je">Qui suis-je?</Link>
          </a>
          <a className='nav__link' href="#offer__parent">
            <Link to="/parent">Parent</Link>
          </a>
          <a className='nav__link' href="#offer__professional">
            <Link to="/professionel">Professionnel</Link>
          </a>
        </nav>
          <div>
            <img className="nav__logo " src={ILLUSTRATION} alt="logo" />
          </div>
          <nav className="nav__right nav__all">
          <a className='nav__link' href="#actualités">
            <Link to="/ressources">Ressources</Link>
          </a>
          <a className='nav__link' href="#Agenda">
            <Link to="/agenda">Agenda</Link>
          </a>
          <a className='nav__link'href="#contact">
            <Link to="/contact">Contact</Link>
          </a>
        </nav>
      </div>
        )}
        {width < 1024 && (
      <div className="nav container--header">
          <nav className="nav__left nav__all">
        <h2>Aude Renson</h2>
        <h3>Consultante en parentalité</h3>
          
          <a className='nav__link' href='#about'>
            <Link to="/qui-suis-je">Qui suis-je?</Link>
          </a>
          <a className='nav__link' href="#offer__parent">
            <Link to="/parent">Parent</Link>
          </a>
          <a className='nav__link' href="#offer__professional">
            <Link to="/professionel">Professionnel</Link>
          </a>
          <a className='nav__link' href="#actualités">
            <Link to="/ressources">Ressources</Link>
          </a>
          <a className='nav__link' href="#Agenda">
            <Link to="/agenda">Agenda</Link>
          </a>
          <a className='nav__link'href="#contact">
            <Link to="/contact">Contact</Link>
          </a>
        </nav>
      </div>
        )}
        
        
    </div>
  );
}

export default React.memo(Cover);
