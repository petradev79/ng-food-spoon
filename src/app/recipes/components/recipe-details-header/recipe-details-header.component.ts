import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';

import { RecipeDetailsInterface } from 'src/app/recipes/models/recipe-details.interface';

@Component({
  selector: 'app-recipe-details-header',
  templateUrl: './recipe-details-header.component.html',
  styleUrls: ['./recipe-details-header.component.scss'],
})
export class RecipeDetailsHeaderComponent implements OnInit, OnDestroy {
  @Input() recipeDetails!: RecipeDetailsInterface;
  isFavorite: boolean = false;
  cartSubscription: Subscription | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart.subscribe((_cart) => {
      this.isFavorite = _cart.items.some(
        (_item) => _item.id === this.recipeDetails.id
      );
    });
  }

  onToggleIsFavorite() {
    const item = {
      id: this.recipeDetails.id,
      title: this.recipeDetails.title,
      image: this.recipeDetails.image,
      imageType: this.recipeDetails.imageType,
    };
    this.cartService.toggleIsFavorite(item);
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
