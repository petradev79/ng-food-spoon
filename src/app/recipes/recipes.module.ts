import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RecipesService } from 'src/app/recipes/services/recipes.service';
import { RecipesComponent } from 'src/app/recipes/recipes.component';
import { RecipeListComponent } from 'src/app/recipes/components/recipes-list/recipe-list.component';
import { RecipeItemComponent } from 'src/app/recipes/components/recipe-item/recipe-item';
import { RecipeFiltersComponent } from 'src/app/recipes/components/recipe-filters/recipe-filters';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
  },
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeFiltersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    NgxSliderModule,
  ],
  exports: [],
  providers: [RecipesService],
})
export class RecipesModule {}
