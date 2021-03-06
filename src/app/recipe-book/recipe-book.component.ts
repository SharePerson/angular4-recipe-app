import { Component, OnInit } from '@angular/core';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  recipesSavedSuccess: boolean;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipesSaved.subscribe(() => {
      this.recipesSavedSuccess = true;
      setTimeout(() => {
        this.recipesSavedSuccess = false;
      }, 5000);
    });
  }
}
