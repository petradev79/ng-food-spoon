import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CartInterface } from 'src/app/cart/models/cart.interface';
import { CartService } from 'src/app/cart/services/cart.service';
import { RecipeInterface } from 'src/app/shared/models/recipe.interface';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit, OnDestroy {
  cart: CartInterface = { items: [] };
  displayedColumns: string[] = [
    'number',
    'id',
    'image',
    'name',
    'details',
    'delete',
  ];
  dataSource: RecipeInterface[] = [];
  cartSubscription: Subscription | undefined;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart.subscribe(
      (_cart: CartInterface) => {
        this.cart = _cart;
        this.dataSource = _cart.items;
      }
    );
  }

  onGoToDetails(id: number) {
    this.router.navigate(['recipe-details', id]);
  }

  onClearCart() {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: RecipeInterface) {
    this.cartService.toggleIsFavorite(item);
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
