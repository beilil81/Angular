import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string;
  private version: string;
  private collection: any;
  private newItem: { reference: string, name: string, state: number };


  constructor() {
    this.title = "Application livreur";
    this.version = "1.0";
    //  6.4.2 init newItem dans le constructeur
    // this.newItem = { reference: '', name: '', state: 0 };
    // 6.4.5 utiliser resetItem() dans le constructeur
    this.resetItem();


    this.collection = [

      { reference: '1234', name: 'Mohamed', state: 0 },
      { reference: '5648', name: 'Christophe', state: 1 },
      { reference: '3578', name: 'Maria', state: 2 }

    ]

  }


  public getDetails(event: Event, param: string) {


    // console.log(event);

    let elem = event.currentTarget || event.target || event.srcElement;

    // console.log(elem);
    // console.log(elem['id']);
    // console.log(param);

  }
  public createObject() {
    //let obj = { reference: '2488', name: 'Bernard McGregore', state: 0 };
    // 6.4.3  push newItem dans createObject()
    this.collection.push(this.newItem);
    //  6.4.6 utiliser resetItem dans createPbject() 
    this.resetItem();
  }

  public resetItem() {
    this.newItem = { reference: '', name: '', state: 0 };
  }
}
