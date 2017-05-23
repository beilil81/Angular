import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title:string;
  private version:string;
 //2.1.1 declarer une variable collection
 private collection:any;
  constructor() {
    this.title = "Application livreur";
    this.version = "1.0";
    //2.1.2 init collection
    this.collection = [
      
        {reference: '1234', name: 'Mohamed'},
        {reference: '1234', name: 'Ben'},
        {reference: '1234', name: 'Maria'}
    ]
    
  }

}
