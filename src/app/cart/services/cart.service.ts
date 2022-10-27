import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CartInterface } from 'src/app/cart/models/cart.interface';
import { RecipeInterface } from 'src/app/shared/models/recipe.interface';

@Injectable()
export class CartService {
  cart = new BehaviorSubject<CartInterface>({ items: [] });

  toggleIsFavorite(item: RecipeInterface): void {
    const itemInCart = this.cart.value.items.find(
      (_item) => _item.id === item.id
    );
    let items;

    if (itemInCart) {
      items = this.cart.value.items.filter(
        (_item) => _item.id !== itemInCart.id
      );
    } else {
      items = [...this.cart.value.items, item];
    }

    this.cart.next({ items });
  }
}
