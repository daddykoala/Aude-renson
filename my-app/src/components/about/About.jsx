import React from "react";
import { Link } from "react-router-dom";
import "./AboutStyles.scss";

function About() {
  return (
    <section className="container">
      <h1 className="essai">Mon parcours.</h1>
      <div id="about" className="About__content">
        <p>
          En <span className="content__bold">2003</span>, j'ai été diplômée en
          kinésithérapie.
        </p>
        <p>
          En <span className="content__bold">2011</span>, je suis également
          devenue Ostéopathe. J'ai exercé pendant 10 ans au sein de différents
          cabinets.
        </p>
        <p>
          En <span className="content__bold">2013</span>, je suis devenue maman
          de deux garçons. Ma vision de la parentalité et de la vie a été
          littéralement chamboulée.
        </p>
        <p>
          J'ai commencé par me documenter pour comprendre mes enfants. La
          lecture du livre du Dr Catherine Gueguen "Pour une enfance heureuse"
          m'a totalement absorbée : ce qui y était expliqué semblait parler de
          moi et de mes difficultés dans la vie.
        </p>
        <p>
          J'ai continué à chercher des informations auprès de divers auteurs. La
          "théorie", je la comprenais et la connaissais. Mais régulièrement,
          dans la pratique et la vie quotidienne, j'étais dépassée par la
          situation, les réactions de mes enfants et surtout les miennes.
        </p>
        <p>
          En <span className="content__bold">2019</span>, j'ai découvert la{" "}
          <a className="content__red">
            <Link to="/parentalite-creative">Parentalité Créative&#174;</Link>
          </a>{" "}
          au cours d'un cycle d'ateliers{" "}
          <a className="content__red">
            <Link to="/parent/#cycle">"Vivre et Grandir Ensemble®"</Link>
          </a>{" "}
          . Se sont offertes à moi une toute autre approche de l'accompagnement
          de l'enfant et une meilleure compréhension de moi-même.
        </p>
        <p>
          Découvrant d'autres alternatives éducatives et constatant chaque jour
          le changement dans ma vie de famille, j'ai décidé de me former afin
          d'accompagner à mon tour les parents sur leur propre chemin.
        </p>
        <p>
          En <span className="content__bold">2022</span>, je suis devenue
          consultante en parentalité.
        </p>
        <p>
          Aujourd'hui, j'accompagne les parents en ateliers de groupe ou atelier
          individuel, ainsi que les professionnels de la petite enfance et les
          enseignants.
        </p>
      </div>
      <h1 className="essai">Mon Accompagnement.</h1>
      <div className="About__content">
        <p>
          Mon accompagnement s'appuie sur les dernières découvertes en
          neurosciences cognitives et affectives, les travaux d'Alice Miller,
          les acquis de la psychologie positive, la communication non-violente,
          la théorie de l'attachement ainsi que les connaissances actuelles des
          mécanismes émotionnels des adultes et des enfants. La dynamique qui en
          découle transforme la vie de famille au quotidien : gestion des
          conflits, pose de limites, communication, émotions, jeu, alimentation,
          sommeil et apprentissages. L'accompagnement repose sur 4 piliers :
          l'écoute, l'affirmation de soi, l'accueil des émotions et le jeu pour
          nourrir les liens et relâcher les tensions familiales. En plus d'un
          travail sur ma propre histoire personnelle, j'ai expérimenté les
          outils de la Parentalité Créative dans ma propre famille. Mon rôle est
          de vous accompagner dans les défis du quotidien afin d'accueillir et
          d'apprendre à gérer les conflits (et oui il y en aura encore !), de
          retrouver une ambiance familiale plus sereine et le plaisir d'être
          ensemble. Mon rôle n'est pas de vous rendre dépendant mais de vous
          aider à acquérir une saine autonomie. Alors envolez-vous !
        </p>
      </div>
    </section>
  );
}

export default About;
