import React from 'react';

import PROFILEPICTURE from '../../assets/profile.png';
import { FaAward } from 'react-icons/fa';


import './AboutStyles.scss';

function About() {
    return (
        <section id='presentation'>


            <div className="container presentation__container presentation__content">
                <div className="presentation__me">
                    <div className='presentation__me-image'>
                        <img src={PROFILEPICTURE} alt="" />
                    </div>
                </div>
                <div>

                <div className='presentation'>
                    <article className="presentation__card">

                        <h5>Bienvenu.e</h5>
                        <div >

                        <p>Devenir parent peut parfois ressembler à un ouragan. Nos enfants ne naissent pas avec un mode d'emploi et pour la plupart d'entre nous, la parentalité peut paraître compliquée et nous nous sentons dépassés.</p>
                        <p>"N'essayez pas d'éduquer vos enfants, de toute façon ils vous ressembleront "</p>
                        <p>Alors comment les laisser grandir pour devenir adulte en les accompagnant dans la bienveillance et le respect de chaque membre de la famille ?</p>
                        <p>"Soyez l'adulte que vous souhaitez que votre enfant devienne"</p>
                        <p>Partons ensemble à la découverte de la Parentalité Créative&#174;</p>

                        </div>
                    </article>
                    {/* <article classNaprsentation">
                        <FaAward className='about__icon' />
                        <h5>Mon parcours</h5>
                        <div className="text__variant">

                        <p>En 2003, j'ai été diplômée en kinésithérapie. En 2011, je suis également devenue Ostéopathe. J'ai exercé pendant 10 ans au sein de différents cabinets.</p>
                        <p>En 2013, je suis devenue maman de deux garçons. Ma vision de la parentalité et de la vie a été littéralement chamboulée.</p>
                        <p>J'ai commencé par me documenter pour comprendre mes enfants. La lecture du livre du Dr Catherine Gueguen "Pour une enfance heureuse" m'a totalement absorbée : ce qui y était expliqué semblait parler de moi et de mes difficultés dans la vie.</p>
                        <p>J'ai continué à chercher des informations auprès de divers auteurs.
La "théorie", je la comprenais et la connaissais. Mais régulièrement, dans la pratique et la vie quotidienne, j'étais dépassée par la situation, les réactions de mes enfants et surtout les miennes.
</p>
                        <p>En 2019, j'ai découvert la Parentalité Créative® au cours d'un cycle d'ateliers "Vivre et Grandir Ensemble®". S'est offert à moi une toute autre approche de l'accompagnement de l'enfant et une meilleure compréhension de moi-même.</p>
                        <p>Découvrant d'autres alternatives éducatives et constatant chaque jour le changement dans ma vie de famille, j'ai décidé de me former afin d'accompagner à mon tour les parents sur leur propre chemin.</p>
                        <p>En 2022, je suis devenue consultante en parentalité.</p>
                        <p>Aujourd'hui, j'accompagne les parents en ateliers de groupe ou atelier individuel, ainsi que les professionnels de la petite enfance et les enseignants.</p>
                        </div>
                    </article> */}

                </div>

                </div>


            </div>
        </section>
    );
}


export default React.memo(About);