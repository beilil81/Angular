import { Component, Output, EventEmitter } from '@angular/core';

import { Item } from './models/item';


@Component({
  selector: 'itemform-component',
  templateUrl: './itemform.component.html',
  styleUrls: ['./itemform.component.css']
})
export class ItemformComponent {
  private newItem: Item;

  constructor() {
    this.resetItem();
  }

  @Output() onCreateObject: EventEmitter<any> = new EventEmitter();

  public createObject(){
     this.onCreateObject.emit(this.newItem);//emit() elle permet de metrre dans un evenement tout et n'importe quoi
     this.resetItem();
  }

  public resetItem() {
    this.newItem = new Item({ reference: '', name: '', state: 0 });
  }
  

}
