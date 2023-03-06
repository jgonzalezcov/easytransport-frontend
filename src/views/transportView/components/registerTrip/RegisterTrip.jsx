import React from 'react';
import './tripStyle.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export const RegisterTrip = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit} className="register-form-truck">
      <h3 className="title-register">Nuevo viaje.</h3>
      <div className="container-input">
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nombre Camión</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre del camión"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tipo de Transporte</Form.Label>
            <Form.Select size="md">
              <option value="client">Conatainer</option>
              <option value="transport">Conatainer refrigerado</option>
              <option value="transport">Remolque cerrado</option>
              <option value="transport">Remolque abierto</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nombre del Conductor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre del Conductor"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Pais de carga</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el pais en que comienza el viaje que ofreces"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Ciudad de carga</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa la ciudad en donde estaras disponible"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Pais destino</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el pais de destino del viaje que ofreces"
            />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Ciudad de destino</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa la ciudad de destino"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Metros cubicos disponibles</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa los metros cubicos que estaran disponibles"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Alto disponible del remolque</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa en metros el alto disponible del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Ancho disponible del remolque</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa en metros el ancho disponible del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Largo disponible del remolque</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa en metros el largo disponible del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Peso máximo disponible de carga</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el peso máximo disponoble de carga"
            />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Fecha de inicio del viaje</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Hora inicio del viaje</Form.Label>
            <Form.Control type="time" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Fecha de fin del viaje</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Hora fin del viaje</Form.Label>
            <Form.Control type="time" />
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
