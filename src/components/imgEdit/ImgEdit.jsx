import React from 'react'
import Card from 'react-bootstrap/Card'
import { DataContext } from '../../contexts/DataProvider'
import('./imgEditStyle.css')
const ImgProfile = require.context('./imgs', true)
function ImgEdit({ viewEdit, setViewEdit }) {
  const { profile } = React.useContext(DataContext)
  const { name, lastName, email, img } = profile
  return (
    <div className="container-card-component-all">
      <Card className="container-card-component">
        <Card.Img
          className="img-card-component"
          variant="top"
          src={ImgProfile(img)}
        />
        <Card.Body>
          <Card.Title>{`${name} ${lastName}`}</Card.Title>
          <Card.Text>{email}</Card.Text>
        </Card.Body>
      </Card>
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
              setViewEdit('ini')
            }}
          >
            <div className="change-file-btn"></div>
          </label>
        </div>
        <div
          className="btns-item-edit"
          onClick={() => {
            setViewEdit('password')
          }}
        >
          <div className="btn-password-edit"></div>
        </div>
        <div
          className="btns-item-edit"
          onClick={() => {
            setViewEdit('edit')
          }}
        >
          <div className="btn-profile-edit"></div>
        </div>
      </div>
    </div>
  )
}

export default ImgEdit
