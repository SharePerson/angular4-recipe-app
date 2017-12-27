import {Recipe} from "./recipe.model";
import * as _ from 'underscore';
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {

  constructor(private http: Http){}

  private recipes: Recipe[] = [];
  private recipeBackendUrl: string = 'https://ng-recipe-backend-f99d0.firebaseio.com/recipes.json';
  recipesFetched: Subject<Recipe[]> = new Subject();
  recipesSaved = new Subject();


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

  saveRecipes(){
    this.http.put(this.recipeBackendUrl, this.recipes).subscribe(
      (response: Response)=> {
        console.log('Recipes are saved successfully with response: ' + JSON.stringify(response));
        this.recipesSaved.next();
      },
      (error: Response) => console.log(error)
    );
  }

  fetchRecipes(){
    this.http.get(this.recipeBackendUrl).map(
      (response: Response) =>{
        let recipes: Recipe[] = response.json();
        for(let recipe of recipes){
          if(!recipe.ingredients)
            recipe.ingredients = [];
        }

        return recipes;
      }
    ).subscribe(
      (response: Recipe[]) =>{
        this.recipes = response;
        this.recipesFetched.next(this.recipes);
      },
      (error: Response) =>{
        console.log('Error occurred retrieving recipes: '+ error);
      }
    );
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
