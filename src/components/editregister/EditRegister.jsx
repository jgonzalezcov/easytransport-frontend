import { useState, useEffect } from 'react'
import './editRegisterStyle.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { getTokenData } from '../../helpers/Token.helper'
import { AuthService } from '../../services/authService'
import ImgEdit from '../imgEdit/ImgEdit'

const EditRegister = (type) => {
  const tokenData = getTokenData()
  const [user, setUser] = useState({})
  const [passw, setPass] = useState({})
  const [viewEdit, setViewEdit] = useState('ini')
  const [retryPassword, setRetryPassword] = useState('')
  const [typeAccount, setTypeAccount] = useState('transport')

  const handleSetUser = ({ target: { value, name } }) => {
    const field = {}
    field[name] = value
    setUser({ ...user, ...field })
  }

  const handleSetPassword = ({ target: { value, name } }) => {
    const field = {}
    field[name] = value
    setPass({ ...passw, ...field })
  }

  const editUser = async () => {
    try {
      const id = tokenData.id
      await AuthService.editUser(user, id, typeAccount)
      setUser({})
      alert('Usuario editado con éxito')
    } catch (error) {
      alert(error.response.data.message)
      setUser({})
    }
  }

  const editPassword = async () => {
    try {
      const id = tokenData.id
      await AuthService.editPasword(passw, id, typeAccount)
      setPass({})
      setRetryPassword('')
      alert('Contraseña modificada con éxito')
    } catch (error) {
      alert(error.response.data.message)
      setPass({})
    }
  }

  useEffect(() => {
    setUser({
      ...user,
      ...{
        name: tokenData.name,
        last_name: tokenData.last_name,
        phone: tokenData.phone,
        address: tokenData.address,
        email: tokenData.email,
      },
    })
  }, [viewEdit])

  const handleSubmit = (event) => {
    if (viewEdit === 'ini') {
    } else if (viewEdit === 'picture') {
    } else if (viewEdit === 'password') {
      if (retryPassword !== passw.password) {
        alert('La confirmación de contraseña no es igual a la contraseña')
      } else {
        editPassword()
      }
    } else if (viewEdit === 'edit') {
      editUser()
    }
    setViewEdit('ini')
    event.preventDefault()
  }
  return (
    <Form onSubmit={handleSubmit} className="register-form">
      <h3 className="title-register">Editar Usuario.</h3>
      <div className="container-picture-profile">
        {
          <ImgEdit
            viewEdit={viewEdit}
            setViewEdit={setViewEdit}
            setUser={setUser}
          />
        }
      </div>
      {viewEdit === 'ini' ? (
        ''
      ) : viewEdit === 'password' ? (
        <div className="container-b mt-3 confirm-password">
          {' '}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={passw.password ? passw.password : ''}
              onChange={handleSetPassword}
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
        <div className="container-input mt-3">
          <div className="container-b">
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
                value={user.last_name ? user.last_name : ''}
                onChange={handleSetUser}
                type="text"
                name="last_name"
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
