import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-editor',
  templateUrl: './shopping-list-editor.component.html',
  styleUrls: ['./shopping-list-editor.component.css']
})
export class ShoppingListEditorComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Input() selectedIndex : number;
  @Input() selectedIngredient: Ingredient;

  name: string;
  amount: number;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientDeleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.clearElements();
  }

  onAdd(){
    this.name = this.nameInput.nativeElement.value;
    this.amount = this.amountInput.nativeElement.value;

    if(this.name !== "" && this.amount > 0)
    {
      this.ingredientAdded.emit({name: this.name, amount: this.amount});
      this.clearElements();
    }
  }

  onDelete(){
    this.ingredientDeleted.emit(this.selectedIndex);
    this.clearElements();
  }

  onClear(){
    this.clearElements();
  }

  clearElements(){
    this.selectedIngredient = {name: "", amount: 0};
  }

}
