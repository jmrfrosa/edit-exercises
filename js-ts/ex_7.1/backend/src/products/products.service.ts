import { Injectable } from '@nestjs/common'
import { ProductFilters } from 'src/storage/dto/filters.dto'
import { StorageService } from 'src/storage/storage.service'

@Injectable()
export class ProductsService {
  constructor(private readonly storage: StorageService) {}

  getProducts(filters?: ProductFilters) {
    return this.storage.findProducts(filters)
  }
}
