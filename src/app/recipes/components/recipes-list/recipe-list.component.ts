import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RecipeInterface } from 'src/app/shared/models/recipe.interface';
import { RecipesService } from 'src/app/recipes/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes$: Observable<RecipeInterface[]>;

  constructor(private recipesService: RecipesService) {
    this.recipes$ = this.recipesService.recipes$;
  }

  ngOnInit(): void {}
}
