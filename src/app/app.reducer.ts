import * as fromShoppingList from 'app/shopping-list/store/shopping-list.reducers';
import { ActionReducerMap } from '@ngrx/store';


//represents global state for all reducers to be merged together here
export interface AppState {
    shoppingList: fromShoppingList.State
}

//merges all reducers
export const appReducer: ActionReducerMap<AppState> = {
    shoppingList: fromShoppingList.shoppingListReducer
};