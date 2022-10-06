import { Component, OnInit } from '@angular/core';
import { recipeModel } from '../recipe.model';
import { RecipeServices } from '../recipe.services';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

 
  recipes: recipeModel[]
  constructor(private recipeServices : RecipeServices) { }

  ngOnInit(): void {
    this.recipes = this.recipeServices.recipes
  }

 

}
