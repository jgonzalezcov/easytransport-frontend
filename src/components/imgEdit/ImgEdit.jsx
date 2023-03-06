import {
  faCamera,
  faLock,
  faShippingFast,
  faTruck,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { DataContext } from '../../contexts/DataProvider';
import('./imgEditStyle.css');
const ImgProfile = require.context('./imgs', true);
function ImgEdit({ viewEdit, setViewEdit }) {
  const { profile } = React.useContext(DataContext);
  const { name, lastName, email, img } = profile;
  return (
    <div className="container-card-component-all">
      <Card className="container-card-component">
        <div className="img-avatar">
          <Card.Img
            className="img-card-component"
            variant="top"
            src={ImgProfile(img)}
          />
        </div>
        <Card.Body>
          <Card.Title>{`${name} ${lastName}`}</Card.Title>
          <Card.Text>{email}</Card.Text>
        </Card.Body>
      </Card>
      <div className="container-user-info">
        <div className="user-info">
          <div className="user-info-element">
            <FontAwesomeIcon className="user-info-icon" icon={faTruck} />
            Cantidad de camiones:
            <b>7</b>
          </div>

          <div className="user-info-element">
            <FontAwesomeIcon className="user-info-icon" icon={faUsers} />
            Cantidad de transportistas:
            <b>7</b>
          </div>

          <div className="user-info-element">
            <FontAwesomeIcon className="user-info-icon" icon={faShippingFast} />
            Envios:
            <b>100</b>
          </div>
        </div>
      </div>
      <div className="container-btn-edit">
        <div className="btns-item-edit">
          {' '}
          <input
            className="change-file"
            type="file"
            id="fileImg"
            accept="image/*"
          />
          <label
            for="fileImg"
            onClick={() => {
              setViewEdit('ini');
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
            setViewEdit('password');
          }}
        >
          <div className="btn-profile-action">
            <FontAwesomeIcon icon={faLock} />
          </div>
        </div>
        <div
          className="btns-item-edit"
          onClick={() => {
            setViewEdit('edit');
          }}
        >
          <div className="btn-profile-action">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgEdit;
