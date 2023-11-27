import { Controller, Get } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ApiOkResponse } from '@nestjs/swagger'
import { ProductResponse } from './response/product.response'

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/')
  @ApiOkResponse({
    type: [ProductResponse],
  })
  listProducts() {
    return this.productsService.getProducts()
  }
}
