import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import AcordionMenu from '../accordionMenu/AccordionMenu'
import './drawerStyle.css'
import { DataContext } from '../../../../contexts/DataProvider'
function DrawerMenu() {
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const { show, setShow } = React.useContext(DataContext)

  return (
    <div className="container-drawer">
      <div className="container-btn-menu-transport">
        <div className="btn-menu" onClick={handleShow}></div>
        <h5 className="menu-name">Menú</h5>
      </div>
      <Offcanvas className="menu-drawer" show={show} onHide={handleClose}>
        <Offcanvas.Header
          closeButton
          closeVariant="white"
          className="header-drawer"
        >
          <Offcanvas.Title>Menú Tranportista</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="body-drawer">
          <AcordionMenu />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default DrawerMenu
