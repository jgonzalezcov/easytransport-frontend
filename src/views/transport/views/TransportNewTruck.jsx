import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { getTokenData } from '../../../helpers/Token.helper';
import { TruckService } from '../../../services/truckService';
import { DataContext } from '../../../contexts/DataProvider';
import toast, { Toaster } from 'react-hot-toast';
const Swal = require('sweetalert2');

export const TransportNewTruck = () => {
  const { setTrucks } = useContext(DataContext);
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
      if (object.cubic_meters > 184.5) {
        toast(
          'Los metros cúbicos no pueden exceder el máximo legal establecido (184,5 metros cúbicos)'
        );
        return false;
      } else if (object.max_weight > 31000) {
        toast(
          'La carga no puede exceder el máximo legal establecido (31.000 kilos).'
        );
        return false;
      } else if (object.long_load > 16.5) {
        toast(
          'La carga no puede exceder el largo legal establecido (16,5 metros).'
        );
        return false;
      } else if (object.wide_load > 2.6) {
        toast(
          'El ancho del camión no puede superar el ancho legal establecido (2,6 metros).'
        );
        return false;
      } else if (object.high_load > 4.3) {
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
  const registerTruck = async () => {
    try {
      if (!validateForm()) return;
      const tokenDataId = getToken.id;
      await TruckService.createtruck(object);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Camión registrado con éxito',
        showConfirmButton: false,
        timer: 2500,
      });
      navigate('/transport/configTruck');
      const respTrucks = await TruckService.list(tokenDataId);
      setTrucks(respTrucks.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerTruck();
  };
  useEffect(() => {
    setObject({ ...object, ...{ transport_id: getToken.id } });
  }, []);
  return (
    <Form onSubmit={handleSubmit} className="register-form-truck">
      <Toaster />
      <h3 className="title-register">Registro de camión.</h3>
      <div className="container-input">
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nombre Camión</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="name"
              type="text"
              placeholder="Ingresa un nombre para identificar"
            />
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
            <Form.Label>Nacionalidad Patente</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="country_patent"
              type="text"
              placeholder="Ingresa la nacionalidad de la patente"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Número de Patente</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="patent"
              type="text"
              placeholder="Ingresa el numero de patente"
            />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="maken"
              type="text"
              placeholder="Ingresa la Marca del camión"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="model"
              type="text"
              placeholder="Ingresa el modelo del camión"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Color</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="color"
              type="text"
              placeholder="Ingresa el color de la carrocería"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Metros cúbicos remolque</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="cubic_meters"
              type="number"
              placeholder="Metros cúbicos del remolque"
            />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Alto del remolque</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="high_load"
              type="number"
              placeholder="Ingresa en metros el alto del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Ancho del remolque</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="wide_load"
              type="number"
              placeholder="Ingresa en metros el ancho del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Largo del remolque</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="long_load"
              type="number"
              placeholder="Ingresa en metros el largo del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Peso máximo de carga</Form.Label>
            <Form.Control
              onChange={handleSet}
              name="max_weight"
              type="number"
              placeholder="Ingresa el peso máximo de carga"
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
