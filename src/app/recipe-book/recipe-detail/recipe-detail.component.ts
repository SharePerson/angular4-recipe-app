import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../shopping-list/shoppinglist.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {

  }

  toShoppingList(ingredients: Ingredient[]){
    for(let ingredient of ingredients){
      this.shoppingListService.addIngredient(ingredient);
    }
  }

}
