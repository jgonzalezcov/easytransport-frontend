import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useState } from 'react'
import './loginStyle.css'

function Login(props) {
  const [classState, setClassState] = useState(['click-on', 'click-off'])
  const acoountSet = (type) => {
    type === 'client'
      ? setClassState(['click-on', 'click-off'])
      : setClassState(['click-off', 'click-on'])
  }
  const handleSubmit = (event) => {
    props.setstate('ini')
    event.preventDefault()
  }
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <ButtonGroup
        className="container-btn-type-account "
        aria-label="Basic example"
      >
        <Button
          onClick={() => acoountSet('client')}
          className={`btn-type-account ${classState[0]}`}
          variant="secondary"
        >
          Cliente
        </Button>
        <Button
          onClick={() => acoountSet('transport')}
          className={`btn-type-account ${classState[1]}`}
          variant="secondary"
        >
          Transportista
        </Button>
      </ButtonGroup>
      <Form.Group className="mb-7" controlId="formBasicEmail">
        <Form.Label className="title-input-login">Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu email" />
      </Form.Group>

      <Form.Group className="mb-7" controlId="formBasicPassword">
        <Form.Label className="title-input-login">Password</Form.Label>
        <Form.Control type="password" placeholder="Ingresa tu Password" />
      </Form.Group>

      <Button className="btn-submit bt-accept" variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
  )
}

export default Login
