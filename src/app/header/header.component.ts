import {Component} from '@angular/core';
import {RecipeService} from "../recipe-book/recipe.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private recipeSerice: RecipeService) {

  }

  onSaveData(){
    this.recipeSerice.saveRecipes();
  }

  onFetchData(){
    this.recipeSerice.fetchRecipes();
  }
}
