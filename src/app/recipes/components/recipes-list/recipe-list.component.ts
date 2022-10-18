import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { RecipeInterface } from 'src/app/recipes/models/recipes.interface';
import { RecipesService } from 'src/app/recipes/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes$ = new BehaviorSubject<RecipeInterface[]>([
    {
      id: 592479,
      title: 'Kale and Quinoa Salad with Black Beans',
      image: 'https://spoonacular.com/recipeImages/592479-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 547775,
      title: 'Creamy Avocado Pasta',
      image: 'https://spoonacular.com/recipeImages/547775-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 818941,
      title: 'Avocado Toast with Eggs, Spinach, and Tomatoes',
      image: 'https://spoonacular.com/recipeImages/818941-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 495111,
      title: 'Citrus Sesame Kale',
      image: 'https://spoonacular.com/recipeImages/495111-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 689502,
      title: 'Melt In Your Mouth Kale Salad',
      image: 'https://spoonacular.com/recipeImages/689502-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 582897,
      title: 'Mexican Salad with Lime Dressing',
      image: 'https://spoonacular.com/recipeImages/582897-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 777037,
      title: 'Weekly Meal Plan',
      image: 'https://spoonacular.com/recipeImages/777037-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 801710,
      title: 'Matcha Green Tea and Pineapple Smoothie',
      image: 'https://spoonacular.com/recipeImages/801710-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 695486,
      title: 'Green Smoothie',
      image: 'https://spoonacular.com/recipeImages/695486-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 812966,
      title: 'Low Carb Frosty',
      image: 'https://spoonacular.com/recipeImages/812966-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 584495,
      title: 'Chopped Kale Salad with Pomegranate & Avocado',
      image: 'https://spoonacular.com/recipeImages/584495-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 547899,
      title: 'Sweet Potato and Black Bean Mexican Salad',
      image: 'https://spoonacular.com/recipeImages/547899-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 578102,
      title: 'Avocado chickpea salad (and a giveaway!)',
      image: 'https://spoonacular.com/recipeImages/578102-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 696698,
      title: 'Tuscan-Style Tuna Salad',
      image: 'https://spoonacular.com/recipeImages/696698-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 613079,
      title: 'Smashed White Bean and Avocado Sandwich',
      image: 'https://spoonacular.com/recipeImages/613079-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 512226,
      title: 'Creamy Broccoli Spinach Soup | A Bowl of Green',
      image: 'https://spoonacular.com/recipeImages/512226-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 995889,
      title: 'Low Calorie Peanut Butter Banana Spinach Smoothie',
      image: 'https://spoonacular.com/recipeImages/995889-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 483531,
      title: 'Black Bean and Barley Salad',
      image: 'https://spoonacular.com/recipeImages/483531-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 695642,
      title: 'Bean Burgers with Spicy Guacamole',
      image: 'https://spoonacular.com/recipeImages/695642-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 473243,
      title: 'Green Lemonade',
      image: 'https://spoonacular.com/recipeImages/473243-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 677670,
      title: 'Cleansing Detox Soup',
      image: 'https://spoonacular.com/recipeImages/677670-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 733459,
      title: 'Hummus Veggie Wrap',
      image: 'https://spoonacular.com/recipeImages/733459-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 524349,
      title: 'lemon garlic broccoli',
      image: 'https://spoonacular.com/recipeImages/524349-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 496929,
      title: 'Mango Spinach Green Smoothie',
      image: 'https://spoonacular.com/recipeImages/496929-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 810865,
      title: 'Simple Massaged Kale Salad with Lemon Dressing',
      image: 'https://spoonacular.com/recipeImages/810865-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 588323,
      title: 'Cinnamon toast crunch roasted chickpeas',
      image: 'https://spoonacular.com/recipeImages/588323-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 611943,
      title: 'Spinach Pesto Quinoa Bowl',
      image: 'https://spoonacular.com/recipeImages/611943-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 529546,
      title:
        'Mint Chocolate Green Protein Smoothie (gluten free & can be vegan!)',
      image: 'https://spoonacular.com/recipeImages/529546-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 573591,
      title: 'Maple Glazed Salmon',
      image: 'https://spoonacular.com/recipeImages/573591-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 480310,
      title: 'Raspberry Banana Avocado Smoothie',
      image: 'https://spoonacular.com/recipeImages/480310-312x231.jpg',
      imageType: 'jpg',
    },
  ]);

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    // this.recipesService
    //   .getRecipesData()
    //   .subscribe((recipesData: RecipesDataInterface) => {
    //     console.log(recipesData);
    //     this.recipes$.next(recipesData.results);
    //   });
  }
}
