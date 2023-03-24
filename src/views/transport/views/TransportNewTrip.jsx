import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'

export const TransportNewTrip = () => {
  const navigate = useNavigate()
  const [object, setObject] = useState({})
  const handleSet = ({ target: { value, name } }) => {
    const field = {}
    field[name] = value
    setObject({ ...object, ...field })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(object)
    navigate('/transport')
  }
  return (
    <Form onSubmit={handleSubmit} className="register-form-truck">
      <h3 className="title-register">Nuevo viaje</h3>
      <div className="container-input">
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nombre Camión</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="truck_name"
              type="text"
              placeholder="Ingresa el nombre del camión"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tipo de Transporte</Form.Label>
            <Form.Select size="md" onChange={handleSet} name="type_load_trip">
              <option value="client">Container</option>
              <option value="transport">Container refrigerado</option>
              <option value="transport">Remolque cerrado</option>
              <option value="transport">Remolque abierto</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nombre del Conductor</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="name_driver"
              type="text"
              placeholder="Ingresa el nombre del Conductor"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Pais de carga</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="country_origin"
              type="text"
              placeholder="Ingresa el pais en que comienza el viaje que ofreces"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Ciudad de carga</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="city_origin"
              type="text"
              placeholder="Ingresa la ciudad en donde estaras disponible"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Pais destino</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="country_destiny"
              type="text"
              placeholder="Ingresa el pais de destino del viaje que ofreces"
            />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Ciudad de destino</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="city_destiny"
              type="text"
              placeholder="Ingresa la ciudad de destino"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Metros cúbicos disponibles</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="cubic_meters_trip"
              type="text"
              placeholder="Ingresa los metros cubicos que estaran disponibles"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Alto disponible del remolque</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="high_load_trip"
              type="text"
              placeholder="Ingresa en metros el alto disponible del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Ancho disponible del remolque</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="wide_load_trip"
              type="text"
              placeholder="Ingresa en metros el ancho disponible del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Largo disponible del remolque</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="high_load_trip"
              type="text"
              placeholder="Ingresa en metros el largo disponible del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Peso máximo disponible de carga</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="max_weight_trip"
              type="text"
              placeholder="Ingresa el peso máximo disponoble de carga"
            />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Fecha de inicio del viaje</Form.Label>
            <Form.Control
              type="date"
              onChange={handleSet}
              name="trip_date_ini"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Hora inicio del viaje</Form.Label>
            <Form.Control type="time" onChange={handleSet} name="time_ini" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Fecha de fin del viaje</Form.Label>
            <Form.Control
              type="date"
              onChange={handleSet}
              name="trip_date_end"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Hora fin del viaje</Form.Label>
            <Form.Control type="time" onChange={handleSet} name="time_end" />
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
