import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './navbarStyle.css'
import logo from './imgs/logo.png'
import { DataContext } from '../../contexts/DataProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
function NavbarPage() {
  const { typeProfile, SetTypeProfile, setShow } = React.useContext(DataContext)
  const handleShow = () => setShow(true)
  const navigate = useNavigate()
  const switchMenu = () => {
    localStorage.removeItem('token')
    SetTypeProfile('none')
    navigate('/')
  }
  useEffect(() => {}, [typeProfile])
  return (
    <>
      {typeProfile === 'none' ? (
        <Navbar className="navbar" expand="lg">
          <Container>
            <div className="container-logo">
              <div onClick={switchMenu} className="name-company">
                <div className="container-link-logo">
                  <img
                    className="link-logo"
                    src={logo}
                    alt="Logo de empresa Easytransport"
                  />
                </div>
              </div>
              <h1 className="name-company" href="/">
                Easytransport
              </h1>
            </div>

            <Navbar.Toggle
              className="menu-mobile"
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse className="menu-desktop" id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="text-menu" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="text-menu" href="/trip">
                  Viaje
                </Nav.Link>
                <Nav.Link className="text-menu register" href="/register">
                  Registrate
                </Nav.Link>
                <NavDropdown
                  id="basic-nav-dropdown"
                  title="Configuración"
                  className="text-menu"
                >
                  <NavDropdown.Item className="text-menu-select" href="truck">
                    Camiones
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-menu-select" href="driver">
                    Conductores
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="text-menu-select" href="account">
                    Mi cuenta
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : typeProfile === 'transport' ? (
        <Navbar className="navbar" expand="lg">
          <Container fluid>
            <div className="container-logo">
              <div onClick={switchMenu} className="name-company">
                <div className="container-link-logo">
                  <img
                    className="link-logo"
                    src={logo}
                    alt="Logo de empresa Easytransport"
                  />
                </div>
              </div>
              <h1 className="name-company" href="/">
                Easytransport
              </h1>
            </div>

            <div className="container-btn-menu-transport">
              <IconButton
                className="btn-menu"
                size="large"
                onClick={handleShow}
              >
                <FontAwesomeIcon icon={faBars} />
              </IconButton>
              <h5 className="menu-name mobile-hidden">Menú</h5>
            </div>
          </Container>
        </Navbar>
      ) : typeProfile === 'client' ? (
        <Navbar className="navbar" expand="lg">
          <Container fluid>
            <div className="container-logo">
              <div onClick={switchMenu} className="name-company">
                <div className="container-link-logo">
                  <img
                    className="link-logo"
                    src={logo}
                    alt="Logo de empresa Easytransport"
                  />
                </div>
              </div>
              <h1 className="name-company" href="/">
                Easytransport
              </h1>
            </div>
            <div className="container-btn-menu-transport">
              <IconButton
                className="btn-menu"
                size="large"
                onClick={handleShow}
              >
                <FontAwesomeIcon icon={faBars} />
              </IconButton>
              <h5 className="menu-name mobile-hidden">Menú</h5>
            </div>
          </Container>
        </Navbar>
      ) : (
        <></>
      )}
    </>
  )
}

export default NavbarPage
