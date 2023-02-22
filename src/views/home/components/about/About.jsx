import React from 'react'
import hands from './imgs/hands.jpg'
import './aboutStyle.css'
const About = () => {
  return (
    <div className="about">
      <img className="about-img" src={hands} alt="" />
      <div className="text-container">
        <h3 className="text-about-title">Te ayudamos a trasladar tu cargas</h3>
        <h4 className="text-about-secondary">
          Te ayudamos a trasladar tu carga, colocando a tu disposición la red de
          transportista.
        </h4>
        <h4 className="text-about-secondary">
          Como lo hacemos, dejamos a disposición de los transportista la
          posibilidad de publicar sus viajes y la carga que ellos pueden
          transportar en dicho viaje.
        </h4>
        <h4 className="text-about-secondary">
          Por que usar Easytransport, porque te ayudaremos a encontrar el
          transporte a tu medida.
        </h4>
      </div>
    </div>
  )
}

export default About
