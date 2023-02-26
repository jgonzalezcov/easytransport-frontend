import { Service } from './service';

export class TripService extends Service {
  /** @description Obtiene todos los viajes existentes */
  static async all() {
    const trips = await this.get('trip');
    return trips;
  }
}
