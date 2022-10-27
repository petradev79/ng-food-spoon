import { Component, Input, OnInit } from '@angular/core';

import { RecipeDetailsInterface } from 'src/app/recipes/models/recipe-details.interface';

@Component({
  selector: 'app-recipe-details-header',
  templateUrl: './recipe-details-header.component.html',
  styleUrls: ['./recipe-details-header.component.scss'],
})
export class RecipeDetailsHeaderComponent implements OnInit {
  @Input() recipeDetails!: RecipeDetailsInterface;
  constructor() {}

  ngOnInit(): void {}
}
