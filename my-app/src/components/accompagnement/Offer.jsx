import React from "react";
import PARENT from '../../assets/formuleenfant.png'
import PETITEENFANCE from '../../assets/formuleenseignant.png'
import PROFESSIONEL from '../../assets/formuleprofessionel.png'
import "./OfferStyles.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'

// Import Swiper styles
import 'swiper/css';

function Offer() {
  return (
    <section id="offer" className="container">
      <h2 className="offer__title">Accompagnement</h2>
      <div className="offer__content">
        <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={100}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}>
        <SwiperSlide>
        <article className="offer__card">
          <h3>formule parent</h3>
          <div className="offer__card__column">
            <div className="offer__card__column__item">
            <ol>
              <li> 1. L’écoute, le soutien.(temps ) </li>
              <li>
                2.Explorer les besoins physiologiques pour mieux se connaître.
              </li>
              <li>3. Mettre la joie au centre de la vie de famille.</li>
              <li>4. Accompagner les pleurs et les colères.</li>
              <li>5. Poser des limites à son enfant.</li>
              <li>6. Quand la colère nous emporte.</li>
              <li>7. Comment les enfants apprennent.</li>
              <li>8. Renaître à soi-même en accompagnant ses enfants.</li>
            </ol>
            <div className="offer__price">
              <p>Tarif : 40€/atelier (soit 320€ le cycle)</p>
              <p>
                Tarif duo (couple, copines, potes...) : 68€/atelier/duo (soit
                544€ le cycle)
              </p>
              <p>Tarif early bird : en fonction de l'offre du moment</p>
              <p>Nécessité de s'engager pour les 8 ateliers </p>
              <p>Limité à 8 participants</p>
              <p>Possibilité d'encaissement en plusieurs fois.</p>
            </div>
            </div>
          <img className="offer__card__column__item"src={PARENT} alt="un père et son fils" />
          </div>
        </article>
        </SwiperSlide>
        <SwiperSlide>

        <article className="offer__card">
          <h3>Professionnels de la petite enfance</h3>
          <div className="offer__card__column">
          <div className="offer__card__column__item">
            <ol>
              <li> 1.	L'accueil et l'écoute dans la relation aux tout-petits(temps ) </li>
              <li>	Le jeu, une passerelle ludique
              </li>
              <li>3.	Les besoins physiologiques </li>
              <li>4.	Pleurs et colères des tout-petits </li>
              <li>5.	La pose de limites </li>
              <li>6.	La mémoire traumatique : un éclairage sur certaines réactions  </li>
              <li>7.	Les enfants, des petits chercheurs</li>
              <li>8.	Développer des ressources créatives en équipe </li>
            </ol>
            <div className="offer__price">
              <p>Tarif : sur devis.
              </p>
              <p>
                Pas de prè requis pour cette formation.
              </p>
              <p>Possibilité de prise en charge au titre de la formation profesionelle.</p>
            </div>
            </div>
            <img className="offer__card__column__item"src={PROFESSIONEL} alt="une presentaion devant des adultes " />
          </div>
        </article>
        </SwiperSlide>


        <SwiperSlide>

        <article className="offer__card">
          <h3>formule enseignant</h3>
          <div className="offer__card__column">
          <div className="offer__card__column__item">
            <ol>
              <li> 1. L'écoute et le soutien dans la relation aux enfants et aux adolescents (temps ) </li>
              <li>2.	Le jeu, une passerelle ludique : un outil pédagogique et émotionnel 
              </li>
              <li>3.	Comprendre et accueillir les émotions des jeunes </li>
              <li>4.	Autorité et bienveillance, est-ce compatible ?</li>
              <li>5.	La mémoire traumatique, un éclairage sur certains comportements difficiles </li>
              <li>6.	La Co-éducation, travailler avec les parents</li>
              <li>7.	Le cerveau dans tous ses états : motivation, enthousiasme et apprentissage optimal</li>
              <li>8.	Ressources pour l'intelligence collective en classe et en équipe</li>
            </ol>
            <div className="offer__price">
              <p>Tarif : sur devis.
              </p>
              <p>
                Pas de prè requis pour cette formation.
              </p>
              <p>Possibilité de prise en charge au titre de la formation profesionelle.</p>
            </div>
            </div>
            <img className="offer__card__column__item"src={PETITEENFANCE} alt="une enseignante dans sa classe" />
          </div>
        </article>
        </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default React.memo(Offer);
