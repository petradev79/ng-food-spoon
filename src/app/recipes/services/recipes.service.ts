import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {
  RecipeInterface,
  RecipesDataInterface,
} from 'src/app/recipes/models/recipes.interface';
import { SaveSliderValuesInterface } from 'src/app/recipes/models/slider.interface';

const API_KEY = '7d27d7003f8d42c3a204351bc7a42cbd';
const BASE_URL = 'https://api.spoonacular.com/recipes';

@Injectable()
export class RecipesService {
  recipes$ = new BehaviorSubject<RecipeInterface[]>([
    // {
    //   id: 592479,
    //   title: 'Kale and Quinoa Salad with Black Beans',
    //   image: 'https://spoonacular.com/recipeImages/592479-312x231.jpg',
    //   imageType: 'jpg',
    // },
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
    //   id: 495111,
    //   title: 'Citrus Sesame Kale',
    //   image: 'https://spoonacular.com/recipeImages/495111-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 689502,
    //   title: 'Melt In Your Mouth Kale Salad',
    //   image: 'https://spoonacular.com/recipeImages/689502-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 582897,
    //   title: 'Mexican Salad with Lime Dressing',
    //   image: 'https://spoonacular.com/recipeImages/582897-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 777037,
    //   title: 'Weekly Meal Plan',
    //   image: 'https://spoonacular.com/recipeImages/777037-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 801710,
    //   title: 'Matcha Green Tea and Pineapple Smoothie',
    //   image: 'https://spoonacular.com/recipeImages/801710-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 695486,
    //   title: 'Green Smoothie',
    //   image: 'https://spoonacular.com/recipeImages/695486-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 812966,
    //   title: 'Low Carb Frosty',
    //   image: 'https://spoonacular.com/recipeImages/812966-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 584495,
    //   title: 'Chopped Kale Salad with Pomegranate & Avocado',
    //   image: 'https://spoonacular.com/recipeImages/584495-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 547899,
    //   title: 'Sweet Potato and Black Bean Mexican Salad',
    //   image: 'https://spoonacular.com/recipeImages/547899-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 578102,
    //   title: 'Avocado chickpea salad (and a giveaway!)',
    //   image: 'https://spoonacular.com/recipeImages/578102-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 696698,
    //   title: 'Tuscan-Style Tuna Salad',
    //   image: 'https://spoonacular.com/recipeImages/696698-312x231.jpg',
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
    //   id: 473243,
    //   title: 'Green Lemonade',
    //   image: 'https://spoonacular.com/recipeImages/473243-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 677670,
    //   title: 'Cleansing Detox Soup',
    //   image: 'https://spoonacular.com/recipeImages/677670-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 733459,
    //   title: 'Hummus Veggie Wrap',
    //   image: 'https://spoonacular.com/recipeImages/733459-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 524349,
    //   title: 'lemon garlic broccoli',
    //   image: 'https://spoonacular.com/recipeImages/524349-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 496929,
    //   title: 'Mango Spinach Green Smoothie',
    //   image: 'https://spoonacular.com/recipeImages/496929-312x231.jpg',
    //   imageType: 'jpg',
    // },
    // {
    //   id: 810865,
    //   title: 'Simple Massaged Kale Salad with Lemon Dressing',
    //   image: 'https://spoonacular.com/recipeImages/810865-312x231.jpg',
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
      console.log(recipesData);
      this.recipes$.next(recipesData.results);
    });
    console.log(
      'service',
      this.query$.getValue(),
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
