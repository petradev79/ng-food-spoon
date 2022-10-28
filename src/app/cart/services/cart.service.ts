import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CartInterface } from 'src/app/cart/models/cart.interface';
import { RecipeInterface } from 'src/app/shared/models/recipe.interface';

@Injectable()
export class CartService {
  cart = new BehaviorSubject<CartInterface>({
    items: [
      // {
      //   id: 547775,
      //   title: 'Creamy Avocado Pasta',
      //   image: 'https://spoonacular.com/recipeImages/547775-312x231.jpg',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 818941,
      //   title: 'Avocado Toast with Eggs, Spinach, and Tomatoes',
      //   image: 'https://spoonacular.com/recipeImages/818941-312x231.jpg',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 689502,
      //   title: 'Melt In Your Mouth Kale Salad',
      //   image: 'https://spoonacular.com/recipeImages/689502-312x231.jpg',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 812966,
      //   title: 'Low Carb Frosty',
      //   image: 'https://spoonacular.com/recipeImages/812966-312x231.jpg',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 547899,
      //   title: 'Sweet Potato and Black Bean Mexican Salad',
      //   image: 'https://spoonacular.com/recipeImages/547899-312x231.jpg',
      //   imageType: 'jpg',
      // },
      // {
      //   id: 613079,
      //   title: 'Smashed White Bean and Avocado Sandwich',
      //   image: 'https://spoonacular.com/recipeImages/613079-312x231.jpg',
      //   imageType: 'jpg',
      // },
    ],
  });

  toggleIsFavorite(item: RecipeInterface): void {
    let items;
    const itemInCart = this.cart.value.items.find(
      (_item) => _item.id === item.id
    );

    if (itemInCart) {
      items = this.cart.value.items.filter(
        (_item) => _item.id !== itemInCart.id
      );
    } else {
      items = [...this.cart.value.items, item];
    }

    this.cart.next({ items });
  }

  clearCart(): void {
    this.cart.next({ items: [] });
  }
}
