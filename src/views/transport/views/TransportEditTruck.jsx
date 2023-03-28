import React, { useState, useEffect, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { DataContext } from '../../../contexts/DataProvider'
import { getTokenData } from '../../../helpers/Token.helper'
import { TruckService } from '../../../services/truckService'
export const TransportEditTruck = () => {
  const { trucks, setTrucks } = useContext(DataContext)
  const [object, setObject] = useState({})
  const getToken = getTokenData()
  const { id } = useParams() //Este id es para entregar el valor de id al backend
  const navigate = useNavigate()
  const handleSet = ({ target: { value, name } }) => {
    const field = {}
    field[name] = value
    setObject({ ...object, ...field })
  }

  useEffect(() => {
    setObject({ ...object, ...{ id: id } })
    const truckEdit = trucks.filter((t) => t.id === Number.parseInt(id, 10))[0]
    console.log(truckEdit)
    setObject({})
    setObject({ ...object, ...truckEdit })
  }, [])

  const editTruck = async () => {
    try {
      const tokenDataId = getToken.id
      console.log('Enviado al backend')
      await TruckService.updatetruck(object, object.id)
      alert('Camion editado con éxito')
      navigate('/transport/configTruck')
      const respTrucks = await TruckService.list(tokenDataId)
      setTrucks(respTrucks.data)
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    editTruck()
  }
  return (
    <Form onSubmit={handleSubmit} className="register-form-truck">
      <h3 className="title-register">Editar camión.</h3>
      <div className="container-input">
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nombre Camión</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.name ? object.name : ''}
              name="name"
              type="text"
              placeholder="Ingresa un nombre para identificar"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tipo de Transporte</Form.Label>
            <Form.Select
              onChange={handleSet}
              value={object.type_load ? object.type_load : ''}
              size="md"
              name="type_load"
            >
              <option value="client">Conatainer</option>
              <option value="transport">Conatainer refrigerado</option>
              <option value="transport">Remolque cerrado</option>
              <option value="transport">Remolque abierto</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nacionalidad Patente</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.country_patent ? object.country_patent : ''}
              name="country_patent"
              type="text"
              placeholder="Ingresa la nacionalidad de la patente"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Número de Patente</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.patent ? object.patent : ''}
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
              value={object.maken ? object.maken : ''}
              name="maken"
              type="text"
              placeholder="Ingresa la Marca del camión"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.model ? object.model : ''}
              name="model"
              type="text"
              placeholder="Ingresa el modelo del camión"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Color</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.color ? object.color : ''}
              name="color"
              type="text"
              placeholder="Ingresa el color de la carrocería"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Metros cúbicos remolque</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.cubic_meters ? object.cubic_meters : ''}
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
              value={object.high_load ? object.high_load : ''}
              name="high_load"
              type="text"
              placeholder="Ingresa en metros el alto del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Ancho del remolque</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.wide_load ? object.wide_load : ''}
              name="wide_load"
              type="text"
              placeholder="Ingresa en metros el ancho del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Largo del remolque</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.long_load ? object.long_load : ''}
              name="long_load"
              type="text"
              placeholder="Ingresa en metros el largo del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Peso máximo de carga</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.max_weight ? object.max_weight : ''}
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
