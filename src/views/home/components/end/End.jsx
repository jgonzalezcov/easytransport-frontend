import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './endStyle.css';
const End = () => {
  return (
    <div className="end">
      <div className="end-container-text">
        <div className="end-title-container">
          <h3 className="end-title mb-0">Seamos responsables</h3>
          <FontAwesomeIcon className="end-title-icon" icon={faLeaf} />
        </div>

        <h4 className="end-descript">
          <p>
            Optimicemos nuestros transportes.
            <br />
            <br />
            Al optimizar el traslado de nuestras cargas, podemos evitar el uso
            de transportes solo en el viaje de ida, ya que al utilizar los viajes
            de retornos, estaremos ayudando a evitar viajes incesarios y con ello
            bajar la emision de CO2 para el traslado de nuestras cargas.
          </p>
        </h4>
      </div>
    </div>
  );
};

export default End;
