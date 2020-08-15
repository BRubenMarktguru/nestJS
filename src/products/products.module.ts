import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductServise } from './product.service';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductServise]
})

export class  ProductsModule{}