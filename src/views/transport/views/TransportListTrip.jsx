import {
  faPen,
  faPhone,
  faTrash,
  faBan,
  faDolly,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@mui/material'
import React, { useState, useEffect, useContext } from 'react'
import { Container, Table } from 'react-bootstrap'
import { Status } from '../../../components/status/Status'
import { UserData } from '../../../components/userData/UserData'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import { DataContext } from '../../../contexts/DataProvider'
import { TripService } from '../../../services/tripService'
import { getTokenData } from '../../../helpers/Token.helper'

export const TransportListTrip = () => {
  const getStatus = (status) => {
    if (status === 'no iniciado') return 'not_started'
    if (status === 'en progreso') return 'in_progress'
    if (status === 'finalizado') return 'finalized'
    if (status === 'asignado') return 'assigned'
    return ''
  }

  const getToken = getTokenData()
  const { trips, setTrips } = useContext(DataContext)
  const [idDelete, setIdDelete] = useState(0)
  const navigate = useNavigate()
  const [viewDelete, setViewDelete] = useState(false)
  const [id, setId] = useState(0)
  const [idView, setIdView] = useState(0)
  const deleteTrip = async () => {
    const tokenDataId = getToken.id
    await TripService.deleteTrip(idDelete)
    setViewDelete(false)
    setIdDelete(0)
    const respTrips = await TripService.list(tokenDataId)
    setTrips(respTrips.data)
  }
  const PreviewDeleteDriver = (id) => {
    setViewDelete(true)
    setIdDelete(id)
  }
  const setState = async (id, state) => {
    let body = {}
    if (state === 'no iniciado') {
      body = { status: 'en progreso' }
    } else if (state === 'en progreso') {
      body = { status: 'finalizado' }
    }
    await TripService.updateTripState(body, id)
    const tokenDataId = getToken.id
    const respTrips = await TripService.list(tokenDataId)
    setTrips(respTrips.data)
  }
  const updateTrip = (idTrip) => {
    setId(idTrip)
  }

  const viewShipping = (idTrip) => {
    setIdView(idTrip)
  }
  const viewTrips = async () => {
    const tokenDataId = getToken.id
    const respTrips = await TripService.list(tokenDataId)
    console.log(respTrips)
    setTrips(respTrips.data)
  }

  useEffect(() => {
    viewTrips()
  }, [])

  useEffect(() => {
    if (id !== 0) {
      navigate(`/transport/editTrip/${id}`)
    }
    if (idView !== 0) {
      navigate(`/transport/viewShippingTrip/${idView}`)
    }
  }, [id, trips, idView])

  return (
    <Container fluid className="mx-0 trip-list-container">
      <h3 className="title-register">Listado de Viajes</h3>
      <div className="view-body">
        <Table hover responsive size="sm">
          <thead>
            <tr>
              <th>Conductor</th>
              <th>Camion</th>
              <th>Numero</th>
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
                    userName={`${e.driver_name} ${e.driver_last_name} `}
                    extraInfo={
                      <div>
                        <FontAwesomeIcon icon={faPhone} /> Contacto:{' '}
                        <b>{e.phone}</b>
                      </div>
                    }
                  />
                </td>
                <td className="cell">{e.truck_name}</td>
                <td className="cell">{e.id}</td>
                <td className="cell">{e.city_origin}</td>
                <td className="cell">{e.city_destiny}</td>
                <td
                  className="cell status"
                  text={e.status}
                  onClick={() => {
                    setState(e.id, e.status)
                  }}
                >
                  <Status text={e.status} status={getStatus(e.status)} />
                </td>
                <td className="cell">
                  <div className="right-cell actions-cell">
                    <IconButton
                      onClick={() => {
                        viewShipping(e.id)
                      }}
                    >
                      <FontAwesomeIcon icon={faDolly} />
                    </IconButton>

                    {e.status === 'no iniciado' ? (
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

                    {e.status === 'no iniciado' ? (
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

            <h3 className="view-delete">
              ¿Estas seguro de eliminar este viaje?
            </h3>
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
