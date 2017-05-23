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
  // 5.2.1 créer fonction getDetails()
               
  public getDetails(event: Event, param:string) {
    // 5.2.2 récupérer et affiché dans un console.log $event

       console.log(event);
        // 5.2.3 variable elem pour récupérer l'element html à l'origine du click
       let elem= event.currentTarget || event.target || event.srcElement;
          //  5.2.4 afficher la valeur récupéré
        console.log(elem);
        
        //  5.2.5 afficher valeur att id
        console.log(elem['id']);
        //  5.2.6 afficher 2e argument presonnalisé  
        console.log(param);

  }
}
