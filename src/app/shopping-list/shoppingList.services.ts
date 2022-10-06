import { ingredientsModel } from "../shared/ingredients.model";

export class ShoppingListServices {
    ingredients: ingredientsModel[] = [
        new ingredientsModel("Item one" , 5),
        new ingredientsModel("Item two" , 10),
      ]
}