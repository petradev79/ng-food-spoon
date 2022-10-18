import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-recipe-filters',
  templateUrl: './recipe-filters.html',
  styleUrls: ['./recipe-filter.scss'],
})
export class RecipeFiltersComponent implements OnInit {
  value: number = 0;
  highValue: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200,
    step: 10,
    showTicks: true,
  };
  constructor() {}

  ngOnInit() {}
}
