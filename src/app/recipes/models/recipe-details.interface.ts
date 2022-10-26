export interface RecipeDetailsInterface {
  aggregateLikes: number;
  analyzedInstructions: AnalyzedInstructionInterface[];
  cheap: boolean;
  cookingMinutes: number;
  creditsText: string;
  cuisines: string[];
  dairyFree: boolean;
  diets: string[];
  dishTypes: string[];
  extendedIngredients: ExtendedIngredientInterface[];
  gaps: string;
  glutenFree: boolean;
  healthScore: number;
  id: number;
  image: string;
  imageType: string;
  instructions: string;
  lowFodmap: boolean;
  occasions: any[];
  originalId: null;
  preparationMinutes: number;
  pricePerServing: number;
  readyInMinutes: number;
  servings: number;
  sourceName: string;
  sourceUrl: string;
  summary: string;
  sustainable: boolean;
  title: string;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  weightWatcherSmartPoints: number;
  winePairing: any;
}

interface AnalyzedInstructionInterface {
  name: string;
  steps: {
    number: number;
    step: string;
  }[];
}

interface ExtendedIngredientInterface {
  aisle: string;
  amount: number;
  consistency: string;
  id: number;
  image: string;
  measures: {
    metric: MeasureInterface;
    us: MeasureInterface;
  };
  meta: string[];
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  unit: string;
}

interface MeasureInterface {
  amount: number;
  unitLong: string;
  unitShort: string;
}
