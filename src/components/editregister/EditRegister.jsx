import { useState } from 'react'
import './editRegisterStyle.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
//import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ImgEdit from '../imgEdit/ImgEdit'
const EditRegister = () => {
  // const navigate = useNavigate()
  const [user, setUser] = useState({})
  const [viewEdit, setViewEdit] = useState('ini')
  const [retryPassword, setRetryPassword] = useState('')
  const [typeAccount, setTypeAccount] = useState('transport')
  const handleSetUser = ({ target: { value, name } }) => {
    const field = {}
    field[name] = value
    setUser({ ...user, ...field })
  }

  const edit = async () => {
    const urlServer = 'http://localhost:5000'
    const endpoint =
      typeAccount === 'transport' ? '/transport/singin' : '/client/singin'
    try {
      await axios.post(urlServer + endpoint, user)
      alert('Usuario registrado con éxito')

      // navigate('/')
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  const handleSubmit = (event) => {
    if (viewEdit === 'ini') {
      edit()
      setViewEdit('ini')
    } else if (viewEdit === 'password') {
      if (retryPassword !== user.password) {
        alert('La confirmación de contraseña no es igual a la contraseña')
      } else {
        edit()
        setViewEdit('ini')
      }
    } else if (viewEdit === 'edit') {
      edit()
      setViewEdit('ini')
    }

    event.preventDefault()
  }
  return (
    <Form onSubmit={handleSubmit} className="register-form">
      <h3 className="title-register">Editar Usuario.</h3>
      <div className="container-picture-profile">
        {<ImgEdit viewEdit={viewEdit} setViewEdit={setViewEdit} />}
      </div>
      {viewEdit === 'ini' ? (
        ''
      ) : viewEdit === 'password' ? (
        <div className="container-c confirm-password">
          {' '}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={user.password ? user.password : ''}
              onChange={handleSetUser}
              type="password"
              name="password"
              placeholder="Ingresa tu Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPasswordB">
            <Form.Label>Confirma tu password</Form.Label>
            <Form.Control
              value={retryPassword}
              onChange={(e) => setRetryPassword(e.target.value)}
              type="password"
              placeholder="Confirma tu password"
            />
          </Form.Group>
        </div>
      ) : viewEdit === 'edit' ? (
        <div className="container-input">
          <div className="container-a">
            <Form.Group className="mb-3" controlId="formBasicTextA">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                value={user.name ? user.name : ''}
                onChange={handleSetUser}
                type="text"
                name="name"
                placeholder="Ingresa tu nombre"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTextB">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                value={user.lastname ? user.lastname : ''}
                onChange={handleSetUser}
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
                value={user.phone ? user.phone : ''}
                onChange={handleSetUser}
                type="text"
                name="phone"
                placeholder="Ingresa tu telefono"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTextD">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                value={user.address ? user.address : ''}
                onChange={handleSetUser}
                type="text"
                name="address"
                placeholder="Ingresa tu dirección"
              />
            </Form.Group>
          </div>
        </div>
      ) : (
        ''
      )}

      <div className="container-bt-register">
        <Button className="btn-register" variant="primary" type="submit">
          Aceptar
        </Button>
      </div>
    </Form>
  )
}

export default EditRegister
