import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [
		new Recipe('A test recipe', 'This is a description test', 'http://chef.mn/images/classification/20151016132257-fork.png'),
		new Recipe('A test recipe 2', 'This is a description test 2', 'http://images.media-allrecipes.com/userphotos/250x250/02/57/31/2573174.jpg')
	];

    @Output() recipeChanged = new EventEmitter<Recipe>();

  constructor() { }

      ngOnInit() {

      }

    onRecipeSelected(selectedRecipe: Recipe){
        this.recipeChanged.emit(selectedRecipe);
    }
}
