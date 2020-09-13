import { Injectable } from '@angular/core';
import { products } from './phone';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products = [];

  addToCart(product) {
    this.products.push(product);
  }

  getProduct() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    return this.products;
  }

  constructor() {}
}
