import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipeDetailsInterface } from 'src/app/recipes/models/recipe-details.interface';
import { RecipesService } from 'src/app/recipes/services/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipeId!: number;
  recipeDetails!: RecipeDetailsInterface;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((val) => {
      this.recipeId = val['id'];
    });
    this.onGetRecipeDetails();
  }

  onGetRecipeDetails() {
    this.recipesService.getRecipeDetails(this.recipeId).subscribe((_recipe) => {
      console.log(_recipe);
      this.recipeDetails = _recipe;
    });
  }
}
