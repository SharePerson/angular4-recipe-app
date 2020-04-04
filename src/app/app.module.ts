import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ShoppingListService} from './shopping-list/shoppinglist.service';
import {AppRoutingModule} from './app-routing.module';
import {RecipeService} from './recipe-book/recipe.service';
import {SharedModule} from './shared/shared.module';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';

import {appReducer} from 'app/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    StoreModule.forRoot(appReducer)
  ],
  providers: [
    ShoppingListService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
