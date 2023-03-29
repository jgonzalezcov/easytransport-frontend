import { Service } from './service'

export class DriverService extends Service {
  /** @description Obtiene todos los viajes existentes */
  static async list(id) {
    const drivers = await this.get(`driver/${id}`)
    return drivers
  }
  static async softdeletedriver(id) {
    const drivers = await this.softDelete(`driver/softdelete/${id}`)
    return drivers
  }
  static async deletedriver(id) {
    const drivers = await this.delete(`driver/${id}`)
    return drivers
  }
  static async createdriver(body) {
    const drivers = await this.post(`driver`, body)
    return drivers
  }
  static async updatedriver(body, id) {
    const drivers = await this.put(`driver/${id}`, body)
    return drivers
  }
}
