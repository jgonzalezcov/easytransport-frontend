import React from 'react'
import './registerStyle.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <Form onSubmit={handleSubmit} className="register-form">
      <h3 className="title-register">Registro de usuario.</h3>
      <div className="container-input">
        <div className="container-a">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tipo de cuenta</Form.Label>
            <Form.Select size="md">
              <option value="client">Cliente</option>
              <option value="transport">Transportista</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tu Password" />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirma tu password</Form.Label>
            <Form.Control type="password" placeholder="Confirma tu password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tus apellidos" />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu telefono" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu dirección" />
          </Form.Group>
          <Form.Group className="mb-3 select-img" controlId="formBasicPassword">
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

export default Register
