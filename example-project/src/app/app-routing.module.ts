import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductComponent } from './product/product.component';
import { ToptoolbarComponent } from './toptoolbar/toptoolbar.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: ToptoolbarComponent,
        children: [
          {
            path: 'detail/:id',
            component: ProductDetailComponent,
          },
          { path: 'mycard', component: CartComponent },
          {
            path: '',
            component: ProductComponent,
            children: [{ path: '', component: ProductItemComponent }],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
