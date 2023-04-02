import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { getTokenData } from '../../../helpers/Token.helper';
import { TripService } from '../../../services/tripService';
import { DataContext } from '../../../contexts/DataProvider';
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast, { Toaster } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Swal = require('sweetalert2');

export const TransportNewTrip = () => {
  const { setTrips, trucks, drivers } = useContext(DataContext);
  const getToken = getTokenData();
  const navigate = useNavigate();
  const [object, setObject] = useState({ type_load: 'Container' });
  const handleSet = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setObject({ ...object, ...field });
  };

  const validateForm = () => {
    try {
      if (object.cubic_meters_trip > 184.5) {
        toast(
          'Los metros cúbicos no pueden exceder el máximo legal establecido (184,5 metros cúbicos)'
        );
        return false;
      } else if (object.max_weight > 31000) {
        toast(
          'La carga no puede exceder el máximo legal establecido (31.000 kilos).'
        );
        return false;
      } else if (object.long_load_trip > 16.5) {
        toast(
          'La carga no puede exceder el largo legal establecido (16,5 metros).'
        );
        return false;
      } else if (object.wide_load_trip > 2.6) {
        toast(
          'El ancho del camión no puede superar el ancho legal establecido (2,6 metros).'
        );
        return false;
      } else if (object.high_load_trip > 4.3) {
        toast(
          'El alto del camión no puede superar el alto legal establecido (4,3 metros).'
        );
      } else {
        return true;
      }
    } catch (e) {
      toast('Falta ingresar campos');
      return false;
    }
  };

  const register = async () => {
    try {
      if (!validateForm()) return;
      await TripService.createTrip(object);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Creación de viaje exitoso',
        showConfirmButton: false,
        timer: 2500,
      });
      navigate('/transport');
      console.log('Enviado al backend');
      await TripService.createTrip(object);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Creación de viaje exitoso',
        showConfirmButton: false,
        timer: 2500,
      });
      navigate('/transport');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    register();
  };
  useEffect(() => {
    if (drivers.length > 0 && trucks.length > 0) {
      setObject({
        ...object,
        ...{
          transport_id: getToken.id,
          driver_id: drivers.sort((a, b) => {
            return Number.parseInt(b.value) - Number.parseInt(a.value);
          })[0].id,

          truck_id: trucks.sort((a, b) => {
            return Number.parseInt(b.value) - Number.parseInt(a.value);
          })[0].id,
        },
      });
    }
  }, []);

  return (
    <>
      {drivers.length > 0 && trucks.length > 0 ? (
        <Form onSubmit={handleSubmit} className="register-form-truck">
          <Toaster />

          <h3 className="title-register">Nuevo viaje</h3>
          <div className="container-input">
            <div className="container-b">
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Nombre Camión</Form.Label>
                <Form.Select size="md" onChange={handleSet} name="truck_id">
                  {trucks
                    .sort((a, b) => {
                      return (
                        Number.parseInt(b.value) - Number.parseInt(a.value)
                      );
                    })
                    .map((e) => (
                      <option value={e.id}>{e.name}</option>
                    ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tipo de Transporte</Form.Label>
                <Form.Select size="md" onChange={handleSet} name="type_load">
                  <option value="container">Container</option>
                  <option value="container refrigerado">
                    Container refrigerado
                  </option>
                  <option value="Remolque cerrado">Remolque cerrado</option>
                  <option value="Remolque abierto">Remolque abierto</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Nombre del Conductor</Form.Label>
                <Form.Select size="md" onChange={handleSet} name="driver_id">
                  {drivers
                    .sort((a, b) => {
                      return (
                        Number.parseInt(b.value) - Number.parseInt(a.value)
                      );
                    })
                    .map((e) => (
                      <option value={e.id}>{`${e.name} ${e.last_name}`}</option>
                    ))}
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
            </div>
            <div className="container-b">
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Ciudad de destino</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="city_destiny"
                  type="text"
                  placeholder="Ingresa la ciudad de destino"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Metros cúbicos disponibles</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="cubic_meters_trip"
                  type="number"
                  placeholder="Ingresa los metros cubicos que estaran disponibles"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Alto disponible del remolque</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="high_load_trip"
                  type="number"
                  placeholder="Ingresa en metros el alto disponible del remolque"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Ancho disponible del remolque</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="wide_load_trip"
                  type="number"
                  placeholder="Ingresa en metros el ancho disponible del remolque"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Largo disponible del remolque</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="long_load_trip"
                  type="number"
                  placeholder="Ingresa en metros el largo disponible del remolque"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Peso máximo disponible de carga</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="max_weight_trip"
                  type="number"
                  placeholder="Ingresa el peso máximo disponoble de carga"
                />
              </Form.Group>
            </div>
            <div className="container-b">
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Fecha de inicio del viaje</Form.Label>
                <Form.Control
                  type="date"
                  onChange={handleSet}
                  name="trip_date_ini"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Hora inicio del viaje</Form.Label>
                <Form.Control
                  type="time"
                  onChange={handleSet}
                  name="time_ini"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Fecha de fin del viaje</Form.Label>
                <Form.Control
                  type="date"
                  onChange={handleSet}
                  name="trip_date_end"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Hora fin del viaje</Form.Label>
                <Form.Control
                  type="time"
                  onChange={handleSet}
                  name="time_end"
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
      ) : (
        <div className="register-form container-error-authorized">
          <FontAwesomeIcon
            icon={faFaceSadTear}
            className="icon-not-authorized"
          />
          <h3 className="title-register title-not-authorized">
            Debe al menos tener un camión y conductor registrado para crear un
            nuevo viaje.
          </h3>
        </div>
      )}
    </>
  );
};
