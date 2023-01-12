import React from 'react'
import { Link } from 'react-router-dom'
import'./AboutStyles.scss'


function About() {
  return (
    <section className='container'>
        <div className='About__content'>

        <h1 className='essai'>Mon parcours .</h1>
        <p>En <span className='content__bold'>2003</span>, j'ai été diplômée en kinésithérapie.</p>
        <p>En <span className='content__bold'>2011</span>, je suis également devenue Ostéopathe. J'ai exercé pendant 10 ans au sein de différents cabinets.</p>
        <p>En <span className='content__bold'>2013</span>, je suis devenue maman de deux garçons. Ma vision de la parentalité et de la vie a été littéralement chamboulée.</p>
        <p>J'ai commencé par me documenter pour comprendre mes enfants. La lecture du livre du Dr Catherine Gueguen "Pour une enfance heureuse" m'a totalement absorbée : ce qui y était expliqué semblait parler de moi et de mes difficultés dans la vie.</p>
        <p>J'ai continué à chercher des informations auprès de divers auteurs.
La "théorie", je la comprenais et la connaissais. Mais régulièrement, dans la pratique et la vie quotidienne, j'étais dépassée par la situation, les réactions de mes enfants et surtout les miennes.</p>
        <p>En <span className='content__bold'>2019</span>, j'ai découvert la Parentalité Créative®au cours d'un cycle d'ateliers <a  className='content__red'><Link to='/'>"Vivre et Grandir Ensemble®"</Link></a> . S'est offert à moi une toute autre approche de l'accompagnement de l'enfant et une meilleure compréhension de moi-même.</p>
        <p>Découvrant d'autres alternatives éducatives et constatant chaque jour le changement dans ma vie de famille, j'ai décidé de me former afin d'accompagner à mon tour les parents sur leur propre chemin.

</p>
        <p>En <span className='content__bold'>2022</span>, je suis devenue consultante en parentalité.</p>
        <p>Aujourd'hui, j'accompagne les parents en ateliers de groupe ou atelier individuel, ainsi que les professionnels de la petite enfance et les enseignants.</p>         
        </div>

    </section>
  )
}

export default About
















