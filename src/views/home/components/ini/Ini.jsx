import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Login from '../../../../components/login/Login'
import './iniStyle.css'
const Ini = () => {
  const [state, setstate] = useState('ini')

  return (
    <div className="ini">
      {state === 'ini' ? (
        <div className="ini-container-text">
          <h3 className="ini-name-company">EasyTransport.</h3>
          <h4 className="ini-descript">
            Te ayudamos a buscar un transporte a tu medida.
          </h4>
          <h4 className="ini-descript">
            Nunca fue tan fácil transportar tu carga.
          </h4>
          <div className="container-btn">
            <Button
              className="btn-login"
              variant="success"
              onClick={() => setstate('login')}
            >
              INICIAR SESIÓN
            </Button>{' '}
          </div>
        </div>
      ) : (
        <Login setstate={setstate} />
      )}
    </div>
  )
}

export default Ini
