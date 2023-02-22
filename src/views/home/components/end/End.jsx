import './endStyle.css'
import hoja from './imgs/hoja.png'
const End = () => {
  return (
    <div className="end">
      <div className="end-container-text">
        <div className="end-title-container">
          <h3 className="end-title">Seamos responsables</h3>
          <img src={hoja} alt="" />
        </div>

        <h4 className="end-descript">Optimicemos nuestros transportes.</h4>
        <h4 className="end-descript">
          Al optimizar el traslado de nuestras cargas, podemos evitar el uso de
          transportes solo en el viaje de ida ya que al utilizar los viajes de
          retornos estaremos ayudando a evitar viajes innecesarios y con ello
          bajar la emision de co2 para el traslado de nuestras cargas.
        </h4>
      </div>
    </div>
  )
}

export default End
