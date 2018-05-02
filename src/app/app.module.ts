import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ShoppingListService} from "./shopping-list/shoppinglist.service";
import {AppRoutingModule} from "./app-routing.module";
import {RecipeService} from "./recipe-book/recipe.service";
import {HttpModule} from "@angular/http";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ShoppingListEditorComponent} from "./shopping-list/shopping-list-editor/shopping-list-editor.component";
import {FormsModule} from "@angular/forms";

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
    HttpModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    ShoppingListService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
