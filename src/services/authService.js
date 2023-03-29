import { Service } from './service'

/** @description Este servicio se encarga de gestionar la creacion y autenticacion de clientes y usuarios */
export class AuthService extends Service {
  /** @description Esta funcion permite inciar sesion tanto para un cliente como un transportista a traves del parametro typeAccount */
  static async login(email, password, typeAccount) {
    const url = typeAccount === 'client' ? 'client/login' : 'transport/login'
    const body = { email, password }
    const token = await this.post(url, body)
    localStorage.setItem('token', token.data)
    return token.data
  }

  /** @description Actualiza los datos del usuario */
  static async editUser(user, id, typeAccount) {
    const { name, last_name, phone, address } = user
    const url =
      typeAccount === 'client' ? 'client/updateData' : 'transport/updateData'
    const body = { name, last_name, phone, address }
    const token = await this.put(`${url}/${id}`, body)
    localStorage.removeItem('token')
    localStorage.setItem('token', token.data)
    return token.data
  }

  /** @description Actualiza password */
  static async editPasword(passw, id, typeAccount) {
    const { password } = passw
    const url =
      typeAccount === 'client'
        ? 'client/updatePassword'
        : 'transport/updatePassword'
    const body = { password }
    const token = await this.put(`${url}/${id}`, body)
    localStorage.removeItem('token')
    localStorage.setItem('token', token.data)
    return token.data
  }

  /** @description Esta funcion permite crear un usuario ya sea un cliente o un transportista a traves del parametro typeAccount */
  static async singin(user, typeAccount) {
    const url = typeAccount === 'client' ? 'client/signin' : 'transport/signin'
    const response = await this.post(url, user)
    return response.data
  }
}
