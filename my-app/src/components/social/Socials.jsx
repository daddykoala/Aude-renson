
import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { CiFacebook } from 'react-icons/ci';
import { FiInstagram} from 'react-icons/fi';

import './socialsStyles.scss'

function Socials() {
return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/Donner-des-racines-pour-d%C3%A9velopper-leurs-ailes-107398071518922/" target="_blank" ><CiFacebook/></a>
        <a href="https://www.instagram.com/donner.des.ailes18/" target="_blank" ><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/aude-renson-83b3a68/" target="_blank" ><FiLinkedin/></a>
    </div>
);
}


export default React.memo(Socials);