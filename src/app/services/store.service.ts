import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  private myShoppingCart: Product[] = []

  addProduct(producto: Product) {
    this.myShoppingCart.push(producto);
  }

  getShoppingCart() {
    return this.myShoppingCart
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0)
  }

}
