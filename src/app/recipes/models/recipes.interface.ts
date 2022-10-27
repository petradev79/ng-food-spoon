import { RecipeInterface } from 'src/app/shared/models/recipe.interface';

export interface RecipesDataInterface {
  offset: number;
  number: number;
  results: RecipeInterface[];
  totalResults: number;
}
