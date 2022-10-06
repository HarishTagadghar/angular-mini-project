import { Component, OnInit } from '@angular/core';
import { ingredientsModel } from '../shared/ingredients.model';
import { ShoppingListServices } from './shoppingList.services';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: ingredientsModel[]

  constructor(private shopingListServices : ShoppingListServices) { }

  ngOnInit(): void {
    this.ingredients = this.shopingListServices.ingredients
  }

  addIngredient(ingredient: ingredientsModel){
    this.ingredients.push(ingredient)
  }
}
