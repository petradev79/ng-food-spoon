import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {
  SaveSliderValuesInterface,
  SliderInterface,
} from 'src/app/recipes/models/slider.interface';

@Component({
  selector: 'app-recipe-slider',
  templateUrl: './recipe-slider.html',
  styleUrls: ['./recipe-slider.scss'],
})
export class RecipeSliderComponent implements OnInit {
  @Input() slider!: SliderInterface;
  @Output() changeSliderValuesEvent =
    new EventEmitter<SaveSliderValuesInterface>();

  constructor() {}

  ngOnInit() {}

  resetSliderValues() {
    if (this.slider.options.floor) {
      this.slider.minValue = this.slider.options.floor;
    } else {
      this.slider.minValue = 1;
    }

    if (this.slider.options.ceil) {
      this.slider.maxValue = this.slider.options.ceil;
    }

    this.changeSliderValuesEvent.emit({
      title: this.slider.title,
      minValue: this.slider.minValue,
      maxValue: this.slider.maxValue,
    });
  }

  saveSliderValues() {
    this.changeSliderValuesEvent.emit({
      title: this.slider.title,
      minValue: this.slider.minValue,
      maxValue: this.slider.maxValue,
    });
  }
}
