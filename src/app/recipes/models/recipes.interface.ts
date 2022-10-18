export interface RecipesDataInterface {
  offset: number;
  number: number;
  results: RecipeInterface[];
  totalResults: number;
}

export interface RecipeInterface {
  id: number;
  title: string;
  image: string;
  imageType: string;
}
