import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@mui/material'
import React, { useState, useEffect, useContext } from 'react'
import { Container, Table } from 'react-bootstrap'
import { UserData } from '../../../components/userData/UserData'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../../contexts/DataProvider'
import { TruckService } from '../../../services/truckService'
import { getTokenData } from '../../../helpers/Token.helper'
export const TransportConfigTruck = () => {
  const getToken = getTokenData()
  const { trucks, setTrucks } = useContext(DataContext)
  const [idDelete, setIdDelete] = useState(0)
  const navigate = useNavigate()
  const [viewDelete, setViewDelete] = useState(false)
  const [id, setId] = useState(0)
  const deleteTruck = async () => {
    const tokenDataId = getToken.id
    await TruckService.softdeletetruck(idDelete)
    setViewDelete(false)
    setIdDelete(0)
    const respTrucks = await TruckService.list(tokenDataId)
    setTrucks(respTrucks.data)
  }
  const PreviewDeleteDriver = (id) => {
    setViewDelete(true)
    setIdDelete(id)
  }

  const updateTruck = (idTrip) => {
    setId(idTrip)
  }

  useEffect(() => {
    if (id !== 0) {
      navigate(`/transport/editTruck/${id}`)
    }
  }, [id, trucks])

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
          {trucks ? (
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
                      <IconButton
                        onClick={() => {
                          PreviewDeleteDriver(e.id)
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            ''
          )}
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
              ¿Estas seguro de eliminar este camión?
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
