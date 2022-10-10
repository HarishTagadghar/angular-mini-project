import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesItemComponent } from './recipes/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { OpenDropdownDirective } from './shared/open-dropdown.directive';
import { ShoppingListServices } from './shopping-list/shoppingList.services';
import { AppRoutingModule } from './app.routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    OpenDropdownDirective,
    RecipeStartComponent,
    EditRecipeComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
