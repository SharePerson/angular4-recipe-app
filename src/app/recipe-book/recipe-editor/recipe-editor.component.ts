import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.css']
})
export class RecipeEditorComponent implements OnInit {

  recipe: Recipe;
  recipeForm: FormGroup;
  id: number;
  editMode: boolean;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService){

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null && this.id > 0;
        this.recipe = this.recipeService.getRecipe(this.id);
        this.createRecipeForm();
      }
    );
  }

  createRecipeForm(){
    this.recipeForm = new FormGroup({
      'name': new FormControl(this.editMode? this.recipe.name: "", Validators.required),
      'imagePath': new FormControl(this.editMode? this.recipe.imagePath: "", Validators.required),
      'description': new FormControl(this.editMode? this.recipe.description: "", Validators.required)
    });
  }

  onSubmit(){
    this.recipe = new Recipe(this.editMode? this.id : 0, this.recipeForm.value.name, this.recipeForm.value.description, this.recipeForm.value.imagePath, null);

    if(this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipe);
    }
    else {
      this.recipeService.addRecipe(this.recipe);
    }

    this.onClear();
  }

  onClear(){
    this.recipeForm.reset();
    this.editMode = false;
  }
}
