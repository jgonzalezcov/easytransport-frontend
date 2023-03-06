import { faPen, faPhone, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@mui/material';
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Status } from '../../../components/status/Status';
import { UserData } from '../../../components/userData/UserData';

/**
 * id
 * transport_id
 * truck_id
 * drive_id
 * drive_phone
 * drive_name
 * origin
 * destiny
 * trip_date_ini
 * time_ini
 * time_end
 * time_date_end
 * type_load_trip
 * cubic_meters_trip
 * max_height_trip
 * long_load_trip
 * wide_load_trip
 * height_load_trip
 * status
 * created_at
 * updated_at
 * deleted_at
 * */

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
    id: 1,
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
    id: 1,
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

export const TransportListTrip = () => {
  const getStatus = (status) => {
    if (status === 'No comenzado') return 'not_started';
    if (status === 'En progreso') return 'in_progress';
    if (status === 'Finalizado') return 'finalized';
    return '';
  };

  return (
    <Container fluid className="mx-0 trip-list-container">
      <h3 className="title-register">Listado de Viajes</h3>

      <div className="view-body">
        <Table hover responsive size="sm">
          <thead>
            <tr>
              <th>Conductor</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Estado</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((e) => (
              <tr>
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
                  <div className="right-cell actions-cell">
                    <IconButton>
                      <FontAwesomeIcon icon={faPen} />
                    </IconButton>
                    <IconButton>
                      <FontAwesomeIcon icon={faTrash} />
                    </IconButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
