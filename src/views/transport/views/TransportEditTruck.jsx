import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
export const TransportEditTruck = () => {
  const [object, setObject] = useState({})
  const { id } = useParams() //Este id es para entregar el valor de id al backend
  const navigate = useNavigate()
  const handleSet = ({ target: { value, name } }) => {
    const field = {}
    field[name] = value
    setObject({ ...object, ...field })
  }
  useEffect(() => {
    setObject({ ...object, ...{ id: id } })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(object)
    navigate(`/transport/configTruck`)
  }
  return (
    <Form onSubmit={handleSubmit} className="register-form-truck">
      {console.log(id)}
      <h3 className="title-register">Editar camión.</h3>
      <div className="container-input">
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nombre Camión</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="name"
              type="text"
              placeholder="Ingresa un nombre para identificar"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tipo de Transporte</Form.Label>
            <Form.Select size="md" onChange={handleSet} name="type_load">
              <option value="client">Container</option>
              <option value="transport">Container refrigerado</option>
              <option value="transport">Remolque cerrado</option>
              <option value="transport">Remolque abierto</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nacionalidad Patente</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="country_patent"
              type="text"
              placeholder="Ingresa la nacionalidad de la patente"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Número de Patente</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="patent"
              type="text"
              placeholder="Ingresa el numero de patente"
            />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="maken"
              type="text"
              placeholder="Ingresa la Marca del camión"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="model"
              type="text"
              placeholder="Ingresa el modelo del camión"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Color</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="color"
              type="text"
              placeholder="Ingresa el color de la carrocería"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Metros cúbicos remolque</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="cubic_meters"
              type="text"
              placeholder="Metros cúbicos del remolque"
            />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Alto del remolque</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="high_load"
              type="text"
              placeholder="Ingresa en metros el alto del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Ancho del remolque</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="wide_load"
              type="text"
              placeholder="Ingresa en metros el ancho del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Largo del remolque</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="long_load"
              type="text"
              placeholder="Ingresa en metros el largo del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Peso máximo de carga</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="max_weight"
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
