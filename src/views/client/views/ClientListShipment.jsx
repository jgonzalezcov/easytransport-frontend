import {
  faPen,
  faPhone,
  faTrash,
  faBan,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { Status } from '../../../components/status/Status'
import { UserData } from '../../../components/userData/UserData'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import CloseButton from 'react-bootstrap/CloseButton'
import { ShippingService } from '../../../services/shippingService'
import { getTokenData } from '../../../helpers/Token.helper'
import { Loader } from '../../../components/loader/Loader'
import { NoData } from '../../../components/noData/NoData'

export const ClientListShipment = () => {
  const clientData = getTokenData()
  const [viewDelete, setViewDelete] = useState(false)
  const [shippings, setShippings] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const getStatus = (status) => {
    if (status === 'No comenzado') return 'not_started'
    if (status === 'asignado') return 'in_progress'
    if (status === 'finalizado') return 'finalized'
    return ''
  }
  const deleteShipment = (idShipment) => {
    setViewDelete(false)
  }

  const [id, setId] = useState(0)

  const updateShipment = (idShipment) => {
    setId(idShipment)
  }

  const init = async () => {
    const shipp = await ShippingService.getByClient(clientData.id)
    setShippings(shipp)
    setIsLoading(false)
  }

  useEffect(() => {
    if (id !== 0) {
      navigate(`/client/editShipment/${id}`)
    } else {
      init()
    }
  }, [id])

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
                  <th>Transportista</th>
                  <th>Dirección Origen</th>
                  <th>Dirección Destino</th>
                  <th>Metros Cubicos</th>
                  <th>Descripción</th>
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
                    <td className="cell">{e.description}</td>
                    <td className="cell">
                      <Status text={e.status} status={getStatus(e.status)} />
                    </td>
                    <td className="cell status">
                      <div className="right-cell actions-cell">
                        {e.status === 'No comenzado' ? (
                          <IconButton
                            onClick={() => {
                              updateShipment(e.id)
                            }}
                          >
                            <FontAwesomeIcon icon={faPen} />
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
                  deleteShipment()
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
