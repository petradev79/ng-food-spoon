import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CartService } from 'src/app/cart/services/cart.service';
import { CartListComponent } from './components/cart-list/cart-list.component';

const routes: Routes = [
  {
    path: 'cart-list',
    component: CartListComponent,
  },
];

@NgModule({
  declarations: [CartListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [],
  providers: [CartService],
})
export class CartModule {}
