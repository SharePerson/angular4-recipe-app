import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.css']
})
export class RecipeEditorComponent implements OnInit {

  constructor(private recipeService: RecipeService){
    if(!this.recipe){
      this.recipe = new Recipe(0, "", "", "", null);
    }
  }

  @Input() recipe: Recipe;

  ngOnInit() {
  }

  onRecipeAdded(){
    this.recipeService.addRecipe(this.recipe);
  }
}
