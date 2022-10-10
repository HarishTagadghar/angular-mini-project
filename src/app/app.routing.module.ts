import { NgModule } from "@angular/core";
import { Routes , RouterModule} from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component"
import { RecipesDetailsComponent } from "./recipes/recipes-details/recipes-details.component";
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';

const AppRoutes : Routes =  [
    {path: '' , redirectTo : '/recipes' , pathMatch : 'full'  },
    {path : 'recipes' ,component : RecipesComponent , children : [
        {path:''  , component: RecipeStartComponent},
        {path:'new' , component: EditRecipeComponent},
        {path:':id' , component: RecipesDetailsComponent},
        {path:':id/edit' , component: EditRecipeComponent}
    ] },
    {path : 'shoppingList' ,component : ShoppingListComponent }
]
@NgModule({
 imports:[RouterModule.forRoot(AppRoutes)],
 exports  : [ RouterModule]
})
export class AppRoutingModule {}
