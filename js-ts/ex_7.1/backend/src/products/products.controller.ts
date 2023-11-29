import { Controller, Get, Query } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ApiOkResponse } from '@nestjs/swagger'
import { ProductResponse } from './response/product.response'
import { ProductFilters } from 'src/storage/dto/filters.dto'

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/')
  @ApiOkResponse({
    type: [ProductResponse],
  })
  listProducts(@Query() filters: ProductFilters) {
    return this.productsService.getProducts(filters)
  }
}
