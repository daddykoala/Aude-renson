import React from "react";
import PARENT from "../../../assets/formuleenfant.png";
import { Link } from "react-router-dom";
import "./OfferDetailCvge.scss";

function OfferDetailCvge() {
  return (
    <section className="container ">
      <h3 className="detail__offer">
        Cycle "vivre et grandir ensemble &#xA9;"
      </h3>
      <div id="detail-cvge">
        <div className="offer__detail__column">
          <div className="offer__detail__column__item">
            <div>
              <ol>
                <li className="offer__title">
                  <h5>1. L’écoute, le soutien.</h5>
                  <p className="offer__title__resume">
                    Se connecter a nos enfants grâce aux techniques d'écoute.
                  </p>
                </li>

                <li className="offer__title">
                  <h5>
                    2.Explorer les besoins physiologiques pour mieux se
                    connaître..
                  </h5>
                  <p className="offer__title__resume">
                    Explorer les besoins pour aider les enfants à grandir.
                  </p>
                </li>
                <li className="offer__title">
                  <h5>3. Mettre la joie au centre de la vie de famille.</h5>
                  <p className="offer__title__resume">
                    Le jeu pour développer le lien et relâcher les tensions.
                  </p>
                </li>
                <li className="offer__title">
                  <h5>4. Accompagner les pleurs et les colères.</h5>
                  <p className="offer__title__resume">
                    Acceuillir et comprendre les émotions des enfants.
                  </p>
                </li>
                <li className="offer__title">
                  <h5>5. Poser des limites à son enfant.</h5>
                  <p className="offer__title__resume">
                    Comprendre le message derriere un comportement,savoir dire
                    "non".
                  </p>
                </li>
                <li className="offer__title">
                  <h5>6. Quand la colère nous emporte.</h5>
                  <p className="offer__title__resume">
                    Exprimer sa colére sans blesser son enfant.
                  </p>
                </li>
                <li className="offer__title">
                  <h5>7. Comment les enfants apprennent.</h5>
                  <p className="offer__title__resume">
                    Nourrir l'enthousiasme et le désir d'apprendre.
                  </p>
                </li>
                <li className="offer__title">
                  <h5> 8. Renaître à soi-même en accompagnant ses enfants.</h5>
                  <p className="offer__title__resume">
                    Grandir avec ses enfants.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          <div className="offer__detail__picture">
            <img src={PARENT} alt="un père et son fils" />
          </div>
        </div>
      </div>
      <div className="offer__detail__price">
        <p>Tarif : 40€/atelier (soit 320€ le cycle)</p>
        <p>
          Tarif duo (couple, copines, potes...) : 68€/atelier/duo (soit 544€ le
          cycle)
        </p>
        <p>Tarif early bird : en fonction de l'offre du moment</p>
        <p>Nécessité de s'engager pour les 8 ateliers </p>
        <p>Limité à 8 participants</p>
        <p>Possibilité d'encaissement en plusieurs fois.</p>
      </div>
      <div className="offer__link">
        <button className="offer__link__button">ca m'intéresse!</button>{" "}
        <Link to="/parent">retour</Link>
      </div>
    </section>
  );
}

export default OfferDetailCvge;
