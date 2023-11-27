import { BadRequestException, Injectable } from '@nestjs/common'
import ordersFromDatabase from './data/orders.json'
import productsFromDatabase from './data/products.json'
import { OrderResponse } from 'src/orders/response/order.response'
import { ProductResponse } from 'src/products/response/product.response'

let orders = ordersFromDatabase as OrderResponse[]
let products = productsFromDatabase as ProductResponse[]

@Injectable()
export class StorageService {
  findOrders() {
    return orders
  }

  findOrder(id: string) {
    return orders.find((o) => o.id === id)
  }

  createOrder(order: OrderResponse) {
    orders = [...orders, order]

    return orders
  }

  deleteOrder(id: string) {
    const order = this.findOrder(id)

    if (!order) {
      throw new BadRequestException(`Could not find order with id ${id}`)
    }

    orders = orders.filter((o) => o !== order)
  }

  findProducts() {
    return products
  }

  findProduct(name: string) {
    return products.find((p) => p.name === name)
  }

  createProduct(product: ProductResponse) {
    products = [...products, product]

    return products
  }
}
