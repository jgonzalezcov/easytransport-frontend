import axios from 'axios';

export class Service {
  static baseUrl = 'http://localhost:3333/';

  static async get(url) {
    const data = await axios.get(this.baseUrl + url, this.getHeader(url));
    return data;
  }
  static async post(url, body) {
    const data = await axios.post(
      this.baseUrl + url,
      body,
      this.getHeader(url)
    );
    return data;
  }
  static async put(url, body) {
    const data = await axios.put(this.baseUrl + url, body, this.getHeader(url));
    return data;
  }
  static async delete(url) {
    const data = await axios.delete(this.baseUrl + url, this.getHeader(url));
    return data;
  }
  static getHeader(url) {
    // Creamos un listado de rutas donde no agregaremos el token en las peticiones
    const excludeUrls = ['client/login', 'transport/login'];
    if (!excludeUrls.includes(url)) {
      return {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      };
    } else {
      return {};
    }
  }
}
