import { ApiProperty } from '@nestjs/swagger'

export class ProductResponse {
  @ApiProperty()
  name: string

  @ApiProperty()
  price: number

  @ApiProperty()
  currency: string
}
