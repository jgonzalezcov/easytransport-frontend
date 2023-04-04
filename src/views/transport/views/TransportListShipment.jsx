import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { Status } from '../../../components/status/Status'
import { UserData } from '../../../components/userData/UserData'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { ShippingService } from '../../../services/shippingService'
import { Loader } from '../../../components/loader/Loader'
import { NoData } from '../../../components/noData/NoData'
import { useParams } from 'react-router-dom'

export const TransportListShipment = () => {
  const { id } = useParams() //Este id es para entregar el valor de id al backend
  const [view, setView] = useState(false)
  const [shippings, setShippings] = useState([])
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const getStatus = (status) => {
    if (status === 'No comenzado') return 'not_started'
    if (status === 'en progreso') return 'in_progress'
    if (status === 'finalizado') return 'finalized'
    if (status === 'asignado') return 'assigned'
    return ''
  }

  const init = async () => {
    const shipp = await ShippingService.listTrip(id)
    setShippings(shipp.data)
    setIsLoading(false)
    setView(true)
  }

  useEffect(() => {
    init()
  }, [])

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
                  <th>Cliente</th>
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
                        userName={`${e.name} ${e.last_name}`}
                        extraInfo={
                          <div>
                            <FontAwesomeIcon icon={faPhone} /> Contacto:{' '}
                            <b>{e.phone}</b>
                          </div>
                        }
                      />
                    </td>
                    {/* <td className="cell">{e.description || ''}</td> */}
                    <td className="cell">{e.origin_address}</td>
                    <td className="cell">{e.destiny_address}</td>
                    <td className="cell">{e.cubic_meters_shipping}</td>
                    <td className="cell">{e.description}</td>
                    <td className="cell status">
                      <Status text={e.status} status={getStatus(e.status)} />
                    </td>
                  </tr>
                ))}
              </tbody>
              <div className="container-bt-register">
                <Button
                  onClick={() => {
                    navigate(`/transport`)
                  }}
                  className="btn-register btn-register-2"
                  variant="primary"
                  type="submit"
                >
                  Aceptar
                </Button>
              </div>
            </Table>
          ) : (
            <NoData />
          )}
        </div>
      )}
    </Container>
  )
}
