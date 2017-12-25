import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs/Subject";

export class ShoppingListService {

  private ingredients : Ingredient[] = [
    new Ingredient('Apples', 5), new Ingredient('Orange', 10)
  ];

  ingredientAdded = new Subject<Ingredient[]>();
  ingredientSelected = new Subject<{index: number, ingredient: Ingredient}>();

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  selectIngredient(index: number, ingredient: Ingredient){
    this.ingredientSelected.next({index: index, ingredient: ingredient});
  }

  updateIngredient(index: number, ingredient: Ingredient){
    this.ingredients[index] = ingredient;
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

  getIngredients() {
    return this.ingredients;
  }

}
