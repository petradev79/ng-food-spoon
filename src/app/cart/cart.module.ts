import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartService } from 'src/app/cart/services/cart.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [CartService],
})
export class CartModule {}
