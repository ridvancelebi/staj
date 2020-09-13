import { Component, OnInit } from '@angular/core';
import { products } from './../phone';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  products = products;

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to your card');
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}
}
