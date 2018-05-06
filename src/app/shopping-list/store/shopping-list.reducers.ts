import * as ShoppingListActions from './shopping-list.actions';
import {Ingredient} from "../../shared/ingredient.model";

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5), new Ingredient('Orange', 10)
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch(action.type){
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      }
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.payload.index];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      };
      let newIngredients = [...state.ingredients];
      newIngredients[action.payload.index] = updatedIngredient;
      return{
        ...state,
        ingredients: newIngredients
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      const oldIngredients = [...state.ingredients];
      oldIngredients.splice(action.payload, 1);
      return{
        ...state,
        ingredients: oldIngredients
      }
    default:
      return state;
  }
}
