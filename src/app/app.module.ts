import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ShoppingListService} from "./shopping-list/shoppinglist.service";
import {AppRoutingModule} from "./app-routing.module";
import {RecipeService} from "./recipe-book/recipe.service";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ShoppingListEditorComponent} from "./shopping-list/shopping-list-editor/shopping-list-editor.component";
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {shoppingListReducer} from "./shopping-list/store/shopping-list.reducers";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer})
  ],
  providers: [
    ShoppingListService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
