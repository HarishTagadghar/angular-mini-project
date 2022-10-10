import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute , Route , Router} from '@angular/router'

import { ingredientsModel } from 'src/app/shared/ingredients.model';
import { recipeModel } from '../recipe.model';
import { RecipeServices } from '../recipe.services';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
recipe:recipeModel;
number:number;
  constructor(private recipeService : RecipeServices ,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params)=> {
          this.number = +params['id']
          this.recipe = this.recipeService.getRecipeById(this.number)
      }
    )
  }
  addToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  editRecipe(){
    this.router.navigate(['edit'] , {relativeTo:this.route})
  }
}
