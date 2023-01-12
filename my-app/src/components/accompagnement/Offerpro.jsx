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

function OfferPro() {


    const [visible, setVisible] = useState(false);
    const { width } = useWindowSize()
    console.log(width);
  
    const handleClick = () => {
      setVisible(!visible);
    }
  return (
    <section id="offer__professional" className="container">
      <h2 className="offer__title">Professionnel</h2>

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
          <h3>Professionnels de la petite enfance</h3>
          { width < 600 && (
          <div className="offer__card__column" onClick={handleClick}>
          <div className="offer__card__column__item" style={{ display: visible ? 'block' : 'none '}}>
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
            <img className="offer__card__column__picture"src={PROFESSIONEL} alt="une presentation devant des adultes " />
          </div>
            )}
            { width > 600 && (
          <div className="offer__card__column">
          <div className="offer__card__column__item" >
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
            <img className="offer__card__column__picture"src={PROFESSIONEL} alt="une presentation devant des adultes " />
          </div>
            )}
          <div className="offer__card__column__price">

              <p>Tarif : sur devis.
              </p>
          </div>
        </article>
        </SwiperSlide>


        <SwiperSlide>

        <article className="offer__card" >
          <h3>formule enseignant</h3>
          { width < 600 && (
          <div className="offer__card__column" onClick={handleClick} >
          <div className="offer__card__column__item" style={{ display: visible ? 'block' : 'none '}}>
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
              <p>
                Pas de prè requis pour cette formation.
              </p>
              <p>Possibilité de prise en charge au titre de la formation profesionelle.</p>
            </div>
            </div>
            <img className="offer__card__column__picture"src={PETITEENFANCE} alt="une enseignante dans sa classe" />
          </div>
          )}
          { width > 600 && (
          <div className="offer__card__column"  >
          <div className="offer__card__column__item" >
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
            {/* <div className="offer__price">
              <p>
                Pas de prè requis pour cette formation.
              </p>
              <p>Possibilité de prise en charge au titre de la formation profesionelle.</p>
            </div> */}
            </div>
            <img className="offer__card__column__picture"src={PETITEENFANCE} alt="une enseignante dans sa classe" />
          </div>
          )}
          <div className="offer__card__column__price">

              <p>Tarif : sur devis.
              </p>
          </div>
        </article>
        </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default React.memo(OfferPro);
