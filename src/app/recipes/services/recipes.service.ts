import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { RecipesDataInterface } from 'src/app/recipes/models/recipes.interface';
import { SaveSliderValuesInterface } from 'src/app/recipes/models/slider.interface';
import { RecipeDetailsInterface } from 'src/app/recipes/models/recipe-details.interface';
import { RecipeInterface } from 'src/app/shared/models/recipe.interface';

const API_KEY = '7d27d7003f8d42c3a204351bc7a42cbd';
const BASE_URL = 'https://api.spoonacular.com/recipes';

@Injectable()
export class RecipesService {
  recipes$ = new BehaviorSubject<RecipeInterface[]>([]);
  query$ = new BehaviorSubject<string>('');
  minCalories$ = new BehaviorSubject<number>(50);
  maxCalories$ = new BehaviorSubject<number>(800);
  minCarbs$ = new BehaviorSubject<number>(10);
  maxCarbs$ = new BehaviorSubject<number>(100);
  minProtein$ = new BehaviorSubject<number>(10);
  maxProtein$ = new BehaviorSubject<number>(100);
  minFat$ = new BehaviorSubject<number>(1);
  maxFat$ = new BehaviorSubject<number>(100);

  constructor(private http: HttpClient) {}

  fetchData(): Observable<RecipesDataInterface> {
    return this.http.get<RecipesDataInterface>(
      `${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${this.query$.getValue()}&number=30&minCalories=${this.minCalories$.getValue()}&maxCalories=${this.maxCalories$.getValue()}&minCarbs=${this.minCarbs$.getValue()}&maxCarbs=${this.maxCarbs$.getValue()}&minProtein=${this.minProtein$.getValue()}&maxProtein=${this.maxProtein$.getValue()}&minFat=${this.minFat$.getValue()}&maxFat=${this.maxFat$.getValue()}`
    );
  }

  getRecipes() {
    this.fetchData().subscribe((recipesData: RecipesDataInterface) => {
      this.recipes$.next(recipesData.results);
    });
  }

  getRecipeDetails(id: number): Observable<RecipeDetailsInterface> {
    return this.http.get<RecipeDetailsInterface>(
      `${BASE_URL}/${id}/information?apiKey=${API_KEY}`
    );
  }

  changeQueryValue(changedValue: string) {
    this.query$.next(changedValue);
  }

  changeSliderValues(changedValues: SaveSliderValuesInterface) {
    if (changedValues.title === 'Calories') {
      this.minCalories$.next(changedValues.minValue);
      this.maxCalories$.next(changedValues.maxValue);
    }
    if (changedValues.title === 'Carbohydrates') {
      this.minCarbs$.next(changedValues.minValue);
      this.maxCarbs$.next(changedValues.maxValue);
    }
    if (changedValues.title === 'Protein') {
      this.minProtein$.next(changedValues.minValue);
      this.maxProtein$.next(changedValues.maxValue);
    }
    if (changedValues.title === 'Fat') {
      this.minFat$.next(changedValues.minValue);
      this.maxFat$.next(changedValues.maxValue);
    }
  }

  resetSliderValues() {
    this.minCalories$.next(50),
      this.maxCalories$.next(800),
      this.minCarbs$.next(10),
      this.maxCarbs$.next(100),
      this.minProtein$.next(10),
      this.maxProtein$.next(100),
      this.minFat$.next(1),
      this.maxFat$.next(100);
  }
}
