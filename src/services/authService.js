import { Service } from './service';

/** @description Este servicio se encarga de gestionar la creacion y autenticacion de clientes y usuarios */
export class AuthService extends Service {
  /** @description Esta funcion permite inciar sesion tanto para un cliente como un transportista a traves del parametro typeAccount */
  static async login(email, password, typeAccount) {
    const url = typeAccount === 'client' ? 'client/login' : 'transport/login';
    const body = { email, password };
    const token = await this.post(url, body);
    localStorage.setItem('token', token);
    return token;
  }

  /** @description Esta funcion permite crear un usuario ya sea un cliente o un transportista a traves del parametro typeAccount */
  static async singin(user, typeAccount) {
    const url = typeAccount === 'client' ? 'client/signin' : 'transport/signin';
    const response = await this.post(url, user);
    return response;
  }
}
