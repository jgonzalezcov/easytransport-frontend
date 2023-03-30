import { Service } from './service'

export class TripService extends Service {
  /** @description Obtiene todos los viajes existentes */
  static async all() {
    const trips = await this.get('trip')
    return trips
  }
  static async list(id) {
    const trips = await this.get(`trip/${id}`)
    return trips
  }

  static async listforclient(body) {
    const trips = await this.post(`trip/listforclient/`, body)
    return trips
  }
  static async deleteTrip(id) {
    const trips = await this.delete(`trip/${id}`)
    return trips
  }
  static async createTrip(body) {
    const trips = await this.post(`trip`, body)
    console.log('Holaaaaaa')
    return trips
  }
  static async updateTrip(body, id) {
    const trips = await this.put(`trip/${id}`, body)
    return trips
  }
  static async allTrips() {
    const trips = await this.get('trip/all')
    return trips
  }
}
