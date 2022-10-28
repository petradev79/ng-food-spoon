import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CartService } from 'src/app/cart/services/cart.service';
import { RecipeInterface } from 'src/app/shared/models/recipe.interface';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit, OnDestroy {
  @Input('recipe') recipe!: RecipeInterface;
  isFavorite: boolean = false;
  cartSubscription: Subscription | undefined;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.cartSubscription = this.cartService.cart.subscribe((_cart) => {
      this.isFavorite = _cart.items.some(
        (_item) => _item.id === this.recipe.id
      );
    });
  }

  onRecipeDetails() {
    this.router.navigate(['recipe-details', this.recipe.id]);
  }

  onToggleIsFavorite() {
    this.cartService.toggleIsFavorite(this.recipe);
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
