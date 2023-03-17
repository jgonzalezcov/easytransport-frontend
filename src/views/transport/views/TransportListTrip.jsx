import {
  faPen,
  faPhone,
  faTrash,
  faBan,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { Status } from '../../../components/status/Status'
import { UserData } from '../../../components/userData/UserData'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
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
]

export const TransportListTrip = () => {
  const navigate = useNavigate()

  const getStatus = (status) => {
    if (status === 'No comenzado') return 'not_started'
    if (status === 'En progreso') return 'in_progress'
    if (status === 'Finalizado') return 'finalized'
    return ''
  }
  const [idDelete, setIdDelete] = useState(0)
  const deleteTrip = (idShipment) => {
    setViewDelete(false)
    console.log('id:', idDelete)
    setIdDelete(0)
  }
  const PreviewDeleteDriver = (id) => {
    setViewDelete(true)
    setIdDelete(id)
  }

  const [viewDelete, setViewDelete] = useState(false)
  const [id, setId] = useState(0)
  const updateTrip = (idTrip) => {
    setId(idTrip)
  }

  useEffect(() => {
    if (id !== 0) {
      navigate(`/transport/editTrip/${id}`)
    }
  }, [id])
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
                  <div className="right-cell actions-cell">
                    {e.status === 'No comenzado' ? (
                      <IconButton
                        onClick={() => {
                          updateTrip(e.id)
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
                      <IconButton
                        onClick={() => {
                          PreviewDeleteDriver(e.id)
                        }}
                      >
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
      </div>
      {viewDelete === true ? (
        <div className="confirm-delete">
          <div className="container-confirm-delete">
            <div className="container-close-button">
              <CloseButton
                onClick={() => {
                  setViewDelete(false)
                }}
              />
            </div>

            <h3 className="view-delete">Estas seguro de eliminar este viaje</h3>
            <div className="container-btn-delete">
              <FontAwesomeIcon className="faTrash" icon={faTrash} />
              <Button
                onClick={() => {
                  deleteTrip()
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
  )
}
