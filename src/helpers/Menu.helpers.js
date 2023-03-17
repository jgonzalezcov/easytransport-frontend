import {
  faDriversLicense,
  faShippingFast,
  faTruck,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { getTokenData } from './Token.helper'

const getMenuClient = () => {
  return [
    {
      title: 'Envios',
      icon: faShippingFast,
      url: null,
      parent: true,
    },
    {
      title: 'Nuevo envío',
      icon: null,
      url: 'newShipment',
      parent: false,
    },
    {
      title: 'Lista de envíos',
      icon: null,
      url: 'listShipment',
      parent: false,
    },
    {
      title: 'Mi cuenta',
      icon: faUser,
      url: null,
      parent: true,
    },
    {
      title: 'Editar perfil',
      icon: null,
      url: 'editProfile',
      parent: false,
    },
    {
      title: 'Cerrar Sesión',
      icon: null,
      url: 'logout',
      parent: false,
    },
  ]
}

const getMenuTransport = () => {
  return [
    {
      title: 'Viajes',
      icon: faShippingFast,
      url: null,
      parent: true,
    },
    {
      title: 'Nuevo Viaje',
      icon: null,
      url: 'newTrip',
      parent: false,
    },
    {
      title: 'Lista de Viajes',
      icon: null,
      url: 'listTrip',
      parent: false,
    },
    {
      title: 'Camiones',
      icon: faTruck,
      url: null,
      parent: true,
    },
    {
      title: 'Agregar Camion',
      icon: null,
      url: 'newTruck',
      parent: false,
    },
    {
      title: 'Configurar Camiones',
      icon: null,
      url: 'configTruck',
      parent: false,
    },
    {
      title: 'Conductores',
      icon: faDriversLicense,
      url: null,
      parent: true,
    },
    {
      title: 'Agregar Conductor',
      icon: null,
      url: 'newDriver',
      parent: false,
    },
    {
      title: 'Configurar Conductores',
      icon: null,
      url: 'configDriver',
      parent: false,
    },
    {
      title: 'Mi cuenta',
      icon: faUser,
      url: null,
      parent: true,
    },
    {
      title: 'Editar perfil',
      icon: null,
      url: 'editProfile',
      parent: false,
    },
    {
      title: 'Cerrar Sesión',
      icon: null,
      url: 'logout',
      parent: false,
    },
  ]
}

export const getDefaultProfile = () => {
  const token = localStorage.getItem('token')
  if (token) {
    const tokenData = getTokenData()
    return tokenData.role // Debiese retornar "transport" o "client"
  } else {
    return 'none'
  }
}

export const getMenu = (role) => {
  if (role === 'client') return getMenuClient()
  if (role === 'transport') return getMenuTransport()
  return []
}
