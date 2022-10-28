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
  recipes$ = new BehaviorSubject<RecipeInterface[]>([
    // {
    //   id: 547775,
    //   title: 'Creamy Avocado Pasta',
    //   image: 'https://spoonacular.com/recipeImages/547775-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 818941,
    //   title: 'Avocado Toast with Eggs, Spinach, and Tomatoes',
    //   image: 'https://spoonacular.com/recipeImages/818941-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 689502,
    //   title: 'Melt In Your Mouth Kale Salad',
    //   image: 'https://spoonacular.com/recipeImages/689502-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 812966,
    //   title: 'Low Carb Frosty',
    //   image: 'https://spoonacular.com/recipeImages/812966-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 547899,
    //   title: 'Sweet Potato and Black Bean Mexican Salad',
    //   image: 'https://spoonacular.com/recipeImages/547899-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 613079,
    //   title: 'Smashed White Bean and Avocado Sandwich',
    //   image: 'https://spoonacular.com/recipeImages/613079-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 512226,
    //   title: 'Creamy Broccoli Spinach Soup | A Bowl of Green',
    //   image: 'https://spoonacular.com/recipeImages/512226-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 995889,
    //   title: 'Low Calorie Peanut Butter Banana Spinach Smoothie',
    //   image: 'https://spoonacular.com/recipeImages/995889-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 483531,
    //   title: 'Black Bean and Barley Salad',
    //   image: 'https://spoonacular.com/recipeImages/483531-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 695642,
    //   title: 'Bean Burgers with Spicy Guacamole',
    //   image: 'https://spoonacular.com/recipeImages/695642-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 733459,
    //   title: 'Hummus Veggie Wrap',
    //   image: 'https://spoonacular.com/recipeImages/733459-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 588323,
    //   title: 'Cinnamon toast crunch roasted chickpeas',
    //   image: 'https://spoonacular.com/recipeImages/588323-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 611943,
    //   title: 'Spinach Pesto Quinoa Bowl',
    //   image: 'https://spoonacular.com/recipeImages/611943-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 529546,
    //   title:
    //     'Mint Chocolate Green Protein Smoothie (gluten free & can be vegan!)',
    //   image: 'https://spoonacular.com/recipeImages/529546-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 573591,
    //   title: 'Maple Glazed Salmon',
    //   image: 'https://spoonacular.com/recipeImages/573591-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 480310,
    //   title: 'Raspberry Banana Avocado Smoothie',
    //   image: 'https://spoonacular.com/recipeImages/480310-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 578449,
    //   title: 'Creamy avocado and rocket pasta',
    //   image: 'https://spoonacular.com/recipeImages/578449-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 495508,
    //   title:
    //     'How to Build a Perfect Smoothie (+ a Chocolate Mint Green Smoothie !)',
    //   image: 'https://spoonacular.com/recipeImages/495508-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 775925,
    //   title: 'Baked Mustard-Crusted Salmon With Asparagus and Tarragon',
    //   image: 'https://spoonacular.com/recipeImages/775925-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 621163,
    //   title: 'Pesto Pasta with Lemon, Spinach, Edamame & Toasted Almonds',
    //   image: 'https://spoonacular.com/recipeImages/621163-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 591705,
    //   title: 'Tuna & White Bean Salad',
    //   image: 'https://spoonacular.com/recipeImages/591705-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 695118,
    //   title: 'Tuna & White Bean Salad',
    //   image: 'https://spoonacular.com/recipeImages/695118-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 496931,
    //   title: 'Avocado Kale Superfood Smoothie',
    //   image: 'https://spoonacular.com/recipeImages/496931-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 872984,
    //   title: 'Warm Quinoa, Sweet Potato and Kale Salad',
    //   image: 'https://spoonacular.com/recipeImages/872984-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 779803,
    //   title: 'Falafel Salad with Lemon-Tahini Dressing',
    //   image: 'https://spoonacular.com/recipeImages/779803-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 483676,
    //   title: 'Salted Chocolate Oatmeal Smoothie',
    //   image: 'https://spoonacular.com/recipeImages/483676-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 495223,
    //   title: 'Pesto Quinoa & White Bean Cakes with Roasted Tomatoes',
    //   image: 'https://spoonacular.com/recipeImages/495223-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 724675,
    //   title: 'Quinoa Avocado Spinach Power Salad',
    //   image: 'https://spoonacular.com/recipeImages/724675-312x231.png',
    //   imageType: 'png',
    // },
    // {
    //   id: 592292,
    //   title: 'Marinated White Beans',
    //   image: 'https://spoonacular.com/recipeImages/592292-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 482512,
    //   title: 'Chocolate Espresso Protein Smoothie',
    //   image: 'https://spoonacular.com/recipeImages/482512-312x231.jpg',
    //   imageType: 'jpg',
    // },
  ]);
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
