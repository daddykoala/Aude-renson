import React from 'react';

import PROFILEPICTURE from '../../assets/profile.png';
import { FaAward } from 'react-icons/fa';


import './AboutStyles.scss';

function About() {
    return (
        <section id='about'>
            <h5>Ce que vous devez savoir</h5>
            <h2>Sur moi</h2>

            <div className="container about__container about__content">
                <div className="about__me">
                    <div className='about__me-image'>
                        <img src={PROFILEPICTURE} alt="" />
                    </div>
                </div>
                <div>

                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className='about__icon' />
                        <h5>expérience</h5>
                        <div className="text__variant">

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cumque ipsum inventore sed, quasi, quidem dolores veniam porro eos nulla officia voluptatibus omnis aliquam? Iure voluptatibus inventore libero autem, incidunt consectetur in tenetur veniam explicabo quia vero molestiae cumque obcaecati sapiente culpa. Officiis excepturi iusto commodi doloribus, sunt in odit. </p>
                        </div>
                    </article>

                    <article className="about__card">
                        <FaAward className='about__icon' />
                        <h5>Formation</h5>
                        <div className='text__variant'>
                            <p>je suis une femme donc competente par nature</p>
                        
                        </div>
                    </article>
                </div>

                <p className='text__variant text__variant__italic'>Donner des racines pour developper leurs ailes  
                </p>

                <a href="#contact" className='btn btn--primary'>Contactez moi</a>
                </div>


            </div>
        </section>
    );
}


export default React.memo(About);