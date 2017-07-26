import {Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

	ingredients : Ingredient[] = [
		new Ingredient('Apples', 5), new Ingredient('Orange', 10)
	];

  selectedIndex: number;
  selectedIngredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient)
  {
    this.ingredients.push(ingredient);
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
