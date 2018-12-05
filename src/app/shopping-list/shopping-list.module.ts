import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingListEditorComponent} from './shopping-list-editor/shopping-list-editor.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ShoppingListRoutingModule} from './shopping-list-routing.module';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditorComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule {}
