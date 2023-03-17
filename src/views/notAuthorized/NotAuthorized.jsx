//Hacer validacion que las claves sea las misma
//La segunda clave y el tipo de cuenta no se envian al arreglo (Esta hecho)
//Hacer un use State que guarde el tipo de cuenta y dependiendo de esto seleccionar a
//cual endpoint se dirigira.

import { useState } from 'react'
import './notAuthorizedStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const NotAuthorized = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="register-form container-error-authorized">
        <FontAwesomeIcon icon={faLock} className="icon-not-authorized" />
        <h3 className="title-register title-not-authorized">
          Sin autorización para acceder a este contenido. Inicia sesión para
          acceder a este contenido con el tipo de cuenta registrada (cliente o
          transportista).
        </h3>
      </div>
    </>
  )
}

export default NotAuthorized
