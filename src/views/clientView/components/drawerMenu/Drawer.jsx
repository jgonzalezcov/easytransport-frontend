import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import AcordionMenu from '../accordionMenu/AccordionMenu'
import './drawerStyle.css'
import { DataContext } from '../../../../contexts/DataProvider'
function DrawerMenu() {
  const handleClose = () => setShow(false)

  const { show, setShow } = React.useContext(DataContext)

  return (
    <div className="container-drawer">
      <Offcanvas className="menu-drawer" show={show} onHide={handleClose}>
        <Offcanvas.Header
          closeButton
          closeVariant="white"
          className="header-drawer"
        >
          <Offcanvas.Title>Menú Cliente</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="body-drawer">
          <AcordionMenu />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default DrawerMenu
