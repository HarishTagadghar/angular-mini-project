import { Component, OnInit , Output , EventEmitter} from '@angular/core';
import { recipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<recipeModel>()
  
  recipes: recipeModel[] = [
    new recipeModel('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new recipeModel('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

  recipeSelected(recipe:recipeModel){
    this.selectedRecipe.emit(recipe)
  }

}
