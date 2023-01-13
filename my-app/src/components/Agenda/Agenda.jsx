import React from 'react'
import { Link } from 'react-router-dom'

import './AgendaStyles.scss';

function Agenda() {
  return (
    <section className='container'>
        <h1 className='iscoming'>Coming soon...</h1>
        <a href=""><Link to='/'>retour à l'acceuil</Link></a>
        
        </section>
  )
}

export default Agenda