import { Service } from './service'

export class TruckService extends Service {
  /** @description Obtiene todos los viajes existentes */
  static async list(id) {
    const trucks = await this.get(`truck/${id}`)
    return trucks
  }
  static async softdeletetruck(id) {
    const trucks = await this.softDelete(`truck/softdelete/${id}`)
    return trucks
  }
  static async deletetruck(id) {
    const trucks = await this.delete(`truck/${id}`)
    return trucks
  }
  static async createtruck(body) {
    const trucks = await this.post(`truck`, body)
    return trucks
  }
  static async updatetruck(body, id) {
    const trucks = await this.put(`truck/${id}`, body)
    return trucks
  }
}
