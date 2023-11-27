import { ApiProperty } from '@nestjs/swagger'

export class CreateOrderProductRequest {
  @ApiProperty()
  name: string

  @ApiProperty()
  quantity: number
}

export class CreateOrderRequest {
  @ApiProperty()
  currency: string

  @ApiProperty({ type: [CreateOrderProductRequest] })
  products: CreateOrderProductRequest[]
}
