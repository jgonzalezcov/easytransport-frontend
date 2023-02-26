import React, { useEffect } from 'react';
import { TripService } from '../../services/tripService';

export const Client = () => {
  /** @description La llamada a este endpoint es solo uno de prueba para el envio del token en el servicio, un usuarios nunca debiese poder ver todos los viajes por lo cual despues habra que cambiar la llamada por un endpoint que realmente corresponda para esta vista  */
  const getAllTrips = async () => {
    const trips = await TripService.all();
    console.log('trips', trips);
  };

  useEffect(() => {
    getAllTrips();
  }, []);

  return <div>Client view</div>;
};
