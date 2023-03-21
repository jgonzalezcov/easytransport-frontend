import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../components/loader/Loader';
import { ShippingService } from '../../../services/shippingService';
import toast, { Toaster } from 'react-hot-toast';

export const ClientEditShipment = () => {
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams(); //Este id es para entregar el valor de id al backend
  const [object, setObject] = useState({
    id: id,
    cubic_meters_shipping: 0,
    high_load_shipping: 0,
    long_load_shipping: 0,
    wide_load_shipping: 0,
    high_load_shipping: 0,
  });

  const handleSet = ({ target: { value, name } }) => {
    const field = { ...object };
    field[name] = value;
    setObject(field);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSaving(true);
    const response = await ShippingService.updateShipping(id, object);
    setIsSaving(false);
    if (response) {
      navigate('/client/listShipment');
    }
  };

  const init = async () => {
    const shipping = await ShippingService.getById(id);
    setIsLoading(false);
    setObject(shipping);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Toaster />

        <h3 className="title-register">
          Edita las caracteristicas de tu envío
        </h3>

        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <div className="container-input">
              <div className="container-b">
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Metros cubicos del envío</Form.Label>
                  <Form.Control
                    defaultValue={object.cubic_meters_shipping}
                    onChange={handleSet}
                    name="cubic_meters_shipping"
                    type="text"
                    placeholder="Ingresa los metros cubicos que estaran disponibles"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Alto del envío</Form.Label>
                  <Form.Control
                    defaultValue={object.high_load_shipping}
                    onChange={handleSet}
                    name="high_load_shipping"
                    type="text"
                    placeholder="Ingresa en metros el alto disponible del remolque"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Ancho del envío</Form.Label>
                  <Form.Control
                    defaultValue={object.wide_load_shipping}
                    onChange={handleSet}
                    name="wide_load_shipping"
                    type="text"
                    placeholder="Ingresa en metros el ancho disponible del remolque"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Largo del envío</Form.Label>
                  <Form.Control
                    defaultValue={object.long_load_shipping}
                    onChange={handleSet}
                    name="long_load_shipping"
                    type="text"
                    placeholder="Ingresa en metros el largo disponible del remolque"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Peso del envío</Form.Label>
                  <Form.Control
                    defaultValue={object.high_load_shipping}
                    onChange={handleSet}
                    name="high_load_shipping"
                    type="text"
                    placeholder="Ingresa el peso máximo disponoble de carga"
                  />
                </Form.Group>
              </div>
            </div>
            <div className="container-bt-register">
              {isSaving ? (
                <Loader />
              ) : (
                <Button
                  className="btn-register"
                  variant="primary"
                  type="submit"
                >
                  Guardar cambios
                </Button>
              )}
            </div>
          </div>
        )}
      </Form>
    </div>
  );
};
