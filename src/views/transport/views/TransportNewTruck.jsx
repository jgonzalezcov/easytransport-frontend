import React, { useState, useEffect, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { getTokenData } from '../../../helpers/Token.helper'
import { TruckService } from '../../../services/truckService'
import { DataContext } from '../../../contexts/DataProvider'
export const TransportNewTruck = () => {
  const { setTrucks } = useContext(DataContext)
  const getToken = getTokenData()
  const navigate = useNavigate()
  const [object, setObject] = useState({ type_load: 'Container' })
  const handleSet = ({ target: { value, name } }) => {
    const field = {}
    field[name] = value
    setObject({ ...object, ...field })
  }

  const registerTruck = async () => {
    try {
      const tokenDataId = getToken.id
      console.log('Enviado al backend')
      await TruckService.createtruck(object)
      alert('Camion registrado con éxito')
      navigate('/transport/configTruck')
      const respTrucks = await TruckService.list(tokenDataId)
      setTrucks(respTrucks.data)
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    registerTruck()
  }
  useEffect(() => {
    setObject({ ...object, ...{ transport_id: getToken.id } })
  }, [])
  return (
    <Form onSubmit={handleSubmit} className="register-form-truck">
      <h3 className="title-register">Registro de camión.</h3>
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
              <option value="container">Container</option>
              <option value="container refrigerado">
                Container refrigerado
              </option>
              <option value="Remolque cerrado">Remolque cerrado</option>
              <option value="Remolque abierto">Remolque abierto</option>
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
