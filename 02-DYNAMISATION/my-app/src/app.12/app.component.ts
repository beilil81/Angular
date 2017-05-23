import { Component } from '@angular/core';
import { Item } from './models/item';
import { Config } from './config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string;
  private version: string;
  private collection: Item[];
  private newItem: Item;


  constructor() {
    this.title = Config.APP_TITLE;
    this.version = Config.APP_VERSION;
    


    this.collection =  this.collection=Config.BASE_COLLECTION;

  }


  public getDetails(item: Item) {
//  11.3.1 recuperer l'item et l'afficher dans la console   
    console.log(item);

  }
  public createObject() {
    this.collection.push(this.newItem);
    // this.resetItem();
  }

  
}
