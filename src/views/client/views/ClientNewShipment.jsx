import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { faSave, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Table } from 'react-bootstrap'
import { Status } from '../../../components/status/Status'
import { UserData } from '../../../components/userData/UserData'
import { Loader } from '../../../components/loader/Loader'
import { TripService } from '../../../services/tripService'
import { ShippingService } from '../../../services/shippingService'
import { getTokenData } from '../../../helpers/Token.helper'

export const ClientNewShipment = () => {
  const [id, setId] = useState(0)
  const [transportId, setTransportId] = useState(0)
  const [viewFind, setViewFind] = useState(1)
  const [isSaving, setIsSaving] = useState(false)
  const [trips, setTrips] = useState([])
  const [isLoadingTrip, setIsLoadingTrips] = useState(false)
  const getToken = getTokenData()
  const [object, setObject] = useState({
    type_load_shipping: 'Container',
    city_destiny: '',
    city_origin: '',
    client_id: getToken.id,
    trip_id: id,
    transport_id: 0,
    country_destiny: '',
    description: '',
    country_origin: '',
    cubic_meters_shipping: '',
    high_load_shipping: '',
    long_load_shipping: '',
    status: 'no iniciado',
    time_end: '',
    time_ini: '',
    trip_date_end: '',
    trip_date_ini: '',
    weight_shipping: '',
    wide_load_shipping: '',
  })

  const navigate = useNavigate()

  const handleSet = ({ target: { value, name } }) => {
    const field = {}
    field[name] = value
    setObject({ ...object, ...field })
  }

  const cancel = (event) => {
    setViewFind(1)
    setId(0)
    setObject({})
    setObject({
      ...object,
      ...{
        type_load_shipping: 'Container',
        city_destiny: '',
        city_origin: '',
        client_id: getToken.id,
        trip_id: id,
        transport_id: 0,
        country_destiny: '',
        country_origin: '',
        cubic_meters_shipping: '',
        high_load_shipping: '',
        long_load_shipping: '',
        status: 'no iniciado',
        time_end: '',
        time_ini: '',
        trip_date_end: '',
        trip_date_ini: '',
        weight_shipping: '',
        wide_load_shipping: '',
        origin_address: '',
        destiny_address: '',
        description: '',
      },
    })
  }
  const next = async (event) => {
    event.preventDefault()
    setViewFind(2)
    setIsLoadingTrips(true)
    const trips = await TripService.listforclient(object)
    setTrips(trips.data)
    setIsLoadingTrips(false)
  }
  const next2 = () => {
    //Aca revisar porque no es pasado al backend
    setObject({ ...object, trip_id: id, transport_id: transportId })
    delete object.city_destiny

    setViewFind(3)
  }
  const selectTrip = (shipping) => {
    setId(shipping.id)
    setTransportId(shipping.transport_id)
  }
  const handleSubmit = async () => {
    delete object.city_origin
    delete object.city_destiny
    delete object.country_destiny
    delete object.country_origin
    delete object.time_end
    delete object.time_ini
    delete object.trip_date_end
    delete object.trip_date_ini
    try {
      await ShippingService.create(object)
      setViewFind(1)
      setIsSaving(true)
      navigate('/client/listShipment')
    } catch (e) {
      console.log(e)
    }
  }

  const getStatus = (status) => {
    if (status === 'No comenzado') return 'not_started'
    if (status === 'En progreso') return 'in_progress'
    if (status === 'Finalizado') return 'finalized'
    return ''
  }

  return (
    <div className="container-filter-component">
      {viewFind === 1 ? (
        <Form onSubmit={next}>
          <h3 className="title-register">Caracteristicas de tu nuevo envío</h3>
          <div className="container-input">
            <div className="container-b">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tipo de transporte</Form.Label>
                <Form.Select
                  size="md"
                  onChange={handleSet}
                  name="type_load_shipping"
                >
                  <option value="container">Container</option>
                  <option value="container refrigerado">
                    Container refrigerado
                  </option>
                  <option value="remolque cerrado">Remolque cerrado</option>
                  <option value="remolque abierto">Remolque abierto</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Pais de carga</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="country_origin"
                  type="text"
                  placeholder="Ingresa el pais en que comienza el viaje que ofreces"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Ciudad de carga</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="city_origin"
                  type="text"
                  placeholder="Ingresa la ciudad en donde estaras disponible"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Dirección de carga</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="origin_address"
                  type="text"
                  placeholder="Ingresa la dirección en donde estaras disponible"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Pais destino</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="country_destiny"
                  type="text"
                  placeholder="Ingresa el pais de destino"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Ciudad de destino</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="city_destiny"
                  type="text"
                  placeholder="Ingresa la ciudad de destino"
                />
              </Form.Group>
            </div>
            <div className="container-b">
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Dirección de destino</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="destiny_address"
                  type="text"
                  placeholder="Ingresa la ciudad de retiro"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Metros cúbicos del envío</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="cubic_meters_shipping"
                  type="number"
                  min="0"
                  //step=".5"
                  placeholder="Ingresa los metros cubicos que estaran disponibles"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Alto del envío</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="high_load_shipping"
                  type="number"
                  //step=".5"
                  placeholder="Ingresa en metros el alto disponible del remolque"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Ancho del envío</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="wide_load_shipping"
                  type="number"
                  step=".5"
                  placeholder="Ingresa en metros el ancho disponible del remolque"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Largo del envío</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="long_load_shipping"
                  type="number"
                  //step=".5"
                  placeholder="Ingresa en metros el largo disponible del remolque"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Peso del envío</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="weight_shipping"
                  type="number"
                  //step=".5"
                  placeholder="Ingresa el peso máximo disponoble de carga"
                />
              </Form.Group>
            </div>
            <div className="container-b">
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Desde fecha</Form.Label>
                <Form.Control
                  type="date"
                  onChange={handleSet}
                  name="trip_date_ini"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Desde: hora</Form.Label>
                <Form.Control
                  type="time"
                  onChange={handleSet}
                  name="time_ini"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Hasta: fecha</Form.Label>
                <Form.Control
                  type="date"
                  onChange={handleSet}
                  name="trip_date_end"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Hasta hora</Form.Label>
                <Form.Control
                  type="time"
                  onChange={handleSet}
                  name="time_end"
                />
              </Form.Group>
              <Form.Group className="mb-3 mb-5" controlId="formBasicText">
                <Form.Label>Descripción de carga</Form.Label>
                <Form.Control
                  onChange={handleSet}
                  name="description"
                  type="text"
                  placeholder="Ingresa la dirección en donde estaras disponible"
                />
              </Form.Group>
            </div>
          </div>
          <div className="container-bt-register">
            {isSaving ? (
              <Loader />
            ) : (
              <Button className="btn-register" variant="primary" type="submit">
                Buscar viaje
              </Button>
            )}
          </div>
        </Form>
      ) : viewFind === 2 ? (
        <Container fluid className="mx-0 trip-list-container">
          <h3 className="title-register">
            Selecciona el viaje para realizar tu envío
          </h3>

          {isLoadingTrip ? (
            <div>
              <Loader />
            </div>
          ) : (
            <div className="view-body">
              <Table hover responsive size="sm">
                <thead>
                  <tr>
                    <th>Conductor</th>
                    <th>Origen</th>
                    <th>Destino</th>
                    <th>Inicio viaje</th>
                    <th>LLegada aprox. destino</th>
                    <th>Estado</th>
                    <th>Seleccionar viaje</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {trips.map((e) => (
                    <tr key={e.id}>
                      <td>
                        <UserData
                          userName={e.driver_name}
                          extraInfo={
                            <div>
                              <FontAwesomeIcon icon={faPhone} /> Contacto:{' '}
                              <b>{e.phone}</b>
                            </div>
                          }
                        />
                      </td>
                      <td className="cell">{`${e.country_origin}/${e.city_origin}`}</td>
                      <td className="cell">{`${e.country_destiny}/${e.city_destiny}`}</td>
                      <td className="cell">{`${e.trip_date_ini}/${e.time_ini}`}</td>
                      <td className="cell">{`${e.trip_date_end}/${e.time_end}`}</td>
                      <td className="cell">
                        <Status text={e.status} status={getStatus(e.status)} />
                      </td>
                      <td className="cell">
                        <Form.Check
                          name="rev"
                          onClick={() => selectTrip(e)}
                          type="checkbox"
                          id={`default-checkbox`}
                          label={`Seleccionar`}
                          checked={e.id === id ? true : false}
                          readOnly
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="container-bt-register">
                <Button
                  className="btn-register btn-shipping"
                  variant="primary"
                  onClick={() => {
                    cancel()
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  className="btn-register btn-shipping"
                  variant="primary"
                  onClick={() => {
                    next2()
                  }}
                >
                  Guardar Envío
                </Button>
              </div>
            </div>
          )}
        </Container>
      ) : viewFind === 3 ? (
        <div className="confirm-delete">
          <div className="container-confirm-delete">
            <h3 className="view-delete">Tu envío ha sido guardado</h3>
            <div className="container-btn-delete">
              <FontAwesomeIcon className="faTrash" icon={faSave} />
              <Button
                onClick={() => {
                  handleSubmit()
                }}
                className="btn-register btn-delete"
                variant="primary"
                type="submit"
              >
                Aceptar
              </Button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
