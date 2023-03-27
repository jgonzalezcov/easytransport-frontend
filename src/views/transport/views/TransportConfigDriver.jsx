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
import { DriverService } from '../../../services/driverService'
import { getTokenData } from '../../../helpers/Token.helper'

export const TransportConfigDriver = () => {
  const getToken = getTokenData()
  const { drivers, setDrivers } = useContext(DataContext)
  const [idDelete, setIdDelete] = useState(0)
  const navigate = useNavigate()
  const [viewDelete, setViewDelete] = useState(false)
  const deleteDriver = async () => {
    const tokenDataId = getToken.id
    await DriverService.softdeletedriver(idDelete)
    setViewDelete(false)
    setIdDelete(0)
    const respDrivers = await DriverService.list(tokenDataId)
    setDrivers(respDrivers.data)
  }
  const PreviewDeleteDriver = (id) => {
    setViewDelete(true)
    setIdDelete(id)
  }

  const [id, setId] = useState(0)

  const updateDriver = (idTrip) => {
    setId(idTrip)
  }

  useEffect(() => {
    if (id !== 0) {
      navigate(`/transport/editDriver/${id}`)
    }
  }, [id, drivers])
  return (
    <Container fluid className="mx-0 trip-list-container">
      <h3 className="title-register">Listado de Conductores</h3>

      <div className="view-body">
        <Table hover responsive size="sm">
          <thead>
            <tr>
              <th>Nombre del conductor</th>
              <th>Rut</th>
              <th>Telefono</th>
              <th>Estado</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          {drivers ? (
            <tbody>
              {drivers.map((e) => (
                <tr>
                  <td>
                    <UserData
                      userName={`${e.name} ${e.last_name}`}
                      extraInfo={
                        <div>
                          <b>{e.phone}</b>
                        </div>
                      }
                    />
                  </td>
                  <td className="cell">{e.dni}</td>
                  <td className="cell">{e.phone}</td>
                  <td className="cell">{e.status}</td>
                  <td className="cell">
                    <div className="right-cell actions-cell">
                      <IconButton
                        onClick={() => {
                          updateDriver(e.id)
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
              ¿Estás seguro de eliminar a este conductor?
            </h3>
            <div className="container-btn-delete">
              <FontAwesomeIcon className="faTrash" icon={faTrash} />
              <Button
                onClick={() => {
                  deleteDriver()
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
