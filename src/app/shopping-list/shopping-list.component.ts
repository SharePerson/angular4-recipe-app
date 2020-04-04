import {Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shoppinglist.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as fromShoppingList from './store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {

  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService, private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    this.shoppingListState.subscribe(({ingredients}) => {
      this.ingredients = ingredients;
    });
  }

  onSelect(index: number) {
    this.shoppingListService.selectIngredient(index, this.ingredients[index]);
  }

}
