import React from 'react';

// import PROFILEPICTURE from '../../assets/profile.png';

import  ILLUSTRATION   from '../../assets/illustration.jpg'

import './WelcomeStyles.scss';

function Welcome() {



    return (
        <section id='presentation'>


            <div className="container presentation__container presentation__content">
                <div className="presentation__me">
                    <div className='presentation__me-image'>
                        <img src={ILLUSTRATION} alt="" />
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

                </div>

                </div>


            </div>
        </section>
    );
}


export default React.memo(Welcome);