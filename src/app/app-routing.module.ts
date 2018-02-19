import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {RecipeBookComponent} from "./recipe-book/recipe-book.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeDetailComponent} from "./recipe-book/recipe-detail/recipe-detail.component";
import {ShoppingListEditorComponent} from "app/shopping-list/shopping-list-editor/shopping-list-editor.component";
import {RecipeEditorComponent} from "./recipe-book/recipe-editor/recipe-editor.component";

const appRoutes : Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full'},
  { path: 'shopping-list', component: ShoppingListComponent, children: [
    {path: ':id', component: ShoppingListEditorComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
