import React, { useState } from "react";
import PARENT from "../../assets/formuleenfant.png";

import "./OfferStyles.scss";
import { useWindowSize } from "../../service/screenSize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";

// Import Swiper styles
import "swiper/css";

function Offer() {
  const [visible, setVisible] = useState(false);
  const { width } = useWindowSize();
  console.log(width);

  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <section id="offer__parent" className="container">
      <h2 className="offer__title">Parent</h2>

      <h3>Pour qui?</h3>
      <p>
        Tout adulte en contact avec un enfant (beau-parent,Oncle,Tante,frere,
        Grands-parents) ou avec un projet d'enfant (ou pas)
      </p>

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
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <article className="offer__card">
              <h3>Accompagnement individuel</h3>
              <div>
                {width < 600 && (
                  <div className="offer__card__column" onClick={handleClick}>
                    <div
                      className="offer__card__column__item"
                      style={{ display: visible ? "block" : "none " }}
                    >
                      {/*Apports théoriques et expériences pratiques rythment ce cycle de 8 ateliers de 3h. 
Les objectifs sont d'acquérir les outils d'une parentalité bienveillante, de développer sa créativité, de trouver ses propres solutions et d'enrichir la relation familiale.

La dynamique de groupe permet des moments de partages d'expérience, d'échanges entre pairs ainsi que trouver un réseau de soutien et de solidarité.
  */}
                      <ol>
                        <li>
                          au sein d'un cabinet chaleureux, à domicile ou à
                          distance, l'accompagnement individuel permet de
                          répondre au plus près à votre besoin de parent
                          (sommeil, alimentation, écrans, pose de limites,
                          bouleversement dans la famille...).
                        </li>
                        <li>
                          De façon ponctuelle, en plusieurs séances, seul(e) ou
                          en couple, je vous propose une écoute bienveillante et
                          un suivi personnalisé afin d'explorer les "défis" que
                          vous rencontrez dans votre vie de parent.
                        </li>
                        <li>
                          Lors d'un premier rendez-vous, nous échangeons à
                          propos de votre demande et définissons ensemble un
                          objectif pour aller vers une parentalité qui vous
                          ressemble.
                        </li>
                        <li>
                          Prévoir 1h30 pour la première consultation, puis 1h
                          pour les suivantes. Le nombre de consultation dépendra
                          de votre demande et votre objectif. Cependant, 6 à 8
                          séances sont généralement nécessaires pour que le
                          processus de changement se mette en place.
                        </li>
                      </ol>
                      <div className="offer__price">
                        <p>
                          Tarif 1 parent : 1ére séance:55 euros;séances
                          suivantes:50 euros.
                        </p>
                        <p>
                          Tarif couple : 1ère séance : 60 euros ; séances
                          suivantes : 55 euros{" "}
                        </p>
                      </div>
                    </div>
                    <div className="offer__card__column__picture">
                      <img src={PARENT} alt="un père et son fils" />
                    </div>
                  </div>
                )}
                {width > 600 && (
                  <div className="offer__card__column">
                    <div className="offer__card__column__item">
                      <ol>
                        <li>
                          Au sein d'un cabinet chaleureux, à domicile ou à
                          distance, l'accompagnement individuel permet de
                          répondre au plus près à votre besoin de parent
                          (sommeil, alimentation, écrans, pose de limites,
                          bouleversement dans la famille...).
                        </li>
                        <li>
                          De façon ponctuelle, en plusieurs séances, seul(e) ou
                          en couple, je vous propose une écoute bienveillante et
                          un suivi personnalisé afin d'explorer les "défis" que
                          vous rencontrez dans votre vie de parent.
                        </li>
                      </ol>
                      <div className="offer__price"></div>
                    </div>
                    <div className="offer__card__column__picture">
                      <img src={PARENT} alt="un père et son fils" />
                    </div>
                  </div>
                )}
              </div>
              <div className="offer__card__column__price">
                <p>
                  Tarif 1 parent : 1ére séance:55 euros;séances suivantes:50
                  euros.
                </p>
                <p>
                  Tarif couple : 1ère séance : 60 euros ; séances suivantes : 55
                  euros{" "}
                </p>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="offer__card" id="cycle">
              <h3>Cycle "vivre et grandir ensemble &#xA9;"</h3>
              <div>
                {width < 600 && (
                  <div className="offer__card__column" onClick={handleClick}>
                    <div
                      className="offer__card__column__item"
                      style={{ display: visible ? "block" : "none " }}
                    >
                      <ol>
                        <li>
                
                          Apports théoriques et expériences pratiques rythment
                          ce cycle de 8 ateliers de 3h.
                        </li>
                        <li>
                          Les objectifs sont d'acquérir les outils d'une
                          parentalité bienveillante, de développer sa
                          créativité, de trouver ses propres solutions et
                          d'enrichir la relation familiale.
                        </li>
                        <li>
                          La dynamique de groupe permet des moments de partages
                          d'expérience, d'échanges entre pairs ainsi que trouver
                          un réseau de soutien et de solidarité.
                        </li>
                      </ol>

                      <div>
                        <button className="offer__link__detail">
                          <Link to="/parent/details-cvge">Details</Link>
                        </button>
                      </div>
                    </div>
                    <div className="offer__card__column__picture">
                      <img src={PARENT} alt="un père et son fils" />
                    </div>
                  </div>
                )}
                {width > 600 && (
                  <div className="offer__card__column">
                    <div className="offer__card__column__item">
                    <ol>
                        <li>
                
                          Apports théoriques et expériences pratiques rythment
                          ce cycle de 8 ateliers de 3h.
                        </li>
                        <li>
                          Les objectifs sont d'acquérir les outils d'une
                          parentalité bienveillante, de développer sa
                          créativité, de trouver ses propres solutions et
                          d'enrichir la relation familiale.
                        </li>
                        <li>
                          La dynamique de groupe permet des moments de partages
                          d'expérience, d'échanges entre pairs ainsi que trouver
                          un réseau de soutien et de solidarité.
                        </li>
                      </ol>
                      <div>
                        <button className="offer__link__detail button">
                          <Link to="/parent/details-cvge">Details</Link>
                        </button>
                      </div>
                    </div>
                    <div className="offer__card__column__picture">
                      <img src={PARENT} alt="un père et son fils" />
                    </div>
                  </div>
                )}
              </div>
              <div className="offer__card__column__price">
                <p>Tarif : 40€/atelier (soit 320€ le cycle)</p>
                <p>
                  Tarif duo (couple, copines, potes...) : 68€/atelier/duo (soit
                  544€ le cycle)
                </p>
              </div>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="offer__card">
              <h3>Atelier à thème</h3>
              <div>
                {width < 600 && (
                  <div className="offer__card__column" onClick={handleClick}>
                    <div
                      className="offer__card__column__item"
                      style={{ display: visible ? "block" : "none " }}
                    >
                      <ol>
                        <li>
                          Je vous propose des ateliers ponctuels, à thème, en
                          fonction de vos besoins et demandes (adolescence,
                          conflit dans la fratrie, couple, relation avec les
                          grands-parents / beaux-parents, écrans...).{" "}
                        </li>
                        <li>
                          2Ces ateliers se déroulent dans un lieu accueillant et
                          chaleureux. Ils peuvent également se dérouler chez
                          vous si vous souhaitez en organiser avec des amis,
                          collègues, voisins, parents d'élèves ou d'instruction
                          en famille...
                        </li>
                      </ol>
                      <div className="offer__price"></div>
                    </div>
                    <div className="offer__card__column__picture">
                      <img src={PARENT} alt="un père et son fils" />
                    </div>
                  </div>
                )}
                {width > 600 && (
                  <div className="offer__card__column">
                    <div className="offer__card__column__item">
                      <ol>
                        <li>
                          Je vous propose des ateliers ponctuels, à thème, en
                          fonction de vos besoins et demandes (adolescence,
                          conflit dans la fratrie, couple, relation avec les
                          grands-parents / beaux-parents, écrans...).{" "}
                        </li>
                        <li>
                          2Ces ateliers se déroulent dans un lieu accueillant et
                          chaleureux. Ils peuvent également se dérouler chez
                          vous si vous souhaitez en organiser avec des amis,
                          collègues, voisins, parents d'élèves ou d'instruction
                          en famille...
                        </li>
                      </ol>
                      <div className="offer__price"></div>
                    </div>
                    <div className="offer__card__column__picture">
                      <img src={PARENT} alt="un père et son fils" />
                    </div>
                  </div>
                )}
              </div>
              <div className="offer__card__column__price">
                <p>Durée : de 2 à 3 heures.</p>
                <p>Tarif : sur Devis</p>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="offer__card">
              <h3>Cafés Parents</h3>
              <div>
                {width < 600 && (
                  <div className="offer__card__column" onClick={handleClick}>
                    <div
                      className="offer__card__column__item"
                      style={{ display: visible ? "block" : "none " }}
                    >
                      <ol>
                        <li>
                          {" "}
                          : nous nous retrouvons au parc ou dans un café
                          chaleureux pour échanger entre parents. Le thème peut
                          être choisi en amont par mes soins ou le jour même en
                          accord avec les participants. L'idée est de partager
                          son expérience et d'échanger sur des thématiques
                          actuelles ainsi que de bénéficier d'un moment de
                          parole libre.{" "}
                        </li>
                        <li>
                          C'est un espace où chacun peut venir se ressourcer,
                          tisser des liens avec d'autres parents et se créer un
                          véritable réseau de soutien et de solidarité.
                        </li>
                        <li>
                          Les enfants sont les bienvenus et restent sous la
                          responsabilité de leurs parents.
                        </li>
                        <li>Les dates seront communiquées ultérieurement.</li>
                      </ol>
                      <div className="offer__price"></div>
                    </div>
                    <div className="offer__card__column__picture">
                      <img src={PARENT} alt="un père et son fils" />
                    </div>
                  </div>
                )}
                {width > 600 && (
                  <div className="offer__card__column">
                    <div className="offer__card__column__item">
                      <ol>
                        <li>
                          {" "}
                          : nous nous retrouvons au parc ou dans un café
                          chaleureux pour échanger entre parents. Le thème peut
                          être choisi en amont par mes soins ou le jour même en
                          accord avec les participants. L'idée est de partager
                          son expérience et d'échanger sur des thématiques
                          actuelles ainsi que de bénéficier d'un moment de
                          parole libre.{" "}
                        </li>
                        <li>
                          C'est un espace où chacun peut venir se ressourcer,
                          tisser des liens avec d'autres parents et se créer un
                          véritable réseau de soutien et de solidarité.
                        </li>
                        <li>
                          Les enfants sont les bienvenus et restent sous la
                          responsabilité de leurs parents.
                        </li>
                        <li>Les dates seront communiquées ultérieurement.</li>
                      </ol>
                      <div className="offer__price"></div>
                    </div>
                    <div className="offer__card__column__picture">
                      <img src={PARENT} alt="un père et son fils" />
                    </div>
                  </div>
                )}
              </div>
              <div className="offer__card__column__price"></div>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default React.memo(Offer);
