import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from './../product-item/product-item.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

export interface Product {
  [key: string]: any;
}
