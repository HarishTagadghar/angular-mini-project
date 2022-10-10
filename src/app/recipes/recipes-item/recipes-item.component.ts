import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { recipeModel } from '../recipe.model';
import { RecipeServices } from '../recipe.services';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe:recipeModel;
  @Input() Index:number;
  constructor( private recipeServices : RecipeServices) { }

  ngOnInit(): void {
  }
  

}
