import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { RecipesDataInterface } from 'src/app/recipes/models/recipes.interface';
import { SaveSliderValuesInterface } from 'src/app/recipes/models/slider.interface';

const API_KEY = '7d27d7003f8d42c3a204351bc7a42cbd';
const BASE_URL = 'https://api.spoonacular.com/recipes';

@Injectable()
export class RecipesService {
  minCalories$ = new BehaviorSubject<number>(50);
  maxCalories$ = new BehaviorSubject<number>(800);
  minCarbs$ = new BehaviorSubject<number>(10);
  maxCarbs$ = new BehaviorSubject<number>(100);
  minProtein$ = new BehaviorSubject<number>(10);
  maxProtein$ = new BehaviorSubject<number>(100);
  minFat$ = new BehaviorSubject<number>(1);
  maxFat$ = new BehaviorSubject<number>(100);

  constructor(private http: HttpClient) {}

  getRecipesData(): Observable<RecipesDataInterface> {
    return this.http.get<RecipesDataInterface>(
      `${BASE_URL}/complexSearch?apiKey=${API_KEY}&number=30&minCalories=${this.minCalories$.getValue()}&maxCalories=${this.maxCalories$.getValue()}&minCarbs=${this.minCarbs$.getValue()}&maxCarbs=${this.maxCarbs$.getValue()}&minProtein=${this.minProtein$.getValue()}&maxProtein=${this.maxProtein$.getValue()}&minFat=${this.minFat$.getValue()}&maxFat=${this.maxFat$.getValue()}`
    );
  }

  changeSliderValues(changedValues: SaveSliderValuesInterface) {
    console.log(
      'service',
      this.minCalories$.getValue(),
      this.maxCalories$.getValue(),
      this.minCarbs$.getValue(),
      this.maxCarbs$.getValue(),
      this.minProtein$.getValue(),
      this.maxProtein$.getValue(),
      this.minFat$.getValue(),
      this.maxFat$.getValue()
    );

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

    console.log(
      'service',
      this.minCalories$.getValue(),
      this.maxCalories$.getValue(),
      this.minCarbs$.getValue(),
      this.maxCarbs$.getValue(),
      this.minProtein$.getValue(),
      this.maxProtein$.getValue(),
      this.minFat$.getValue(),
      this.maxFat$.getValue()
    );
  }
}
