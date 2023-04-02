import { toast } from 'react-hot-toast'
import { Service } from './service'

export class ShippingService extends Service {
  /** @description Obtiene los envios de un cliente especifico */
  static async getByClient(clientId) {
    try {
      const shippings = await this.get(`shipping/byClient?clientId=${clientId}`)
      return shippings.data
    } catch (error) {
      return null
    }
  }

  /** @description Actualiza un envio a traves de su id */
  static async updateShipping(shippingId, body) {
    try {
      const shippings = await this.put(`shipping/${shippingId}`, body)
      return shippings.data
    } catch (error) {
      toast('Ha ocurrido un error al guardar')
      return null
    }
  }

  static async getById(shippingId) {
    try {
      const shippings = await this.get(`shipping/${shippingId}`)
      return shippings.data
    } catch (error) {
      toast('Ha ocurrido un error')
      return null
    }
  }

  static async create(body) {
    try {
      const trips = await this.post(`shipping`, body)
      return trips
    } catch (error) {
      toast('Ha ocurrido un error')
      return null
    }
  }
}
