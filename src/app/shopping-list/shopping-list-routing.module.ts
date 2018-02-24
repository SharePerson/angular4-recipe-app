import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingListEditorComponent} from "./shopping-list-editor/shopping-list-editor.component";

const shoppingListRoutes: Routes = [
  { path: '', component: ShoppingListComponent, children: [
      {path: ':id', component: ShoppingListEditorComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(shoppingListRoutes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule{}
