import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './acordionMenuStyle.css';
import { DataContext } from '../../../../contexts/DataProvider';
import { useNavigate } from 'react-router-dom';
const iconImages = require.context('./imgs', true);

function AcordionMenu() {
  const navigate = useNavigate();
  const { setShow, SetTypeProfile } = React.useContext(DataContext);

  const setStatus = (view) => {
    if (view === 'logout') {
      SetTypeProfile('none');
      navigate('/');
      localStorage.removeItem('token');
      return;
    }
    navigate(`./${view}`);
    setShow(false);
  };

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          {' '}
          <img src={iconImages('./camion.png')} alt="" />
          <h3 className="title-item-accordion">Viajes</h3>
        </Accordion.Header>
        <Accordion.Body>
          {' '}
          <div
            className="item-select-accordion"
            onClick={() => setStatus('newTrip')}
          >
            <img src={iconImages('./nuevo.png')} alt="" />
            <h3 className="title-item-accordion">Nuevo Viaje</h3>
          </div>
          <div
            className="item-select-accordion-2"
            onClick={() => setStatus('listTrip')}
          >
            <img src={iconImages('./listaViajes.png')} alt="" />
            <h3 className="title-item-accordion">Lista de Viajes</h3>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          {' '}
          <img src={iconImages('./camiones.png')} alt="" />
          <h3 className="title-item-accordion">Camiones</h3>
        </Accordion.Header>
        <Accordion.Body>
          {' '}
          <div
            className="item-select-accordion"
            onClick={() => setStatus('newTruck')}
          >
            <img src={iconImages('./camionAdd.png')} alt="" />
            <h3 className="title-item-accordion">Agregar Camion</h3>
          </div>
          <div
            className="item-select-accordion-2"
            onClick={() => setStatus('configTruck')}
          >
            <img src={iconImages('./camionConfig.png')} alt="" />
            <h3 className="title-item-accordion">Configurar Camiones</h3>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          {' '}
          <img src={iconImages('./conductor.png')} alt="" />
          <h3 className="title-item-accordion">Conductores</h3>
        </Accordion.Header>
        <Accordion.Body>
          {' '}
          <div
            className="item-select-accordion"
            onClick={() => setStatus('newDriver')}
          >
            <img src={iconImages('./conductorAdd.png')} alt="" />
            <h3 className="title-item-accordion">Agregar Conductor</h3>
          </div>
          <div
            className="item-select-accordion-2"
            onClick={() => setStatus('configDriver')}
          >
            <img src={iconImages('./conductorConfig.png')} alt="" />
            <h3 className="title-item-accordion">Configurar Conductores</h3>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>
          {' '}
          <img src={iconImages('./hombre.png')} alt="" />
          <h3 className="title-item-accordion">Mi cuenta</h3>
        </Accordion.Header>
        <Accordion.Body>
          {' '}
          <div
            className="item-select-accordion"
            onClick={() => setStatus('editProfile')}
          >
            <img src={iconImages('./editarPerfil.png')} alt="" />
            <h3 className="title-item-accordion">Editar perfil</h3>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          {' '}
          <img src={iconImages('./sesion.png')} alt="" />
          <h3 className="title-item-accordion">Mi Sesión</h3>
        </Accordion.Header>
        <Accordion.Body>
          {' '}
          <div
            className="item-select-accordion"
            onClick={() => setStatus('logout')}
          >
            <img src={iconImages('./out.png')} alt="" />
            <h3 className="title-item-accordion">Cerrar Sesión</h3>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AcordionMenu;
