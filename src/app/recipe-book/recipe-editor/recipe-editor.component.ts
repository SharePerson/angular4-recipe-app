import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";

import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

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
  addingIngredient: boolean;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router)
  {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null && this.id > 0;
        this.recipe = this.recipeService.getRecipe(this.id);
        this.addingIngredient = false;
        this.createRecipeForm();
      }
    );
  }

  createRecipeForm(){
    this.recipeForm = new FormGroup({
      'name': new FormControl(this.editMode? this.recipe.name: "", Validators.required),
      'imagePath': new FormControl(this.editMode? this.recipe.imagePath: "", Validators.required),
      'description': new FormControl(this.editMode? this.recipe.description: "", Validators.required),
      'ingredients': new FormArray([])
    });

    if(this.editMode && this.recipe.ingredients != null && this.recipe.ingredients.length > 0) {
      for(let ingredient of this.recipe.ingredients) {
        const formGroup = new FormGroup({
          'name': new FormControl(ingredient.name, Validators.required),
          'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        });

        (<FormArray>this.recipeForm.get('ingredients')).push(formGroup);
      }
    }
  }

  onSubmit(){
    if(this.recipeForm.valid) {
      if(this.editMode) {
        this.recipeService.updateRecipe(this.id, this.recipeForm.value);
      }
      else {
        this.recipeService.addRecipe(this.recipeForm.value);
      }

      this.onClear();
    }
  }

  onClear(){
    this.recipeForm.reset();
    this.editMode = false;
    this.addingIngredient = false;
    this.router.navigate(['/recipes']);
  }

  onAddIngredientControls(){
    const formGroup = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });

    (<FormArray>this.recipeForm.get('ingredients')).push(formGroup);
  }
}
