import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from "../shoppinglist.service";
import { NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list-editor',
  templateUrl: './shopping-list-editor.component.html',
  styleUrls: ['./shopping-list-editor.component.css']
})
export class ShoppingListEditorComponent implements OnInit, OnDestroy {

  @ViewChild('f') ingredientForm : NgForm;
  selectedIndex: number;
  ingredientSelectionSubscription: Subscription;
  editMode: boolean;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editMode = false;

    this.ingredientSelectionSubscription = this.shoppingListService.ingredientSelected.subscribe((selectedItem) =>{
      this.ingredientForm.form.patchValue({name: selectedItem.ingredient.name});
      this.ingredientForm.form.patchValue({amount: selectedItem.ingredient.amount});
      this.selectedIndex = selectedItem.index;
      this.editMode = true;
    });
  }

  ngOnDestroy(){
    this.ingredientSelectionSubscription.unsubscribe();
  }

  onAddIngredient(form: NgForm){
    if(form.valid) {
      if(!this.editMode) {
        this.shoppingListService.addIngredient({name: form.value.name, amount: form.value.amount});
      }
      else{
        this.shoppingListService.updateIngredient(this.selectedIndex, {name: form.value.name, amount: form.value.amount});
      }

      this.onClear(form);
    }
  }

  onDelete(form: NgForm){
    this.shoppingListService.deleteIngredient(this.selectedIndex);
    this.onClear(form);
  }

  onClear(form: NgForm){
    form.reset();
    this.editMode = false;
  }

}
