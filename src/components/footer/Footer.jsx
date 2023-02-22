// import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
import './footer.css';
import logo from './imgs/logo.png'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
const Footer = (props) => {
  return (
    <>
      <footer>
        {props.footer}
        <div className='cont-icon'>
          <div className='icon'>
            <h6>Síguenos</h6>
          <BsFacebook />
          <BsLinkedin />
          <BsInstagram />
          <BsTwitter />
          </div>
          <div className='text'>
        <p>Copyright ©2023 Easy Transport. All rights reserved.</p>
        <span>Av. Apoquindo 6800, Torre 3, piso 28, Las Condes, Santiago - Chile..</span>
          </div>
          </div>
          <div className='title'>
          <img
            className="link-logo"
            src={logo}
            alt="Logo de empresa Easytransport"
          />
        <h3>Easy Transport</h3>
          </div>
          <div className="link">
          <href>@ Contáctanos</href>
          <href>Centro de Ayuda</href>
          <href>Sobre Nosotros</href>
          </div>
          <div className='contact'>
          <href>Servicio al Cliente</href>
          <href>Términos y condiciones</href>
          <href>Tu Privacidad</href>
          <href>Sostenibilidad</href>
          </div>
      </footer>
    </>
  );
};
export default Footer;
