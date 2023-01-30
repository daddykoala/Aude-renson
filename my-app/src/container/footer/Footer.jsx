import React from "react";

import { CiFacebook } from "react-icons/ci";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

import "./FooterStyles.scss";
export default function Footer() {
  return (
    <footer className="footer-container ">
      <div>
        <h5>Suivez-moi sur les réseaux sociaux:</h5>
        <div className="social-media-column">
          <a 
            className="header__socials__facebook scale__effect"
            href="https://www.facebook.com/Donner-des-racines-pour-d%C3%A9velopper-leurs-ailes-107398071518922/"
            target="_blank"
          >
            <CiFacebook />
          </a>

          <a 
            className="header__socials__instagram scale__effect"
            href="https://www.instagram.com/donner.des.ailes18/"
            target="_blank"
          >
            <FiInstagram />
          </a>

          <a 
            className="header__socials__linkedin scale__effect"
            href="https://www.linkedin.com/in/aude-renson-83b3a68/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
      <div>
        <h5>Liens utiles:</h5>
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
  );
}
