import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5), new Ingredient('Orange', 10)
  ];

  ingredientSelected = new Subject<{index: number, ingredient: Ingredient}>();


  selectIngredient(index: number, ingredient: Ingredient) {
    this.ingredientSelected.next({index: index, ingredient: ingredient});
  }

}
