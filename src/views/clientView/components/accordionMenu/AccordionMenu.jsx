import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './acordionMenuStyle.css';
import { DataContext } from '../../../../contexts/DataProvider';
import { useNavigate } from 'react-router-dom';
const iconImages = require.context('./imgs', true);
function AcordionMenu() {
  const navigate = useNavigate();
  const { setView, setShow, SetTypeProfile } = React.useContext(DataContext);

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
          <img src={iconImages('./envios.png')} alt="" />
          <h3 className="title-item-accordion">Envios</h3>
        </Accordion.Header>
        <Accordion.Body>
          {' '}
          <div
            className="item-select-accordion"
            onClick={() => setStatus('newShipment')}
          >
            <img src={iconImages('./nuevoEnvio.png')} alt="" />
            <h3 className="title-item-accordion">Nuevo Envío</h3>
          </div>
          <div
            className="item-select-accordion-2"
            onClick={() => setStatus('listShipment')}
          >
            <img src={iconImages('./listaViajes.png')} alt="" />
            <h3 className="title-item-accordion">Lista de Envios</h3>
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
