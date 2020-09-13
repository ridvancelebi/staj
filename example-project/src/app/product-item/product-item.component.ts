import { Component, OnInit } from '@angular/core';
import { ProductComponent } from './../product/product.component';
import { products } from './../phone';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit(): void {
  }

}
