import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { RecipesDataInterface } from 'src/app/recipes/models/recipes.interface';

const API_KEY = '7d27d7003f8d42c3a204351bc7a42cbd';
const BASE_URL = 'https://api.spoonacular.com/recipes';

@Injectable()
export class RecipesService {
  constructor(private http: HttpClient) {}

  getRecipesData(): Observable<RecipesDataInterface> {
    return this.http.get<RecipesDataInterface>(
      `${BASE_URL}/complexSearch?apiKey=${API_KEY}&number=30&minCalories=50&maxCalories=80&minCarbs=10&maxCarbs=100&minProtein=10&maxProtein=100&minFat=1&maxFat=100`
    );
  }
}
