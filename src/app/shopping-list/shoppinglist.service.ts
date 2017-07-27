import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {

  private ingredients : Ingredient[] = [
    new Ingredient('Apples', 5), new Ingredient('Orange', 10)
  ];

  ingredientAdded = new EventEmitter<Ingredient[]>();

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice());
  }

  getIngredients()
  {
    return this.ingredients.slice();
  }

}
