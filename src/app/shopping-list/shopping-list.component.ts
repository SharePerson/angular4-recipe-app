import {Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from "./shoppinglist.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {

	ingredients : Ingredient[];

  selectedIndex: number;
  selectedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.ingredientAdded.subscribe(
      (ingredients: Ingredient[]) =>{
        this.ingredients = ingredients;
      }
    );
  }

  onIngredientClick(ingredient)
  {
    this.selectedIndex = ingredient.index;
    this.selectedIngredient = ingredient.ingredient;
  }

  onIngredientDeleted(index: number){
    this.ingredients.splice(index, 1);
  }

}
