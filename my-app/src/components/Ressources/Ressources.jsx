import React from 'react'
import'./RessourcesStyles.scss'

function Ressources() {
  return (
    <section className='container ressources'>
        <h1 >Quelques petits liens ...</h1>
        <div>
            
        <iframe width="560" height="315" src="https://www.youtube.com/embed/UaxN8ZakvrE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div>
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/234335882?h=ac0229181e" width="640" height="360" frameborder="0" allowfullscreen></iframe>
        </div>
    </section>
  )
}

export default Ressources