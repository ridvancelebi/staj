import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {
  MatRippleModule,
  MATERIAL_SANITY_CHECKS,
} from '@angular/material/core';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  exports: [MatInputModule, MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
