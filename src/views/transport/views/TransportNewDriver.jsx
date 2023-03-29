import React, { useState, useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { DriverService } from '../../../services/driverService'
import { getTokenData } from '../../../helpers/Token.helper'
import { DataContext } from '../../../contexts/DataProvider'
export const TransportNewDriver = () => {
  const { setDrivers } = useContext(DataContext)
  const getToken = getTokenData()
  const navigate = useNavigate()
  const [object, setObject] = useState({})
  const handleSet = ({ target: { value, name } }) => {
    const field = {}
    field[name] = value
    setObject({ ...object, ...field })
  }

  const registerDriver = async () => {
    try {
      const tokenDataId = getToken.id
      console.log('Enviado al backend')
      console.log(object)
      await DriverService.createdriver(object)
      alert('Conductor registrado con éxito')
      const respDrivers = await DriverService.list(tokenDataId)
      setDrivers(respDrivers.data)
      navigate('/transport/configDriver')
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    registerDriver()
  }
  useEffect(() => {
    setObject({ ...object, ...{ transport_id: getToken.id } })
  }, [])
  return (
    <Form onSubmit={handleSubmit} className="register-form-driver">
      <h3 className="title-register">Registro de Conductor</h3>
      <div className="container-input">
        <div className="container-b">
          <Form.Group className="mb-4" controlId="formBasicText">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="name"
              type="text"
              placeholder="Ingresa el nombre del conducto"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicText">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="last_name"
              type="text"
              placeholder="Ingresa los apellidos del conducto"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicText">
            <Form.Label>Celular de contacto conductor</Form.Label>
            <Form.Control
              onChange={handleSet}
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
              name="dni"
              type="text"
              placeholder="Ingresa el RUT del conductor"
            />
          </Form.Group>
          <Form.Group className="mb-4 select-img" controlId="formBasicPassword">
            <Form.Label>Foto</Form.Label>
            <Form.Control type="file" onChange={handleSet} name="img" />
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
