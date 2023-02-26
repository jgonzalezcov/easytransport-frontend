//Hacer validacion que las claves sea las misma
//La segunda clave y el tipo de cuenta no se envian al arreglo (Esta hecho)
//Hacer un use State que guarde el tipo de cuenta y dependiendo de esto seleccionar a
//cual endpoint se dirigira.

<<<<<<< Updated upstream
import { useState } from 'react'
import './registerStyle.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
//import { useNavigate } from 'react-router-dom'
import axios from 'axios'

=======
import { useState } from 'react';
import './registerStyle.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthService } from '../../services/authService';
>>>>>>> Stashed changes
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [retryPassword, setRetryPassword] = useState('');
  const [typeAccount, setTypeAccount] = useState('transport');
  const handleSetUser = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUser({ ...user, ...field });
  };

  const registrarUsuario = async () => {
    try {
      await AuthService.singin(user, typeAccount);
      alert('Usuario registrado con éxito');
      navigate('/');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleSubmit = (event) => {
    retryPassword !== user.password
      ? alert('La confirmación de contraseña no es igual a la contraseña')
      : registrarUsuario();
    event.preventDefault();
  };
  return (
<<<<<<< Updated upstream
    <>
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={user.email ? user.email : ''}
                onChange={handleSetUser}
                type="email"
                name="email"
                placeholder="Ingresa tu email"
              />
            </Form.Group>
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
          <div className="container-c">
            {' '}
            <Form.Group className="mb-3 select-img" controlId="formBasicTextE">
              <Form.Label>Foto</Form.Label>
              <Form.Control
                value={user.img ? user.img : ''}
                onChange={handleSetUser}
                type="file"
                name="img"
              />
            </Form.Group>
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
=======
    <Form onSubmit={handleSubmit} className="register-form">
      <h3 className="title-register">Registro de usuario.</h3>
      <div className="container-input">
        <div className="container-a">
          <Form.Group className="mb-3" controlId="formBasicTypeAccount">
            <Form.Label>Tipo de cuenta</Form.Label>
            <Form.Select
              size="md"
              onChange={(e) => {
                setTypeAccount(e.target.value);
              }}
            >
              <option value="transport">Transportista</option>
              <option value="client">Cliente</option>
            </Form.Select>
          </Form.Group>
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
>>>>>>> Stashed changes
        </div>
        <div className="container-bt-register">
          <Button className="btn-register" variant="primary" type="submit">
            Aceptar
          </Button>
        </div>
<<<<<<< Updated upstream
      </Form>
    </>
  )
}
=======
        <div className="container-c">
          {' '}
          <Form.Group className="mb-3 select-img" controlId="formBasicTextE">
            <Form.Label>Foto</Form.Label>
            <Form.Control
              value={user.img ? user.img : ''}
              onChange={handleSetUser}
              type="file"
              name="img"
            />
          </Form.Group>
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
      </div>
      <div className="container-bt-register">
        <Button className="btn-register" variant="primary" type="submit">
          Aceptar
        </Button>
      </div>
    </Form>
  );
};
>>>>>>> Stashed changes

export default Register;
