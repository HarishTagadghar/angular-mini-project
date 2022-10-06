import { Component, OnInit, Output,EventEmitter, ViewChild , ElementRef } from '@angular/core';
import { ingredientsModel } from 'src/app/shared/ingredients.model';
import { ShoppingListServices } from '../shoppingList.services';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName' ,{static:true}) inputNameRef : ElementRef ;
  @ViewChild('inputAmount' ,{static:true}) inputAmountRef: ElementRef ;


  constructor(private shopingListServices : ShoppingListServices) { }

  ngOnInit(): void {
  }
  addIngredients(){
    
  const newIngredient = new ingredientsModel(this.inputNameRef.nativeElement.value ,this.inputAmountRef.nativeElement.value)
  this.shopingListServices.ingredients.push(newIngredient)
  }
}
