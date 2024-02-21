import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { DropdownDirectiveDirective } from './shared/dropdown-directive.directive';
import { ShoppingListService } from './recipes/services/shopping-list.service';
import { RecipesService } from './recipes/services/recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeFormComponent,
    DropdownDirectiveDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    ShoppingListService,
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
