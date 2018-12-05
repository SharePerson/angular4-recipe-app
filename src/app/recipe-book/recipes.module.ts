import {NgModule} from '@angular/core';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipeEditorComponent} from './recipe-editor/recipe-editor.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeBookComponent} from './recipe-book.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {}
