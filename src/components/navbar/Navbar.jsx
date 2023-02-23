import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './navbarStyle.css'
import logo from './imgs/logo.png'
import { DataContext } from '../../contexts/DataProvider'
function NavbarPage() {
  const { typeProfile } = React.useContext(DataContext)
  return (
    <>
      {typeProfile === 'none' ? (
        <Navbar className="navbar" expand="lg">
          <Container>
            <div className="container-logo">
              <img
                className="link-logo"
                src={logo}
                alt="Logo de empresa Easytransport"
              />
              <Navbar.Brand className="name-company" href="/">
                Easytransport
              </Navbar.Brand>
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
          <Container>
            <div className="container-logo">
              <img
                className="link-logo"
                src={logo}
                alt="Logo de empresa Easytransport"
              />
              <Navbar.Brand className="name-company" href="/">
                Transportista
              </Navbar.Brand>
            </div>

            <Navbar.Toggle
              className="menu-mobile"
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse
              className="menu-desktop"
              id="basic-navbar-nav"
            ></Navbar.Collapse>
          </Container>
        </Navbar>
      ) : typeProfile === 'client' ? (
        <Navbar className="navbar" expand="lg">
          <Container>
            <div className="container-logo">
              <img
                className="link-logo"
                src={logo}
                alt="Logo de empresa Easytransport"
              />
              <Navbar.Brand className="name-company" href="/">
                Cliente
              </Navbar.Brand>
            </div>

            <Navbar.Toggle
              className="menu-mobile"
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse
              className="menu-desktop"
              id="basic-navbar-nav"
            ></Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        ''
      )}
    </>
  )
}

export default NavbarPage
