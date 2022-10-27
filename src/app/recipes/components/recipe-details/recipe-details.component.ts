import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipeDetailsInterface } from 'src/app/recipes/models/recipe-details.interface';
import { RecipesService } from 'src/app/recipes/services/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipeId!: number;
  recipeDetails: RecipeDetailsInterface = {
    aggregateLikes: 1595,
    analyzedInstructions: [
      {
        name: '',
        steps: [
          {
            number: 1,
            step: 'Bring water to a boil in a medium sized pot. Salt …ium, and cook until Al Dente, about 8-10 minutes.',
          },
          {
            number: 2,
            step: 'While the pasta is cooking, make the sauce by plac…ssor or blender. Process until smooth and creamy.',
          },
          {
            number: 3,
            step: 'When pasta is done cooking, drain and place pasta into a large bowl.',
          },
          {
            number: 4,
            step: 'Add the sauce to the pasta and toss until pasta is…ason with additional salt and pepper, if desired.',
          },
          {
            number: 5,
            step: 'Serve immediately.Note: This pasta dish is best eaten the day it is made.',
          },
        ],
      },
    ],
    cheap: false,
    cookingMinutes: 10,
    creditsText: 'Two Peas and Their Pod',
    cuisines: ['mexivcan'],
    dairyFree: true,
    diets: ['dairy free', 'lacto ovo vegetarian', 'vegan'],
    dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
    extendedIngredients: [
      {
        aisle: 'Produce',
        amount: 1,
        consistency: 'SOLID',
        id: 9037,
        image: 'avocado.jpg',
        measures: {
          metric: {
            amount: 2,
            unitLong: 'string',
            unitShort: 'string',
          },
          us: {
            amount: 2,
            unitLong: 'string',
            unitShort: 'string',
          },
        },
        meta: ['pitted', 'ripe'],
        name: 'avocado',
        nameClean: 'avocado',
        original: '1 large ripe Avocado, pitted and peel removed',
        originalName: 'ripe Avocado, pitted and peel removed',
        unit: 'large',
      },
      {
        aisle: 'Produce',
        amount: 1,
        consistency: 'SOLID',
        id: 9037,
        image: 'avocado.jpg',
        measures: {
          metric: {
            amount: 2,
            unitLong: 'string',
            unitShort: 'string',
          },
          us: {
            amount: 2,
            unitLong: 'string',
            unitShort: 'string',
          },
        },
        meta: ['pitted', 'ripe'],
        name: 'avocado',
        nameClean: 'avocado',
        original: '1 large ripe Avocado, pitted and peel removed',
        originalName: 'ripe Avocado, pitted and peel removed',
        unit: 'large',
      },
      {
        aisle: 'Produce',
        amount: 1,
        consistency: 'SOLID',
        id: 9037,
        image: 'avocado.jpg',
        measures: {
          metric: {
            amount: 2,
            unitLong: 'string',
            unitShort: 'string',
          },
          us: {
            amount: 2,
            unitLong: 'string',
            unitShort: 'string',
          },
        },
        meta: ['pitted', 'ripe'],
        name: 'avocado',
        nameClean: 'avocado',
        original: '1 large ripe Avocado, pitted and peel removed',
        originalName: 'ripe Avocado, pitted and peel removed',
        unit: 'large',
      },
      {
        aisle: 'Produce',
        amount: 1,
        consistency: 'SOLID',
        id: 9037,
        image: 'avocado.jpg',
        measures: {
          metric: {
            amount: 2,
            unitLong: 'string',
            unitShort: 'string',
          },
          us: {
            amount: 2,
            unitLong: 'string',
            unitShort: 'string',
          },
        },
        meta: ['pitted', 'ripe'],
        name: 'avocado',
        nameClean: 'avocado',
        original: '1 large ripe Avocado, pitted and peel removed',
        originalName: 'ripe Avocado, pitted and peel removed',
        unit: 'large',
      },
      {
        aisle: 'Produce',
        amount: 1,
        consistency: 'SOLID',
        id: 9037,
        image: 'avocado.jpg',
        measures: {
          metric: {
            amount: 2,
            unitLong: 'string',
            unitShort: 'string',
          },
          us: {
            amount: 2,
            unitLong: 'string',
            unitShort: 'string',
          },
        },
        meta: ['pitted', 'ripe'],
        name: 'avocado',
        nameClean: 'avocado',
        original: '1 large ripe Avocado, pitted and peel removed',
        originalName: 'ripe Avocado, pitted and peel removed',
        unit: 'large',
      },
      {
        aisle: 'Produce',
        amount: 1,
        consistency: 'SOLID',
        id: 9037,
        image: 'avocado.jpg',
        measures: {
          metric: {
            amount: 2,
            unitLong: 'string',
            unitShort: 'string',
          },
          us: {
            amount: 2,
            unitLong: 'string',
            unitShort: 'string',
          },
        },
        meta: ['pitted', 'ripe'],
        name: 'avocado',
        nameClean: 'avocado',
        original: '1 large ripe Avocado, pitted and peel removed',
        originalName: 'ripe Avocado, pitted and peel removed',
        unit: 'large',
      },
    ],
    gaps: 'no',
    glutenFree: false,
    healthScore: 100,
    id: 547775,
    image: 'https://spoonacular.com/recipeImages/547775-556x370.jpg',
    imageType: 'jpg',
    instructions:
      '1. Bring water to a boil in a medium sized pot. Salt the water and add in your pasta, reduce heat to medium, and cook until Al Dente, about 8-10 minutes.2. While the pasta is cooking, make the sauce by placing the avocado, garlic, lime juice, cilantro, salt and pepper into a food processor or blender. Process until smooth and creamy.3. When pasta is done cooking, drain and place pasta into a large bowl. Add the sauce to the pasta and toss until pasta is well coated. Season with additional salt and pepper, if desired. Serve immediately.Note: This pasta dish is best eaten the day it is made.',

    lowFodmap: false,
    occasions: [],
    originalId: null,
    preparationMinutes: 5,
    pricePerServing: 171.39,
    readyInMinutes: 15,
    servings: 2,
    sourceName: 'Two Peas and Their Pod',
    sourceUrl: 'http://www.twopeasandtheirpod.com/creamy-avocado-pasta/',
    summary:
      'Creamy Avocado Pastan is a <b>vegan</b> main course. This recipe makes 2 servings with <b>462 calories</b>, <b>15g of protein</b>, and <b>16g of fat</b> each. For <b>$1.34 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. A mixture of avocado, pasta, lime juice, and a handful of other ingredients are all it takes to make this recipe so delicious. To use up the kosher salt you could follow this main course with the <a href="https://spoonacular.com/recipes/low-fat-crumbs-cake-kosher-dairy-130933">Low Fat Crumbs Cake (Kosher-Dairy)</a> as a dessert. 67127 people have tried and liked this recipe. From preparation to the plate, this recipe takes about <b>15 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is amazing. Try <a href="https://spoonacular.com/recipes/my-creamy-avocado-pasta-21754">My Creamy Avocado Pasta</a>, <a href="https://spoonacular.com/recipes/creamy-avocado-pasta-551035">Creamy Avocado Pasta</a>, and <a href="https://spoonacular.com/recipes/creamy-avocado-pasta-512701">Creamy Avocado Pasta</a> for similar recipes.',
    sustainable: false,
    title: 'Creamy Avocado Pasta',
    vegan: true,
    vegetarian: true,
    veryHealthy: true,
    veryPopular: true,
    weightWatcherSmartPoints: 13,
    winePairing: '',
  };
  ingredientImagPath: string =
    'https://spoonacular.com/cdn/ingredients_100x100/';

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((val) => {
      this.recipeId = val['id'];
    });
    // this.onGetRecipeDetails();
  }

  onGetRecipeDetails() {
    this.recipesService.getRecipeDetails(this.recipeId).subscribe((_recipe) => {
      console.log(_recipe);
      this.recipeDetails = _recipe;
    });
  }
}
