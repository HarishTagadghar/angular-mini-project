import { Component, OnInit } from '@angular/core';
import { recipeModel } from './recipe.model';
import { RecipeServices } from './recipe.services';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeServices]
})
export class RecipesComponent implements OnInit {
  selectedItem:recipeModel;

  constructor( private recipeServices : RecipeServices) { }

  ngOnInit(): void {
    this.recipeServices.selectedRecipe.subscribe(
      (recipe : recipeModel) => {
        this.selectedItem = recipe
      }
    )
  }

  selectItem(data){
   this.selectedItem = data
  }
}
