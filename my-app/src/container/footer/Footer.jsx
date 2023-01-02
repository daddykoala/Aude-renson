import React from 'react'

import { CiFacebook } from 'react-icons/ci';
import { FiInstagram} from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

import "./FooterStyles.scss";
export default function Footer() {
  return (
    <footer className="footer-container ">
    <div >
      <p>Suivez-moi sur les réseaux sociaux:</p>
      <ul className="social-media-column">
        <li>
        <a href="https://www.facebook.com/Donner-des-racines-pour-d%C3%A9velopper-leurs-ailes-107398071518922/" target="_blank" ><CiFacebook/></a>
        </li>
        <li>
          <a href="https://www.instagram.com/donner.des.ailes18/" target="_blank" ><FiInstagram/></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/aude-renson-83b3a68/" target="_blank" ><FiLinkedin/></a>
        </li>
      </ul>
    </div>
    <div >
      <p>Liens utiles:</p>
      <div className="links-column">
        <ul>
        <li>
          <a href="#">Qui suis-je</a>
        </li>
        <li>
          <a href="#">Politique de confidentialité</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

        </ul>
        
        <ul>

        <li>
          <a href="#">FAQ</a>
        </li>
        </ul>
      </div>
    </div>
  </footer>
  )
}
