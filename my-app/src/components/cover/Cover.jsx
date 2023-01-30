import React from "react";

import ILLUSTRATION from "../../assets/illustration2.png";
import BURGER from "../../assets/menu-burger.png";
import TULIP from "../../assets/tulipe.svg";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../service/screenSize";

import "./CoversStyles.scss";

function Cover() {

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
      <img className ="burger" onClick={toggleMenu}  src={BURGER} alt="menu lateral" />
        
        {width > 1024 && (
      <div className="nav container--header">
          <nav className="nav__left nav__all">
          
          <a    href='#about'>
            <Link className='nav__link' to="/qui-suis-je" >Qui suis-je?</Link>
          </a>
          <a  href="#offer__parent">
            <Link className='nav__link' to="/parent">Parent</Link>
          </a>
          <a  href="#offer__professional">
            <Link className='nav__link' to="/professionel">Professionnel</Link>
          </a>
        </nav>
          <div>
            <img className="nav__logo " src={ILLUSTRATION} alt="logo" />
          </div>
          <nav className="nav__right nav__all">
          <a href="#actualités">
            <Link className='nav__link' to="/ressources">Ressources</Link>
          </a>
          <a  href="#Agenda">
            <Link className='nav__link' to="/agenda">Agenda</Link>
          </a>
          <a href="#contact">
            <Link className='nav__link' to="/contact">Contact</Link>
          </a>
        </nav>
      </div>
        )}
        {width < 1024 && (
      <div className="nav container--header" >
        <h2>Aude Renson</h2>
        <h3>Consultante en parentalité</h3>
          <nav className="nav__left nav__all">
            <img className ="nav__icon"src={TULIP} alt="tulipe" />
        <h2>Aude Renson</h2>
        <h3>Consultante en parentalité</h3>
          
          <a onClick={toggleMenu} href='#about'>
            <Link className='nav__link' to="/qui-suis-je">Qui suis-je?</Link>
          </a>
          <a onClick={toggleMenu} href="#offer__parent">
            <Link className='nav__link' to="/parent">Parent</Link>
          </a>
          <a onClick={toggleMenu} href="#offer__professional">
            <Link className='nav__link' to="/professionel">Professionnel</Link>
          </a>
          <a onClick={toggleMenu} href="#actualités">
            <Link className='nav__link' to="/ressources">Ressources</Link>
          </a>
          <a onClick={toggleMenu} href="#Agenda">
            <Link className='nav__link' to="/agenda">Agenda</Link>
          </a>
          <a onClick={toggleMenu} href="#contact">
            <Link className='nav__link' to="/contact">Contact</Link>
          </a>
        </nav>
      </div>
        )}
        
        
    </div>
  );
}

export default React.memo(Cover);
