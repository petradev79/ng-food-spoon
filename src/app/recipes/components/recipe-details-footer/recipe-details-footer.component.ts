import { Component, Input, OnInit } from '@angular/core';

import { RecipeDetailsInterface } from 'src/app/recipes/models/recipe-details.interface';

@Component({
  selector: 'app-recipe-details-footer',
  templateUrl: './recipe-details-footer.component.html',
  styleUrls: ['./recipe-details-footer.component.scss'],
})
export class RecipeDetailsFooterComponent implements OnInit {
  @Input() recipeDetails!: RecipeDetailsInterface;
  ingredientImagPath: string =
    'https://spoonacular.com/cdn/ingredients_100x100/';

  constructor() {}

  ngOnInit(): void {}
}
