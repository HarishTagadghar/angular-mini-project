import { EventEmitter } from "@angular/core";
import { recipeModel } from "./recipe.model";

export class RecipeServices {
    recipes : recipeModel[]  = [
        new recipeModel('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new recipeModel('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
      ]
      selectedRecipe = new EventEmitter<recipeModel>()
}