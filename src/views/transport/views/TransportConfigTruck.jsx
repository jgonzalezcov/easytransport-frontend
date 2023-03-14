import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { UserData } from '../../../components/userData/UserData'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import { useNavigate } from 'react-router-dom'
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
]

export const TransportConfigTruck = () => {
  const navigate = useNavigate()
  const [viewDelete, setViewDelete] = useState(false)
  const deleteTruck = (idShipment) => {
    setViewDelete(false)
  }
  const [id, setId] = useState(0)

  const updateTruck = (idTrip) => {
    setId(idTrip)
  }
  useEffect(() => {
    if (id !== 0) {
      navigate(`/transport/editTruck/${id}`)
    }
  }, [id])

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
                    <IconButton
                      onClick={() => {
                        updateTruck(e.id)
                      }}
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </IconButton>
                    <IconButton onClick={() => setViewDelete(true)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </IconButton>
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
              Estas seguro de eliminar este camión
            </h3>
            <div className="container-btn-delete">
              <FontAwesomeIcon className="faTrash" icon={faTrash} />
              <Button
                onClick={() => {
                  deleteTruck()
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
