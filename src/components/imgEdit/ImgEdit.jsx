import {
  faCamera,
  faLock,
  faShippingFast,
  faTruck,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Card from 'react-bootstrap/Card'
import { DataContext } from '../../contexts/DataProvider'
import { getTokenData } from '../../helpers/Token.helper'
import('./imgEditStyle.css')
const ImgProfile = require.context('./imgs', true)
function ImgEdit({ viewEdit, setViewEdit }) {
  let tokenData = getTokenData()
  const { profile, drivers, trucks, trips, typeProfile } =
    React.useContext(DataContext)
  const { img } = profile

  return (
    <div className="container-card-component-all">
      {console.log('soy user')}
      <Card className="container-card-component">
        <div
          className="img-avatar"
          onClick={() => {
            setViewEdit('ini')
          }}
        >
          <Card.Img
            className="img-card-component"
            variant="top"
            src={ImgProfile(img)}
          />
        </div>
        <Card.Body>
          <Card.Title>{`${tokenData.name} ${tokenData.last_name}`}</Card.Title>
          <Card.Text>{tokenData.email}</Card.Text>
        </Card.Body>
      </Card>

      {typeProfile === 'transport' ? (
        <div className="container-user-info">
          <div className="user-info">
            <div className="user-info-element">
              <FontAwesomeIcon className="user-info-icon" icon={faTruck} />
              Cantidad de camiones:
              <b>{trucks.length}</b>
            </div>

            <div className="user-info-element">
              <FontAwesomeIcon className="user-info-icon" icon={faUsers} />
              Cantidad de transportistas:
              <b>{drivers.length}</b>
            </div>

            <div className="user-info-element">
              <FontAwesomeIcon
                className="user-info-icon"
                icon={faShippingFast}
              />
              Viajes:
              <b>{trips.length}</b>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-user-info">
          <div className="user-info">
            <div className="user-info-element">
              <FontAwesomeIcon
                className="user-info-icon"
                icon={faShippingFast}
              />
              Envios:
              <b>{trips.length}</b>
            </div>
          </div>
        </div>
      )}
      <div className="container-btn-edit">
        <div className="btns-item-edit">
          {' '}
          <input
            className="change-file"
            type="file"
            id="fileImg"
            accept="image/*"
            name="img"
          />
          <label
            for="fileImg"
            onClick={() => {
              setViewEdit('picture')
            }}
          >
            <div className="btn-profile-action">
              <FontAwesomeIcon icon={faCamera} />
            </div>
          </label>
        </div>
        <div
          className="btns-item-edit"
          onClick={() => {
            setViewEdit('password')
          }}
        >
          <div className="btn-profile-action">
            <FontAwesomeIcon icon={faLock} />
          </div>
        </div>
        <div
          className="btns-item-edit"
          onClick={() => {
            setViewEdit('edit')
          }}
        >
          <div className="btn-profile-action">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImgEdit
