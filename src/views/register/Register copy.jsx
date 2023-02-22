//Hacer validacion que las claves sea las misma
//La segunda clave y el tipo de cuenta no se envian al arreglo (Esta hecho)
//Hacer un use State que guarde el tipo de cuenta y dependiendo de esto seleccionar a
//cual endpoint se dirigira.

import { useState } from 'react'
import './registerStyle.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
//import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
  // const navigate = useNavigate()
  const [usuario, setUsuario] = useState({})
  const [typeAccount, setTypeAccount] = useState('transport')
  const [file, setFile] = useState(null)
  const handleSetUsuario = ({ target: { value, name, files } }) => {
    const field = {}
    field[name] = value
    if (name === 'img') {
      console.log('archivos', files[0])
    }
    setUsuario({ ...usuario, ...field })
  }

  const getFormData = (usuario) => {
    const formData = new FormData()
    formData.append('email', usuario.email)
    formData.append('img', usuario.img)
    return formData
  }

  const registrarUsuario = async () => {
    const urlServer = 'http://localhost:5000'
    const endpoint =
      typeAccount === 'transport' ? '/transport/singin' : '/client/singin'
    try {
      await axios.post(urlServer + endpoint, getFormData(usuario), {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      alert('Usuario registrado con éxito')
      console.log(typeAccount)
      // navigate('/')
    } catch (error) {
      alert('Algo salió mal ...')
    }
  }

  const handleSubmit = (event) => {
    console.log(usuario)
    registrarUsuario()
    event.preventDefault()
  }
  return (
    <Form onSubmit={handleSubmit} className="register-form">
      <h3 className="title-register">Registro de usuario.</h3>
      <div className="container-input">
        <div className="container-a">
          <Form.Group className="mb-3" controlId="formBasicTypeAccount">
            <Form.Label>Tipo de cuenta</Form.Label>
            <Form.Select
              size="md"
              onChange={(e) => {
                setTypeAccount(e.target.value)
              }}
            >
              <option value="client">Cliente</option>
              <option value="transport">Transportista</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={usuario.email ? usuario.email : ''}
              onChange={handleSetUsuario}
              type="email"
              name="email"
              placeholder="Ingresa tu email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={usuario.password ? usuario.password : ''}
              onChange={handleSetUsuario}
              type="password"
              name="password"
              placeholder="Ingresa tu Password"
            />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicPasswordB">
            <Form.Label>Confirma tu password</Form.Label>
            <Form.Control type="password" placeholder="Confirma tu password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTextA">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              value={usuario.name ? usuario.name : ''}
              onChange={handleSetUsuario}
              type="text"
              name="name"
              placeholder="Ingresa tu nombre"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTextB">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              value={usuario.lastname ? usuario.lastname : ''}
              onChange={handleSetUsuario}
              type="text"
              name="lastname"
              placeholder="Ingresa tus apellidos"
            />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicTextC">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              value={usuario.phone ? usuario.phone : ''}
              onChange={handleSetUsuario}
              type="text"
              name="phone"
              placeholder="Ingresa tu telefono"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTextD">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              value={usuario.address ? usuario.address : ''}
              onChange={handleSetUsuario}
              type="text"
              name="address"
              placeholder="Ingresa tu dirección"
            />
          </Form.Group>
          <Form.Group className="mb-3 select-img" controlId="formBasicTextE">
            <Form.Label>Foto</Form.Label>
            <Form.Control
              value={usuario.img ? usuario.img : ''}
              onChange={handleSetUsuario}
              type="file"
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

export default Register
