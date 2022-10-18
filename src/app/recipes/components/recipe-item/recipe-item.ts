import { Component, Input, OnInit } from '@angular/core';
import { RecipeInterface } from 'src/app/recipes/models/recipes.interface';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.html',
  styleUrls: ['./recipe-item.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipe!: RecipeInterface;

  constructor() {}

  ngOnInit() {}
}
