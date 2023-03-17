import { faPen, faPhone, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@mui/material';
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { UserData } from '../../../components/userData/UserData';

/**
 * id
 * transport_id
 * name
 * country_patent
 * patent
 * maken
 * model
 * color
 * type_load
 * cubic_meters
 * max_weight
 * long_load
 * wide_loag
 * height_load
 * condition
 * created_at
 * updated_at
 * deleted_at
 * */

const trucks = [
  {
    id: 1,
    transport_id: 1,
    name: 'maria',
    country_patent: 'chile',
    patent: 'QASW-12',
    maken: 'Mercedez',
    model: 'Actros',
    color: 'Blanco',
    type_load: '',
    cubic_meters: '',
    max_weight: '',
    long_load: '',
    wide_loag: '',
    height_load: '',
    condition: '',
  },
  {
    id: 2,
    transport_id: 2,
    name: 'Luz Maria',
    country_patent: 'chile',
    patent: 'SADE-13',
    maken: 'Kia',
    model: 'Frontier',
    color: 'Blanco',
    type_load: '',
    cubic_meters: '',
    max_weight: '',
    long_load: '',
    wide_loag: '',
    height_load: '',
    condition: '',
  },
];

export const TransportConfigTruck = () => {
  const getStatus = (status) => {
    if (status === 'No comenzado') return 'not_started';
    if (status === 'En progreso') return 'in_progress';
    if (status === 'Finalizado') return 'finalized';
    return '';
  };

  return (
    <Container fluid className="mx-0 trip-list-container">
      <h3 className="title-register">Listado de Camiones</h3>

      <div className="view-body">
        <Table hover responsive size="sm">
          <thead>
            <tr>
              <th>Nombre del Camión</th>
              <th>Patente</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {trucks.map((e) => (
              <tr>
                <td>
                  <UserData
                    userName={e.name}
                    extraInfo={
                      <div>
                        <b>{e.country_patent}</b>
                      </div>
                    }
                  />
                </td>
                <td className="cell">{e.patent}</td>
                <td className="cell">{e.maken}</td>
                <td className="cell">{e.model}</td>
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
