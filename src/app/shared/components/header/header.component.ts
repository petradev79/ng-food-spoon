import { Component, Input, OnInit } from '@angular/core';

import { CartInterface } from 'src/app/cart/models/cart.interface';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  itemsQuantity = 0;
  private _cart: CartInterface = { items: [] };

  constructor(private cartService: CartService) {}

  @Input()
  get cart(): CartInterface {
    return this._cart;
  }

  set cart(cart: CartInterface) {
    this._cart = cart;

    this.itemsQuantity = cart.items.length;
  }

  ngOnInit(): void {
    this.cartService.cart.subscribe((cart) => {
      this.cart = cart;
    });
  }

  onClearCart() {
    // this.cartService.clearCart();
  }
}
