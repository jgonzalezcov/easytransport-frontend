import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
export const TransportEditTruck = () => {
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/transport/configTruck`)
  }
  return (
    <Form onSubmit={handleSubmit} className="register-form-truck">
      <h3 className="title-register">Editar camión.</h3>
      <div className="container-input">
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nombre Camión</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa un nombre para identificar"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tipo de Transporte</Form.Label>
            <Form.Select size="md">
              <option value="client">Conatainer</option>
              <option value="transport">Conatainer refrigerado</option>
              <option value="transport">Remolque cerrado</option>
              <option value="transport">Remolque abierto</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nacionalidad Patente</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa la nacionalidad de la patente"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Número de Patente</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el numero de patente"
            />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa la Marca del camión"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el modelo del camión"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Color</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el color de la carrocería"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Metros cubicos remolque</Form.Label>
            <Form.Control
              type="text"
              placeholder="Metros cúbicos del remolque"
            />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Alto del remolque</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa en metros el alto del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Ancho del remolque</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa en metros el ancho del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Largo del remolque</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa en metros el largo del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Peso máximo de carga</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el peso máximo de carga"
            />
          </Form.Group>
        </div>
      </div>
      <div className="container-bt-register">
        <Button className="btn-register" variant="primary" type="submit">
          Aceptar
        </Button>
      </div>
    </Form>
  )
}
