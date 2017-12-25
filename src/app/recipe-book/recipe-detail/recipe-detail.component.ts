import {Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../shopping-list/shoppinglist.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";

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
              private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.recipeId = +params["id"];
      this.recipe = this.recipeService.getRecipe(this.recipeId);
    });
  }

  toShoppingList(ingredients: Ingredient[]){
    for(let ingredient of ingredients){
      this.shoppingListService.addIngredient(ingredient);
    }
  }

  onDelete(id: number){
    this.recipeService.deleteRecipe(id);
    this.router.navigate(['/recipes']);
  }

}
