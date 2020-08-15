import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { ProductServise } from './product.service';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductServise) {
  }

  @Post()
  addProduct(
    // or   @Body() completeBody object
    @Body('name') prodTitle: string,
    @Body('desc') prodDesc: string,
    @Body('price') prodPrice: number): any {
    const generatedId = this.productsService.insertProduct(prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }

  @Get()
  getProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getProductById(prodId);
  }

  @Delete(':id')
  removeProduct(@Param('id') prodId: string) {
    return this.productsService.removeById(prodId);
  }

  @Patch(':id')
  updateProduct(@Param('id') prodId: string,
  @Body('name') prodName: string,
  @Body('desc') prodDesc: string,
  @Body('price') prodPrice: number,
  ){
    this.productsService.updateTheProduct(prodId, prodName, prodDesc, prodPrice);
  }

}