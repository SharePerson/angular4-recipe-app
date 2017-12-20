import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs/Subject";

export class ShoppingListService {

  private ingredients : Ingredient[] = [
    new Ingredient('Apples', 5), new Ingredient('Orange', 10)
  ];

  ingredientAdded = new Subject<Ingredient[]>();

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  getIngredients()
  {
    return this.ingredients.slice();
  }

}
