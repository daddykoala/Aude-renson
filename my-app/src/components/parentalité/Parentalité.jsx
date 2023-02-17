import React from "react";
import PARENTALITE from "../../../src/assets/creative.jpeg";
import './parentalitéStyles.scss'

function parentalité() {
  return (
    <div className="container">
      <h1 className="title__parentalite">La Parentalité Créative, qu'est-ce que c'est ?</h1>
      <div className="card__container">
        <div className="card__text">
      <p>
        C'est comme une recette! 
        </p>
        <p>
        Après avoir intégré les différents outils de la
        PC, en accompagnement individuel ou de groupe, chaque parent va utiliser
        les "ingrédients " pour créer sa propre solution qui lui correspond
        ainsi qu'à son enfant à l'instant "t".</p>
        
        <p>"La" solution sera alors
        différente en fonction de chaque enfant et de chaque parent car les
        besoins et l'histoire personnelle sont différents.
        </p>
        <p>  Vous retrouverez
        confiance en vos capacités de parent afin d'accompagner vos enfants dans
        la découverte du monde, de les soutenir dans leurs apprentissages et de
        poser des limites claires tout en les respectant, ainsi que vous-même.
      </p>

        </div>
        <div className="img"><img src={PARENTALITE} alt="parentalité creative" /></div>
      </div>
    </div>
  );
}

export default parentalité;
