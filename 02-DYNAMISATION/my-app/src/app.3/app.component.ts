import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string;
  private version: string;
  //2.1.1 declarer une variable collection
  private collection: any;
  constructor() {
    this.title = "Application livreur";
    this.version = "1.0";
    this.collection = [

      { reference: '1234', name: 'Mohamed', state: 0 },
      { reference: '5648', name: 'Christophe', state: 1 },
      { reference: '3578', name: 'Maria', state: 2 }
    ]

  }

}
