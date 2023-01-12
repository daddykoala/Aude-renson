import React ,{ useState }  from "react";
import PARENT from '../../assets/formuleenfant.png'
import PETITEENFANCE from '../../assets/formuleenseignant.png'
import PROFESSIONEL from '../../assets/formuleprofessionel.png'

import "./OfferStyles.scss";
import { useWindowSize } from "../../service/screenSize";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

// Import Swiper styles
import 'swiper/css';

function Offer() {


    const [visible, setVisible] = useState(false);
    const { width } = useWindowSize()
    console.log(width);
  
    const handleClick = () => {
      setVisible(!visible);
    }
  return (
    <section id="offer__parent" className="container">
      <h2 className="offer__title">Parent</h2>

        {/* <div className="offer__background"></div> */}
      <div className="offer__content">
        <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={10}
         slidesPerView={1}
        //  navigation
        //  pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}>
        <SwiperSlide>
        <article className="offer__card" >
          <h3>formule parent</h3>
          <div >
            { width < 600 && (
            <div className="offer__card__column" onClick={handleClick}>
            <div className="offer__card__column__item"
            style={{ display: visible ? 'block' : 'none '}}>
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
              <p>Tarif early bird : en fonction de l'offre du moment</p>
              <p>Nécessité de s'engager pour les 8 ateliers </p>
              <p>Limité à 8 participants</p>
              <p>Possibilité d'encaissement en plusieurs fois.</p>
            </div>
            </div>
            <div className="offer__card__column__picture">

          <img src={PARENT}  alt="un père et son fils" />
            </div>
              </div>
              
            )}
            { width > 600 && (
              <div className="offer__card__column">
                <div className="offer__card__column__item"
                >
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
                  <p>Tarif early bird : en fonction de l'offre du moment</p>
                  <p>Nécessité de s'engager pour les 8 ateliers </p>
                  <p>Limité à 8 participants</p>
                  <p>Possibilité d'encaissement en plusieurs fois.</p>
                </div>
                </div>
                <div className="offer__card__column__picture">
    
              <img src={PARENT} alt="un père et son fils" />
                </div>
              </div>

          )}
          </div>
          <div className="offer__card__column__price">

              <p>Tarif : 40€/atelier (soit 320€ le cycle)
              </p>
              <p>
                Tarif duo (couple, copines, potes...) : 68€/atelier/duo (soit
                544€ le cycle)
              </p>
          </div>
        </article>
        </SwiperSlide>
        
        </Swiper>
      </div>
    </section>
  );
}

export default React.memo(Offer);
