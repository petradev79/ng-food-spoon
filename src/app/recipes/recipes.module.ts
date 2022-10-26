import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';

import { RecipesService } from 'src/app/recipes/services/recipes.service';
import { RecipesComponent } from 'src/app/recipes/recipes.component';
import { RecipeListComponent } from 'src/app/recipes/components/recipes-list/recipe-list.component';
import { RecipeItemComponent } from 'src/app/recipes/components/recipe-item/recipe-item';
import { RecipeFiltersComponent } from 'src/app/recipes/components/recipe-filters/recipe-filters';
import { RecipeSliderComponent } from 'src/app/recipes/components/recipe-slider/recipe-slider';
import { RecipeDetailsComponent } from 'src/app/recipes/components/recipe-details/recipe-details';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
  },
  {
    path: 'recipe-details/:id',
    component: RecipeDetailsComponent,
  },
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeFiltersComponent,
    RecipeSliderComponent,
    RecipeDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    NgxSliderModule,
    MatExpansionModule,
    MatInputModule,
  ],
  exports: [],
  providers: [RecipesService],
})
export class RecipesModule {}
