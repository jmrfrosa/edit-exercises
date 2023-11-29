import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { ApiOkResponse } from '@nestjs/swagger'
import { OrderResponse } from './response/order.response'
import { CreateOrderRequest } from './request/orders.request'

@Controller('/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('/')
  @ApiOkResponse({
    type: [OrderResponse],
  })
  listOrders() {
    return this.ordersService.getOrders()
  }

  @Get('/:id')
  @ApiOkResponse({
    type: OrderResponse,
  })
  listOrder(@Param('id') orderId: string) {
    return this.ordersService.getOrder(orderId)
  }

  @Post('/')
  @ApiOkResponse({
    type: [OrderResponse],
  })
  createOrder(@Body() body: CreateOrderRequest) {
    return this.ordersService.createOrder(body)
  }

  @Delete('/:id')
  @ApiOkResponse()
  deleteOrder(@Param('id') orderId: string) {
    return this.ordersService.deleteOrder(orderId)
  }
}
