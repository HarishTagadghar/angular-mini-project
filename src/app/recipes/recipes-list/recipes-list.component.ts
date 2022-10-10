import { Component, OnInit } from '@angular/core';
import { recipeModel } from '../recipe.model';
import { RecipeServices } from '../recipe.services';
import { Routes , Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

 
  recipes: recipeModel[]
  constructor(private recipeServices : RecipeServices , private router : Router ,private currentRoute : ActivatedRoute   ) { }

  ngOnInit(): void {
    this.recipes = this.recipeServices.recipes
  }

  AddNewRecipe(){
    this.router.navigate(['new'] , {relativeTo: this.currentRoute})
  }

}
