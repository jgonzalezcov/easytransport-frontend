import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useState } from 'react'
import './loginStyle.css'
import { DataContext } from '../../contexts/DataProvider'
import { AuthService } from '../../services/authService'
import { useNavigate } from 'react-router-dom'

function Login(props) {
  const navigate = useNavigate()
  const { SetTypeProfile, setIsAuth } = useContext(DataContext)
  const [classState, setClassState] = useState(['click-on', 'click-off'])
  const [accountType, setAccountType] = useState('client')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const acoountSet = (type) => {
    setAccountType(type)
    type === 'client'
      ? setClassState(['click-on', 'click-off'])
      : setClassState(['click-off', 'click-on'])
  }

  const redirectUserHome = (accountType) => {
    const url = accountType === 'transport' ? '/transport' : 'client'
    navigate(url)
  }

  const handleSubmit = async (event) => {
    props.setstate('ini')
    event.preventDefault()
    await AuthService.login(email, password, accountType)
    setIsAuth(true)
    SetTypeProfile(accountType)
    redirectUserHome(accountType)
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
        <Form.Control
          type="email"
          placeholder="Ingresa tu email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-7" controlId="formBasicPassword">
        <Form.Label className="title-input-login">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresa tu Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button className="btn-submit bt-accept" variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
  )
}

export default Login
