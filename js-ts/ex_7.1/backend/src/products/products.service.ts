import { Injectable } from '@nestjs/common'
import { StorageService } from 'src/storage/storage.service'

@Injectable()
export class ProductsService {
  constructor(private readonly storage: StorageService) {}

  getProducts() {
    return this.storage.findProducts()
  }
}
