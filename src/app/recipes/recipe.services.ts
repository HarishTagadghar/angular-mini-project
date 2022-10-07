import { EventEmitter, Injectable } from "@angular/core";
import { ingredientsModel } from "../shared/ingredients.model";
import { ShoppingListServices } from "../shopping-list/shoppingList.services";
import { recipeModel } from "./recipe.model";

@Injectable()
export class RecipeServices {
    selectedRecipe = new EventEmitter<recipeModel>()
    recipes : recipeModel[]  = [
        new recipeModel('A Test Recipe',
         'This is simply a test',
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
          [{name:'chicken' , amount : 20}]),
        new recipeModel('Another Test Recipe', 
        'This is simply a test',
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
         [{name:'mutton' , amount : 22}])
      ]

        constructor(private slService : ShoppingListServices){}

        addIngredientsToShoppingList(ingredients:ingredientsModel[]){
        this.slService.addIngredientsToSL(ingredients)
        }
}