
import React from 'react'
import './BackgroundMouseStyles.scss'

function BackgroundMouse() {

  const parallax = (e) => {
    console.log(
      'e.pageX: ' + e.pageX,"je passe par la "
    );
  this.getElementByClassName('layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed')
      const x = (window.innerWidth - e.pageX * speed) / 100
      const y = (window.innerHeight - e.pageY * speed) / 100
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      console.log(
        'e.pageX: ' + e.pageX,
      );
    })
  }
  return (
    <section>
      <div className='container' onMouseMove={parallax}>
        <div className='layer' data-speed='2'>
          
        </div>
        <div className='layer' data-speed='4'>

        </div>
        </div>
    </section>
  )
}

export default BackgroundMouse