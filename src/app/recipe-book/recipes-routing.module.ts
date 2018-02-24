import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipeEditorComponent} from "./recipe-editor/recipe-editor.component";
import {RecipeBookComponent} from "./recipe-book.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";

const recipesRoutes: Routes = [
  { path: '', component: RecipeBookComponent, children: [
      { path: 'add', component: RecipeEditorComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditorComponent }
    ] }
];

@NgModule({
  imports:[RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule{}
