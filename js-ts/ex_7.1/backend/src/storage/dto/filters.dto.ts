import { ApiPropertyOptional } from '@nestjs/swagger'

export class ProductFilters {
  @ApiPropertyOptional()
  page?: number

  @ApiPropertyOptional()
  perPage?: number

  @ApiPropertyOptional()
  name?: string
}
