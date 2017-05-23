import { Component } from '@angular/core';
//  7.2.1 import de la class Item
import { Item } from './models/item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string;
  private version: string;
  // 7.2.4 typage collection en Item[]  
  private collection: Item[];
  // 7.2.2 typage newItem
  private newItem: Item;


  constructor() {
    this.title = "Application livreur";
    this.version = "1.0";
    this.resetItem();


    this.collection = [
//  7.2.3 instance de newItem dans constructeur
      new Item({ reference: '1234', name: 'Mohamed', state: 0 }),
      new Item({ reference: '5648', name: 'Christophe', state: 1 }),
      new Item({ reference: '3578', name: 'Maria', state: 2 })

    ]

  }


  public getDetails(event: Event, param: string) {

    let elem = event.currentTarget || event.target || event.srcElement;

  }
  public createObject() {
    this.collection.push(this.newItem);
    this.resetItem();
  }

  public resetItem() {
    this.newItem = new Item({ reference: '', name: '', state: 0 });
  }
}
