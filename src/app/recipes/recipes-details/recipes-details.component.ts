import { Component, OnInit ,Input} from '@angular/core';
import { recipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
@Input() recipe:recipeModel;
  constructor() { }

  ngOnInit(): void {
  }

}
