import { Service } from './service'

export class DriverService extends Service {
  static async createDriver(body) {
    try {
      const trips = await this.post(`driver`, body)
      return trips
    } catch (error) {
      return null
    }
  }
}
