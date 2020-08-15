import { Injectable, NotFoundException} from '@nestjs/common';
import { Product } from './product.module';

@Injectable()
export class ProductServise {
    products: Product [] = [];
      insertProduct(name: string, desc: string, price: number): string {
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, name, desc, price);
        this.products.push(newProduct);
        return prodId;
    }

    getAllProducts(): Product [] {
        return [...this.products];
    }

    getProductById(productId: string) {
     const product = this.findProduct(productId)[0];
      return {...product}
    }

  removeById(productId:string) {
  const [product, index] = this.findProduct(productId);
  this.products.splice(index, 1);
  return `deleted successfully`
  }

  updateTheProduct(productId: string, prodName: string, prodDesc: string, prodPrice: number) {
    const [product, index] = this.findProduct(productId);

    const updatedProd = { ...product };
    if (prodName) {
      updatedProd.name = prodName
    }
    if (prodDesc) {
      updatedProd.desc = prodDesc
    }
    if (prodPrice) {
      updatedProd.price = prodPrice
    }
    this.products[index] = updatedProd;
    return updatedProd;
  }


  private findProduct(id: string):[Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if(!product){
      throw new NotFoundException("could not found the prod");
    }
    return [product, productIndex];
  }
}