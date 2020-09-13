import { Component, OnInit } from '@angular/core';
import { Product } from './../product';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { stringify } from '@angular/compiler/src/util';
import { TestService } from './../test.service';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  refresh = new Subject();
  product: Product = { name: '', price: null, num: null, category: '' };

  displayedColumns: string[] = ['name', 'category', 'num', 'price', 'remove'];

  constructor(private testService: TestService) {}

  products: Product[];

  ngOnInit(): void {
    this.refresh
      .pipe(switchMap(() => this.testService.getProducts()))
      .subscribe((products) => {
        this.products = products;
      });

    this.refresh.next();
  }

  addProduct(): void {
    this.testService.addProduct(this.product).subscribe((products) => {
      this.products.push(products);
      window.alert('Added to Cart');
      this.refresh.next();
    });
  }

  removeProduct(id: string) {
    this.products = this.products.filter((h) => h !== this.product);
    this.testService.removeProduct(id).subscribe();
    window.alert('Deleted from Cart');
    this.refresh.next();
  }
}
