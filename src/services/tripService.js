import { Service } from './service'

export class TripService extends Service {
  /** @description Obtiene todos los viajes existentes */
  static async all() {
    const trips = await this.get('trip')
    return trips
  }
  static async deleteTrip(id) {
    const trips = await this.delete(`trip/${id}`)
    return trips
  }
  static async createTrip(body) {
    const trips = await this.post(`trip`, body)
    return trips
  }
  static async updateTrip(body) {
    const trips = await this.post(`trip`, body)
    return trips
  }
}
