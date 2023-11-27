import { ApiProperty } from '@nestjs/swagger'

class OrderProductResponse {
  @ApiProperty()
  name: string

  @ApiProperty()
  quantity: number
}

export class OrderResponse {
  @ApiProperty()
  id: string

  @ApiProperty()
  currency: string

  @ApiProperty()
  status: string

  @ApiProperty({ type: [OrderProductResponse] })
  products: OrderProductResponse[]
}
