import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  linkName: string;
  @Output() onNavigationChange = new EventEmitter<{link: string}>();

  constructor() {

  }

  ngOnInit() {
    this.linkName = 'recipe-book';
    this.onNavigationChange.emit({link: this.linkName});
  }

  onNavRecipeBookClick(){
    this.linkName = 'recipe-book';
    this.onNavigationChange.emit({link: this.linkName});
  }

  onNavShoppingListClick(){
    this.linkName = 'shopping-list';
    this.onNavigationChange.emit({link: this.linkName});
  }
}
