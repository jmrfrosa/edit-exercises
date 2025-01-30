import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  ArrayNotEmpty,
  IsEnum,
  IsNumber,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator'
import { Currency } from 'src/app.constants'

export class CreateOrderProductRequest {
  @ApiProperty()
  @IsString()
  name: string

  @ApiProperty()
  @IsNumber({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 })
  @Min(0)
  quantity: number
}

export class CreateOrderRequest {
  @ApiProperty({ enum: Currency, enumName: 'Currency' })
  @IsEnum(Currency)
  currency: string

  @ApiProperty({ type: [CreateOrderProductRequest] })
  @ArrayNotEmpty()
  @ValidateNested()
  @Type(() => CreateOrderProductRequest)
  products: CreateOrderProductRequest[]
}
