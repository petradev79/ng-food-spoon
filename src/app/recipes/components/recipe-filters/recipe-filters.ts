import { Component, OnInit } from '@angular/core';

import {
  SaveSliderValuesInterface,
  SliderInterface,
} from 'src/app/recipes/models/slider.interface';
import { RecipesService } from 'src/app/recipes/services/recipes.service';

@Component({
  selector: 'app-recipe-filters',
  templateUrl: './recipe-filters.html',
  styleUrls: ['./recipe-filters.scss'],
})
export class RecipeFiltersComponent implements OnInit {
  sliderCalories: SliderInterface = {
    title: 'Calories',
    description: 'Choose min and max amount of calories.',
    minValue: this.recipesService.minCalories$.getValue(),
    maxValue: this.recipesService.maxCalories$.getValue(),
    options: {
      floor: 50,
      ceil: 800,
      step: 10,
    },
  };

  sliderCarbs: SliderInterface = {
    title: 'Carbohydrates',
    description: 'Choose min and max amount of carbohydrates in grams.',
    minValue: this.recipesService.minCarbs$.getValue(),
    maxValue: this.recipesService.maxCarbs$.getValue(),
    options: {
      floor: 10,
      ceil: 100,
      step: 10,
    },
  };

  sliderProtein: SliderInterface = {
    title: 'Protein',
    description: 'Choose min and max amount of protein in grams.',
    minValue: this.recipesService.minProtein$.getValue(),
    maxValue: this.recipesService.maxProtein$.getValue(),
    options: {
      floor: 10,
      ceil: 100,
      step: 10,
    },
  };

  sliderFat: SliderInterface = {
    title: 'Fat',
    description: 'Choose min and max amount of fat in grams.',
    minValue: this.recipesService.minFat$.getValue(),
    maxValue: this.recipesService.maxFat$.getValue(),
    options: {
      floor: 0,
      ceil: 100,
      step: 10,
    },
  };

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {}

  onChangeSliderValues(changedValues: SaveSliderValuesInterface) {
    // console.log(changedValues);

    this.recipesService.changeSliderValues(changedValues);
  }
}
