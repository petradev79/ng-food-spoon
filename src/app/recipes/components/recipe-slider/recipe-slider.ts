import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

import { SaveSliderValuesInterface } from 'src/app/recipes/models/slider.interface';

@Component({
  selector: 'app-recipe-slider',
  templateUrl: './recipe-slider.html',
  styleUrls: ['./recipe-slider.scss'],
})
export class RecipeSliderComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() value!: number;
  @Input() highValue!: number;
  @Input() options!: Options;
  @Output() changeSliderValuesEvent =
    new EventEmitter<SaveSliderValuesInterface>();

  constructor() {}

  ngOnInit() {}

  resetSliderValues() {
    if (this.options.floor) {
      this.value = this.options.floor;
    } else {
      this.value = 1;
    }

    if (this.options.ceil) {
      this.highValue = this.options.ceil;
    }

    this.changeSliderValuesEvent.emit({
      title: this.title,
      minValue: this.value,
      maxValue: this.highValue,
    });
  }

  saveSliderValues() {
    this.changeSliderValuesEvent.emit({
      title: this.title,
      minValue: this.value,
      maxValue: this.highValue,
    });
  }
}
