import { Component, OnInit ,Input} from '@angular/core';
import { ingredientsModel } from 'src/app/shared/ingredients.model';
import { recipeModel } from '../recipe.model';
import { RecipeServices } from '../recipe.services';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
@Input() recipe:recipeModel;
  constructor(private recipeService : RecipeServices) { }

  ngOnInit(): void {
  }
  addToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
}
