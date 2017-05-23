//  11.1.1 import Output et EventEmitter
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from './models/item';


@Component({
  selector: 'itemform-component',
  templateUrl: './itemform.component.html',
  styleUrls: ['./itemform.component.css']
})
export class ItemFormComponent {
  private newItem: Item;
  constructor() {
    this.resetItem();
  }

  @Input() itemform: Item;
  @Output() createObject: EventEmitter<any> = new EventEmitter();

  public getDetails(event: Event) {
    event.preventDefault(); //pour empecher l'execution de clique

    this.createObject.emit(this.itemform); //emit() elle permet de metrre dans un evenement tout et n'importe quoi
  }

  public resetItem() {
    this.newItem = new Item({ reference: '', name: '', state: 0 });
  }
  

}
