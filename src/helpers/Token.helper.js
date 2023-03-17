import jwtDecode from 'jwt-decode';

/** @description Retorna un objeto con la informacion del token */
export const getTokenData = () => {
  try {
    return jwtDecode(localStorage.getItem('token'));
  } catch (e) {
    return null;
  }
};
