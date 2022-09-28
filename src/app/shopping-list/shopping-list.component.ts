import { Component, OnInit } from '@angular/core';
import { ingredientsModel } from '../shared/ingredients.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: ingredientsModel[] = [
    new ingredientsModel("Item one" , 5),
    new ingredientsModel("Item two" , 10),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
