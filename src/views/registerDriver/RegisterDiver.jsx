import React from 'react'
import './registerDriverStyle.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const RegisterDiver = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <Form onSubmit={handleSubmit} className="register-form-driver">
      <h3 className="title-register">Registro de conductores</h3>
      <div className="container-input">
        <div className="container-a">
          <Form.Group className="mb-4" controlId="formBasicText">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre del conducto"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicText">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa los apellidos del conducto"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicText">
            <Form.Label>Celular de contacto conductor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el número de contacto del conductor"
            />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-4" controlId="formBasicText">
            <Form.Label>Rut</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el RUT del conductor"
            />
          </Form.Group>
          <Form.Group className="mb-4 select-img" controlId="formBasicPassword">
            <Form.Label>Foto</Form.Label>
            <Form.Control type="file" />
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

export default RegisterDiver
