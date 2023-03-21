import jwtDecode from 'jwt-decode';

/** @description Retorna un objeto con la informacion del token */
export const getTokenData = () => {
  try {
    const tokenData = jwtDecode(localStorage.getItem('token'));
    localStorage.setItem('tokenData', JSON.stringify(tokenData));
    return tokenData;
  } catch (e) {
    return null;
  }
};
