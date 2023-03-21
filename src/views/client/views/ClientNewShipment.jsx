import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { faSave, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Table } from 'react-bootstrap';
import { Status } from '../../../components/status/Status';
import { UserData } from '../../../components/userData/UserData';
import { Loader } from '../../../components/loader/Loader';

export const ClientNewShipment = () => {
  const [id, setId] = useState(0);
  const [viewFind, setViewFind] = useState(1);
  const [isSaving, setIsSaving] = useState(false);
  const [object, setObject] = useState({});
  const navigate = useNavigate();
  const handleSet = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setObject({ ...object, ...field });
  };
  const cancel = (event) => {
    setViewFind(1);
  };
  const next = (event) => {
    event.preventDefault();
    setViewFind(2);
  };
  const next2 = (event) => {
    setObject({ ...object, ...{ trip_id: id } });
    setViewFind(3);
  };
  const selectTrip = (i) => {
    setId(i);
  };
  const handleSubmit = (event) => {
    setViewFind(1);
    setIsSaving(true);
    // navigate('/client');
    console.log(object);
  };

  const getStatus = (status) => {
    if (status === 'No comenzado') return 'not_started';
    if (status === 'En progreso') return 'in_progress';
    if (status === 'Finalizado') return 'finalized';
    return '';
  };
  const trips = [
    {
      id: 1,
      transport_id: 1,
      truck_id: 1,
      drive_id: 1,
      drive_phone: '12345678',
      drive_name: 'Aquiles Baeza',
      origin: 'Valdivia',
      destiny: 'Santiago',
      trip_date_ini: '2023-01-01',
      time_ini: '06:00',
      time_end: '16:00',
      time_date_end: '06:00',
      type_load_trip: '',
      cubic_meters_trip: 20,
      max_height_trip: 1,
      long_load_trip: 1,
      wide_load_trip: 1,
      height_load_trip: 1,
      status: 'En progreso',
    },
    {
      id: 2,
      transport_id: 1,
      truck_id: 1,
      drive_id: 1,
      drive_phone: '12345678',
      drive_name: 'Alan brito',
      origin: 'Puerto Mont',
      destiny: 'San antonio',
      trip_date_ini: '2023-01-01',
      time_ini: '06:00',
      time_end: '16:00',
      time_date_end: '06:00',
      type_load_trip: '',
      cubic_meters_trip: 20,
      max_height_trip: 1,
      long_load_trip: 1,
      wide_load_trip: 1,
      height_load_trip: 1,
      status: 'Finalizado',
    },
    {
      id: 3,
      transport_id: 1,
      truck_id: 1,
      drive_id: 1,
      drive_phone: '12345678',
      drive_name: 'Elba Lazo',
      origin: 'Arica',
      destiny: 'Valparaíso',
      trip_date_ini: '2023-01-01',
      time_ini: '06:00',
      time_end: '16:00',
      time_date_end: '06:00',
      type_load_trip: '',
      cubic_meters_trip: 20,
      max_height_trip: 1,
      long_load_trip: 1,
      wide_load_trip: 1,
      height_load_trip: 1,
      status: 'No comenzado',
    },
  ];

  return (
    <div className="container-filter-component">
      {viewFind === 1 ? (
        <Form onSubmit={next}>
          <h3 className="title-register">Caracteristicas de tu nuevo envío</h3>
          <div className="container-input">
            <div className="container-b">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tipo de transporte</Form.Label>
                <Form.Select
                  size="md"
                  onChange={handleSet}
                  name="type_load_shipping"
                >
                  <option value="client">Container</option>
                  <option value="transport">Container refrigerado</option>
                  <option value="transport">Remolque cerrado</option>
                  <option value="transport">Remolque abierto</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Pais de carga</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="country_origin"
                  type="text"
                  placeholder="Ingresa el pais en que comienza el viaje que ofreces"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Ciudad de carga</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="city_origin"
                  type="text"
                  placeholder="Ingresa la ciudad en donde estaras disponible"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Pais destino</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="country_destiny"
                  type="text"
                  placeholder="Ingresa el pais de destino del viaje que ofreces"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Ciudad de destino</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="city_destiny"
                  type="text"
                  placeholder="Ingresa la ciudad de destino"
                />
              </Form.Group>
            </div>
            <div className="container-b">
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Metros cubicos del envío</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="cubic_meters_Shipping"
                  type="text"
                  placeholder="Ingresa los metros cubicos que estaran disponibles"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Alto del envío</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="high_load_Shipping"
                  type="text"
                  placeholder="Ingresa en metros el alto disponible del remolque"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Ancho del envío</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="wide_load_Shipping"
                  type="text"
                  placeholder="Ingresa en metros el ancho disponible del remolque"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Largo del envío</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="long_load_Shipping"
                  type="text"
                  placeholder="Ingresa en metros el largo disponible del remolque"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Peso del envío</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="weight_Shipping"
                  type="text"
                  placeholder="Ingresa el peso máximo disponoble de carga"
                />
              </Form.Group>
            </div>
            <div className="container-b">
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Desde fecha</Form.Label>
                <Form.Control
                  type="date"
                  onChange={handleSet}
                  name="trip_date_ini"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Desde hora</Form.Label>
                <Form.Control
                  type="time"
                  onChange={handleSet}
                  name="time_ini"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Hasta fecha</Form.Label>
                <Form.Control
                  type="date"
                  onChange={handleSet}
                  name="trip_date_end"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Hasta hora</Form.Label>
                <Form.Control
                  type="time"
                  onChange={handleSet}
                  name="time_end"
                />
              </Form.Group>
            </div>
          </div>
          <div className="container-bt-register">
            {isSaving ? (
              <Loader />
            ) : (
              <Button className="btn-register" variant="primary" type="submit">
                Buscar viaje
              </Button>
            )}
          </div>
        </Form>
      ) : viewFind === 2 ? (
        <Container fluid className="mx-0 trip-list-container">
          <h3 className="title-register">
            Selecciona el viaje para realizar tu envío
          </h3>

          <div className="view-body">
            <Table hover responsive size="sm">
              <thead>
                <tr>
                  <th>Conductor</th>
                  <th>Origen</th>
                  <th>Destino</th>
                  <th>Estado</th>
                  <th>Seleccionar viaje</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {trips.map((e) => (
                  <tr key={e.id}>
                    <td>
                      <UserData
                        userName={e.drive_name}
                        extraInfo={
                          <div>
                            <FontAwesomeIcon icon={faPhone} /> Contacto:{' '}
                            <b>{e.drive_phone}</b>
                          </div>
                        }
                      />
                    </td>
                    <td className="cell">{e.origin}</td>
                    <td className="cell">{e.destiny}</td>
                    <td className="cell">
                      <Status text={e.status} status={getStatus(e.status)} />
                    </td>
                    <td className="cell">
                      <Form.Check
                        name="rev"
                        onClick={() => selectTrip(e.id)}
                        type="checkbox"
                        id={`default-checkbox`}
                        label={`Seleccionar`}
                        checked={e.id === id ? true : false}
                        readOnly
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="container-bt-register">
              <Button
                className="btn-register btn-shipping"
                variant="primary"
                onClick={() => {
                  cancel();
                }}
              >
                Cancelar
              </Button>
              <Button
                className="btn-register btn-shipping"
                variant="primary"
                onClick={() => {
                  next2();
                }}
              >
                Guardar Envío
              </Button>
            </div>
          </div>
        </Container>
      ) : viewFind === 3 ? (
        <div className="confirm-delete">
          <div className="container-confirm-delete">
            <h3 className="view-delete">Tu envío ha sido guardado</h3>
            <div className="container-btn-delete">
              <FontAwesomeIcon className="faTrash" icon={faSave} />
              <Button
                onClick={() => {
                  handleSubmit();
                }}
                className="btn-register btn-delete"
                variant="primary"
                type="submit"
              >
                Aceptar
              </Button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
