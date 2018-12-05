import {Recipe} from './recipe.model';
import * as _ from 'underscore';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [];
  private recipeBackendUrl = 'https://ng-recipe-backend-f99d0.firebaseio.com/recipes.json';
  recipesFetched: Subject<Recipe[]> = new Subject();
  recipesSaved = new Subject();

  constructor(private httpClient: HttpClient) {}


  getRecipe(id: number) {
    const recipesFound = _.where(this.recipes, {id: id});
    return recipesFound.length > 0 ? recipesFound[0] : null;
  }

  private getNewItemId(): number {
    return this.recipes.length > 0 ? this.recipes[this.recipes.length - 1].id + 1 : 1;
  }

  private getIndex(id: number): number {
    const recipesFound = _.where(this.recipes, {id: id});
    return recipesFound.length > 0 ? this.recipes.indexOf(recipesFound[0]) : -1;
  }

  addRecipe(recipe: Recipe) {
    recipe.id = this.getNewItemId();
    this.recipes.push(recipe);
  }

  saveRecipes() {
    this.httpClient.put<Recipe[]>(this.recipeBackendUrl, this.recipes)
      .subscribe(
        (recipes: Recipe[]) => {
          console.log('Recipes are saved successfully with response: ' + JSON.stringify(recipes));
          this.recipesSaved.next();
        }
      );
  }

  fetchRecipes() {
    this.httpClient.get<Recipe[]>(this.recipeBackendUrl).subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
        this.recipesFetched.next(this.recipes);
      },
      (error: Response) => {
        console.log('Error occurred retrieving recipes: ' + error);
      }
    );
  }

  updateRecipe(id: number, recipe: Recipe) {
    const index = this.getIndex(id);
    recipe.id = id;
    if (index >= 0) {
      this.recipes[index] = recipe;
    }
  }

  deleteRecipe(id: number) {
    const index = this.getIndex(id);
    if (index >= 0) {
      this.recipes.splice(index, 1);
    }
  }
}
