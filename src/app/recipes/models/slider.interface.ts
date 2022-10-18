import { Options } from '@angular-slider/ngx-slider';

export interface SliderInterface {
  title: string;
  description: string;
  minValue: number;
  maxValue: number;
  options: Options;
}

export interface SaveSliderValuesInterface {
  title: string;
  minValue: number;
  maxValue: number;
}
