import React, { useState, useEffect, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { DataContext } from '../../../contexts/DataProvider'
import { getTokenData } from '../../../helpers/Token.helper'
import { TripService } from '../../../services/tripService'
const Swal = require('sweetalert2')

export const TransportEditTrip = () => {
  const { trips, setTrips, trucks, drivers } = useContext(DataContext)
  const [object, setObject] = useState({})
  const getToken = getTokenData()
  const { id } = useParams() //Este id es para entregar el valor de id al backend
  const navigate = useNavigate()
  const handleSet = ({ target: { value, name } }) => {
    const field = {}
    field[name] = value
    setObject({ ...object, ...field })
  }

  useEffect(() => {
    setObject({ ...object, ...{ id: id } })
    const tripEdit = trips.filter((t) => t.id === Number.parseInt(id, 10))[0]
    setObject({})
    setObject({ ...object, ...tripEdit })
  }, [])

  const editTrip = async () => {
    try {
      const tokenDataId = getToken.id
      await TripService.updateTrip(object, object.id)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Viaje editado con éxito',
        showConfirmButton: false,
        timer: 2500
      });
      const respTrips = await TripService.list(tokenDataId)
      setTrips(respTrips.data)
      navigate(`/transport/listTrip`)
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    editTrip()
  }

  return (
    <Form onSubmit={handleSubmit} className="register-form-truck">
      <h3 className="title-register">Nuevo viaje.</h3>
      <div className="container-input">
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nombre Camión</Form.Label>
            <Form.Select
              onChange={handleSet}
              value={object.truck_id ? object.truck_id : ''}
              size="md"
              name="truck_id"
            >
              {trucks
                .sort((a, b) => {
                  return Number.parseInt(b.value) - Number.parseInt(a.value)
                })
                .map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tipo de Transporte</Form.Label>
            <Form.Select
              onChange={handleSet}
              value={object.type_load_trip ? object.type_load_trip : ''}
              size="md"
              name="type_load_trip"
            >
              <option value="container">Container</option>
              <option value="container refrigerado">
                Container refrigerado
              </option>
              <option value="Remolque cerrado">Remolque cerrado</option>
              <option value="Remolque abierto">Remolque abierto</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nombre del Conductor</Form.Label>
            <Form.Select
              onChange={handleSet}
              value={object.driver_id ? object.driver_id : ''}
              size="md"
              name="driver_id"
            >
              {drivers
                .sort((a, b) => {
                  return Number.parseInt(b.value) - Number.parseInt(a.value)
                })
                .map((e) => (
                  <option
                    key={e.id}
                    value={e.id}
                  >{`${e.name} ${e.last_name}`}</option>
                ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Pais de carga</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.country_origin ? object.country_origin : ''}
              name="country_origin"
              type="text"
              placeholder="Ingresa el pais en que comienza el viaje que ofreces"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Ciudad de carga</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.city_origin ? object.city_origin : ''}
              name="city_origin"
              type="text"
              placeholder="Ingresa la ciudad en donde estaras disponible"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Pais destino</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.country_destiny ? object.country_destiny : ''}
              name="country_destiny"
              type="text"
              placeholder="Ingresa el pais de destino del viaje que ofreces"
            />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Ciudad de destino</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.city_destiny ? object.city_destiny : ''}
              name="city_destiny"
              type="text"
              placeholder="Ingresa la ciudad de destino"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Metros cúbicos disponibles</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.cubic_meters_trip ? object.cubic_meters_trip : ''}
              name="cubic_meters_trip"
              type="text"
              placeholder="Ingresa los metros cubicos que estaran disponibles"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Alto disponible del remolque</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.high_load_trip ? object.high_load_trip : ''}
              name="high_load_trip"
              type="text"
              placeholder="Ingresa en metros el alto disponible del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Ancho disponible del remolque</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.wide_load_trip ? object.wide_load_trip : ''}
              name="wide_load_trip"
              type="text"
              placeholder="Ingresa en metros el ancho disponible del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Largo disponible del remolque</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.long_load_trip ? object.long_load_trip : ''}
              name="long_load_trip"
              type="text"
              placeholder="Ingresa en metros el largo disponible del remolque"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Peso máximo disponible de carga</Form.Label>
            <Form.Control
              onChange={handleSet}
              value={object.max_weight_trip ? object.max_weight_trip : ''}
              name="max_weight_trip"
              type="text"
              placeholder="Ingresa el peso máximo disponoble de carga"
            />
          </Form.Group>
        </div>
        <div className="container-b">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Fecha de inicio del viaje</Form.Label>
            <Form.Control
              type="date"
              onChange={handleSet}
              value={
                object.trip_date_ini
                  ? object.trip_date_ini.substring(0, 10)
                  : ''
              }
              name="trip_date_ini"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Hora inicio del viaje</Form.Label>
            <Form.Control
              type="time"
              onChange={handleSet}
              value={object.time_ini ? object.time_ini : ''}
              name="time_ini"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Fecha de fin del viaje</Form.Label>
            <Form.Control
              type="date"
              onChange={handleSet}
              value={
                object.trip_date_end
                  ? object.trip_date_end.substring(0, 10)
                  : ''
              }
              name="trip_date_end"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Hora fin del viaje</Form.Label>
            <Form.Control
              type="time"
              onChange={handleSet}
              value={object.time_end ? object.time_end : ''}
              name="time_end"
            />
          </Form.Group>
        </div>
      </div>
      <div className="container-bt-register">
        <Button className="btn-register" variant="primary" type="submit">
          Aceptar
        </Button>
      </div>
    </Form>
  )
}
