import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
export const TransportEditDriver = () => {
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
    navigate(`/transport/configDriver`)
    console.log(object)
  }
  return (
    <Form onSubmit={handleSubmit} className="register-form-driver">
      {console.log(id)}
      <h3 className="title-register">Editar Conductor</h3>
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
