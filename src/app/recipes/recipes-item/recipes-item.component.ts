import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { recipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe:recipeModel;
  @Output() selectedRecipe = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }
  
  recipeisSelected(){
    this.selectedRecipe.emit()
  }
}
