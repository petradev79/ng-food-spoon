import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeInterface } from 'src/app/recipes/models/recipes.interface';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipe!: RecipeInterface;
  isFavorite: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  onRecipeDetails() {
    this.router.navigate(['recipe-details', this.recipe.id]);
  }
}
