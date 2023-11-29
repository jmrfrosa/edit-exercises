import { BadRequestException, Injectable } from '@nestjs/common'
import ordersFromDatabase from './data/orders.json'
import productsFromDatabase from './data/products.json'
import { OrderResponse } from 'src/orders/response/order.response'
import { ProductResponse } from 'src/products/response/product.response'
import { ProductFilters } from './dto/filters.dto'

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

  findProducts(filters?: ProductFilters) {
    if (!filters) return products

    let filteredProducts = products

    if (filters.name) {
      filteredProducts = filteredProducts.filter((p) =>
        p.name.includes(filters.name),
      )
    }

    if (filters.page) {
      const limit = Number(filters.perPage) ?? 3
      const start = (Number(filters.page) - 1) * limit

      console.log(`Slicing ${start}, ${start + limit}`)

      filteredProducts = filteredProducts.slice(start, start + limit)
    }

    return filteredProducts
  }

  findProduct(name: string) {
    return products.find((p) => p.name === name)
  }

  createProduct(product: ProductResponse) {
    products = [...products, product]

    return products
  }
}
