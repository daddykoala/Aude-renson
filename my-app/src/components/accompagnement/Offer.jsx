import React from "react";
import "./OfferStyles.scss";

function Offer() {
  return (
    <section id="offer" className="container">
      <h2 className="offer__title">Accompagnement</h2>
      <div className="offer__content">
        <article className="offer__card">
          <h3>formule parent</h3>
          <div className="offer__card__column">
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
        </article>
      </div>
    </section>
  );
}

export default React.memo(Offer);
