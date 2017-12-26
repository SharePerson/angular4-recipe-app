import {Recipe} from "./recipe.model";
import * as _ from 'underscore';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'A test recipe',
      'This is a description test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        {name: "Meat", amount: 1}, {name: "Bread", amount: 2}
      ]),
    new Recipe(
      2,
      'A test recipe 2',
      'This is a description test 2',
      'http://images.media-allrecipes.com/userphotos/250x250/02/57/31/2573174.jpg',
      [
        {name: "Fries", amount: 20}, {name: "Soup", amount: 3}
      ])
  ];

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    let recipesFound = _.where(this.recipes, {id: id});
    return recipesFound.length > 0? recipesFound[0]: null;
  }

  private getNewItemId(): number {
    return this.recipes.length > 0? this.recipes[this.recipes.length-1].id + 1: 1;
  }

  private getIndex(id: number): number{
    let recipesFound = _.where(this.recipes, {id: id});
    return recipesFound.length> 0? this.recipes.indexOf(recipesFound[0]) : -1;
  }

  addRecipe(recipe: Recipe){
    recipe.id = this.getNewItemId();
    this.recipes.push(recipe);
  }

  updateRecipe(id: number, recipe: Recipe){
    let index = this.getIndex(id);
    recipe.id = id;
    if(index >= 0)
      this.recipes[index] = recipe;
  }

  deleteRecipe(id: number){
    let index = this.getIndex(id);
    if(index >= 0)
      this.recipes.splice(index, 1);
  }
}
