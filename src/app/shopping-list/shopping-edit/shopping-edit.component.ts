import { Component, OnInit, Output,EventEmitter, ViewChild , ElementRef } from '@angular/core';
import { ingredientsModel } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName' ,{static:true}) inputNameRef : ElementRef ;
  @ViewChild('inputAmount' ,{static:true}) inputAmountRef: ElementRef ;
  @Output() ingredient = new EventEmitter<ingredientsModel>()


  constructor() { }

  ngOnInit(): void {
  }
  addIngredients(){
    
  const newIngredient = new ingredientsModel(this.inputNameRef.nativeElement.value ,this.inputAmountRef.nativeElement.value)
  this.ingredient.emit(newIngredient)
  }
}
