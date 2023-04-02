import React, { useState, useEffect, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { DataContext } from '../../../contexts/DataProvider'
import { getTokenData } from '../../../helpers/Token.helper'
import { DriverService } from '../../../services/driverService'
export const TransportEditDriver = () => {
  const { drivers, setDrivers } = useContext(DataContext)
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
    const driverEdit = drivers.filter(
      (t) => t.id === Number.parseInt(id, 10)
    )[0]
    setObject({})
    setObject({ ...object, ...driverEdit })
  }, [])

  const editDriver = async () => {
    try {
      const tokenDataId = getToken.id
      await DriverService.updatedriver(object, object.id)
      alert('Conductor editado con éxito')
      navigate('/transport/configDriver')
      const respDrivers = await DriverService.list(tokenDataId)
      setDrivers(respDrivers.data)
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    editDriver()
  }
  return (
    <Form onSubmit={handleSubmit} className="register-form-driver">
      <h3 className="title-register">Editar Conductor</h3>
      <div className="container-input">
        <div className="container-b">
          <Form.Group className="mb-4" controlId="formBasicText">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.name ? object.name : ''}
              name="name"
              type="text"
              placeholder="Ingresa el nombre del conducto"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicText">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.last_name ? object.last_name : ''}
              name="last_name"
              type="text"
              placeholder="Ingresa los apellidos del conducto"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicText">
            <Form.Label>Celular de contacto conductor</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.phone ? object.phone : ''}
              name="phone"
              type="text"
              placeholder="Ingresa el número de contacto del conductor"
            />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-4" controlId="formBasicText">
            <Form.Label>Rut</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.dni ? object.dni : ''}
              name="dni"
              type="text"
              placeholder="Ingresa el RUT del conductor"
            />
          </Form.Group>
          <Form.Group className="mb-4 select-img" controlId="formBasicPassword">
            <Form.Label>Foto</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.img ? object.img : ''}
              type="text"
              name="img"
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
