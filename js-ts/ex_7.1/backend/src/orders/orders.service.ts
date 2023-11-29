import { Injectable } from '@nestjs/common'
import { OrderResponse } from './response/order.response'
import { customAlphabet as nanoIdGenerator } from 'nanoid'
import { CreateOrderRequest } from './request/orders.request'
import { StorageService } from 'src/storage/storage.service'

@Injectable()
export class OrdersService {
  constructor(private readonly storage: StorageService) {}

  private idGenerator = nanoIdGenerator('0123456789', 3)

  getOrders() {
    return this.storage.findOrders()
  }

  getOrder(orderId: string) {
    return this.storage.findOrder(orderId)
  }

  createOrder(body: CreateOrderRequest) {
    const newOrder = this.generateOrder(body)

    this.storage.createOrder(newOrder)
  }

  private generateOrder(body: CreateOrderRequest): OrderResponse {
    const id = `A${this.idGenerator(3)}`
    const initialStatus = 'draft'

    return {
      id,
      status: initialStatus,
      ...body,
    }
  }

  deleteOrder(orderId: string) {
    return this.storage.deleteOrder(orderId)
  }
}
