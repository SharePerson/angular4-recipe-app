import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a description test', 'http://chef.mn/images/classification/20151016132257-fork.png'),
    new Recipe('A test recipe 2', 'This is a description test 2', 'http://images.media-allrecipes.com/userphotos/250x250/02/57/31/2573174.jpg')
  ];

  getRecipes(){
    return this.recipes.slice(); //to get a clone of the current array instead of a reference
  }
}
