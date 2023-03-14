import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export const ClientEditShipment = () => {
  const { id } = useParams() //Este id es para entregar el valor de id al backend
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/client/listShipment')
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        {console.log(id)}
        <h3 className="title-register">
          Edita las caracteristicas de tu envío
        </h3>
        <div className="container-input">
          <div className="container-b">
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Metros cubicos del envío</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa los metros cubicos que estaran disponibles"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Alto del envío</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa en metros el alto disponible del remolque"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Ancho del envío</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa en metros el ancho disponible del remolque"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Largo del envío</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa en metros el largo disponible del remolque"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Peso del envío</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el peso máximo disponoble de carga"
              />
            </Form.Group>
          </div>
        </div>
        <div className="container-bt-register">
          <Button className="btn-register" variant="primary" type="submit">
            Guardar cambios
          </Button>
        </div>
      </Form>
    </div>
  )
}
