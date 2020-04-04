import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shoppinglist.service';
import { NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {Ingredient} from '../../shared/ingredient.model';
import * as ShoppingListActions from '../store/shopping-list.actions';

import {AppState} from 'app/app.reducer';

@Component({
  selector: 'app-shopping-list-editor',
  templateUrl: './shopping-list-editor.component.html',
  styleUrls: ['./shopping-list-editor.component.css']
})
export class ShoppingListEditorComponent implements OnInit, OnDestroy {

  @ViewChild('f') ingredientForm: NgForm;
  selectedIndex: number;
  ingredientSelectionSubscription: Subscription;
  editMode: boolean;

  constructor(private shoppingListService: ShoppingListService, private store: Store<AppState>) { }

  ngOnInit() {
    this.editMode = false;

    this.ingredientSelectionSubscription = this.shoppingListService.ingredientSelected.subscribe((selectedItem) => {
      this.ingredientForm.form.patchValue({name: selectedItem.ingredient.name});
      this.ingredientForm.form.patchValue({amount: selectedItem.ingredient.amount});
      this.selectedIndex = selectedItem.index;
      this.editMode = true;
    });
  }

  ngOnDestroy() {
    this.ingredientSelectionSubscription.unsubscribe();
  }

  onAddIngredient(form: NgForm) {
    if (form.valid) {
      const newIngredient = new Ingredient(form.value.name, form.value.amount);

      if (!this.editMode) {
        this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
      } else {
        this.store.dispatch(new ShoppingListActions.UpdateIngredient({index: this.selectedIndex, ingredient: newIngredient}));
      }

      this.onClear(form);
    }
  }

  onDelete(form: NgForm) {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient(this.selectedIndex));
    this.onClear(form);
  }

  onClear(form: NgForm) {
    form.reset();
    this.editMode = false;
  }

}
