import { Component, OnInit } from '@angular/core';
import { recipeModel } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedItem:recipeModel;

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(data){
   this.selectedItem = data
  }
}
