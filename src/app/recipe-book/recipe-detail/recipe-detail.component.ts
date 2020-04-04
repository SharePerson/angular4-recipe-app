import {Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shoppinglist.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import {Store} from '@ngrx/store';
import * as fromShoppingList from '../../../app/shopping-list/store/shopping-list.reducers';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  recipeId: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private store: Store<fromShoppingList.AppState>) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipeId = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.recipeId);
    });
  }

  toShoppingList(ingredients: Ingredient[]) {
    for (const ingredient of ingredients) {
      this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
    }
  }

  onDelete(id: number) {
    this.recipeService.deleteRecipe(id);
    this.router.navigate(['../'], { relativeTo: this.route});
  }

}
