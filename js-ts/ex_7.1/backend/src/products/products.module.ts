import { Module } from '@nestjs/common'
import { StorageModule } from 'src/storage/storage.module'
import { ProductsService } from './products.service'
import { ProductsController } from './products.controller'

@Module({
  imports: [StorageModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
