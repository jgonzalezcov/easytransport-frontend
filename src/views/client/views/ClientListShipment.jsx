import {
  faPen,
  faPhone,
  faTrash,
  faBan,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Status } from '../../../components/status/Status';
import { UserData } from '../../../components/userData/UserData';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';
import { ShippingService } from '../../../services/shippingService';
import { getTokenData } from '../../../helpers/Token.helper';
import { Loader } from '../../../components/loader/Loader';
import { NoData } from '../../../components/noData/NoData';
/**
 id
 trip_id
 transport_id
 client_id
 drive_phone
 drive_name
 origin_address
 destiny_address
 date_retirement
 time_ini_retirement
 time_end_retirement
 date_delivery
 time_ini_delivery
 time_end_delivery
 type_load_shipping
 cubic_meters_shipping
 weight_shipping
 long_load_shipping
 wide_load_shipping
 high_load_shipping
 status
 created_at
 updated_at
 deleted_at
 * */

// const trips = [
//   {
//     id: 1,
//     trip_id: 1,
//     transport_id: 1,
//     client_id: 1,
//     description: 'Cajas Filete de Salmon',
//     drive_name: 'Alan brito',
//     drive_phone: '12345678',
//     origin_address: 'Puerto Mont calle x',
//     destiny_address: 'San Antonio calle x',
//     date_retirement: '2023-01-01',
//     time_ini_retirement: '06:00',
//     time_end_retirement: '08:00',
//     date_ini_delivery: '2023-01-01',
//     date_end_delivery: '2023-01-02',
//     time_ini_delivery: '10:00',
//     time_end_delivery: '08:00',
//     type_load_shipping: 'container',
//     cubic_meters_shipping: 2,
//     weight_shipping: 1,
//     long_load_shipping: 2,
//     wide_load_shipping: 1,
//     high_load_shipping: 1,
//     status: 'Finalizado',
//     created_at: '2023-01-01',
//     updated_at: '2023-01-01',
//     deleted_at: null,
//   },
//   {
//     id: 2,
//     trip_id: 2,
//     transport_id: 1,
//     client_id: 1,
//     description: '100 Cajas de Zapatos',
//     drive_name: 'Elba Lazo',
//     drive_phone: '12345678',
//     origin_address: 'Concepción calle x',
//     destiny_address: 'Santiago calle x',
//     date_retirement: '2023-01-03',
//     time_ini_retirement: '07:00',
//     time_end_retirement: '09:00',
//     date_ini_delivery: '2023-01-03',
//     date_end_delivery: '2023-01-04',
//     time_ini_delivery: '11:00',
//     time_end_delivery: '15:00',
//     type_load_shipping: 'container',
//     cubic_meters_shipping: 1,
//     weight_shipping: 1,
//     long_load_shipping: 1,
//     wide_load_shipping: 1,
//     high_load_shipping: 1,
//     status: 'En progreso',
//     created_at: '2023-01-03',
//     updated_at: '2023-01-03',
//     deleted_at: null,
//   },
//   {
//     id: 3,
//     trip_id: 2,
//     transport_id: 1,
//     client_id: 1,
//     description: '10 sacos de papas',
//     drive_name: 'Aquiles Baeza',
//     drive_phone: '12345678',
//     origin_address: 'Melipilla calle x',
//     destiny_address: 'Curacabi calle x',
//     date_retirement: '2023-01-05',
//     time_ini_retirement: '05:00',
//     time_end_retirement: '06:00',
//     date_ini_delivery: '2023-01-05',
//     date_end_delivery: '2023-01-06',
//     time_ini_delivery: '13:00',
//     time_end_delivery: '18:00',
//     type_load_shipping: 'remolque cerrado',
//     cubic_meters_shipping: 1,
//     weight_shipping: 1,
//     long_load_shipping: 1,
//     wide_load_shipping: 1,
//     high_load_shipping: 1,
//     status: 'No comenzado',
//     created_at: '2023-01-05',
//     updated_at: '2023-01-05',
//     deleted_at: null,
//   },
// ]

export const ClientListShipment = () => {
  const clientData = getTokenData();
  const [viewDelete, setViewDelete] = useState(false);
  const [shippings, setShippings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const getStatus = (status) => {
    if (status === 'No comenzado') return 'not_started';
    if (status === 'En progreso') return 'in_progress';
    if (status === 'Finalizado') return 'finalized';
    return '';
  };
  const deleteShipment = (idShipment) => {
    setViewDelete(false);
  };

  const [id, setId] = useState(0);

  const updateShipment = (idShipment) => {
    setId(idShipment);
  };

  const init = async () => {
    const shippings = await ShippingService.getByClient(clientData.id);
    setShippings(shippings);
    setIsLoading(false);
  };

  useEffect(() => {
    if (id !== 0) {
      navigate(`/client/editShipment/${id}`);
    } else {
      init();
    }
  }, [id]);

  return (
    <Container fluid className="mx-0 trip-list-container">
      <h3 className="title-register">Listado de Envíos</h3>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="view-body">
          {shippings.length > 0 ? (
            <Table hover responsive size="sm">
              <thead>
                <tr>
                  <th>Conductor</th>
                  {/* <th>Descripción</th> */}
                  <th>Dirección Origen</th>
                  <th>Dirección Destino</th>
                  <th>Metros Cubicos</th>
                  <th>Estado</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {shippings.map((e) => (
                  <tr key={e.id}>
                    <td>
                      <UserData
                        userName={e.transport_name}
                        extraInfo={
                          <div>
                            <FontAwesomeIcon icon={faPhone} /> Contacto:{' '}
                            <b>{e.transport_phone}</b>
                          </div>
                        }
                      />
                    </td>
                    {/* <td className="cell">{e.description || ''}</td> */}
                    <td className="cell">{e.origin_address}</td>
                    <td className="cell">{e.destiny_address}</td>
                    <td className="cell">{e.cubic_meters_shipping}</td>
                    <td className="cell">
                      <Status text={e.status} status={getStatus(e.status)} />
                    </td>
                    <td className="cell">
                      <div className="right-cell actions-cell">
                        {e.status === 'No comenzado' ? (
                          <IconButton
                            onClick={() => {
                              updateShipment(e.id);
                            }}
                          >
                            <FontAwesomeIcon icon={faPen} />
                          </IconButton>
                        ) : (
                          <IconButton>
                            <FontAwesomeIcon icon={faBan} />
                          </IconButton>
                        )}

                        {e.status === 'No comenzado' ? (
                          <IconButton onClick={() => setViewDelete(true)}>
                            <FontAwesomeIcon icon={faTrash} />
                          </IconButton>
                        ) : (
                          <IconButton>
                            <FontAwesomeIcon icon={faBan} />
                          </IconButton>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <NoData />
          )}
        </div>
      )}

      {viewDelete === true ? (
        <div className="confirm-delete">
          <div className="container-confirm-delete">
            <div className="container-close-button">
              <CloseButton
                onClick={() => {
                  setViewDelete(false);
                }}
              />
            </div>

            <h3 className="view-delete">Estas seguro de eliminar este viaje</h3>
            <div className="container-btn-delete">
              <FontAwesomeIcon className="faTrash" icon={faTrash} />
              <Button
                onClick={() => {
                  deleteShipment();
                }}
                className="btn-register btn-delete"
                variant="primary"
                type="submit"
              >
                Eliminar
              </Button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </Container>
  );
};
