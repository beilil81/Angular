//    10.2.1 imports de component, item, de Item et de input
import { Component,Input } from '@angular/core';

import { Item } from './models/item';

//  10.2.2 @Component pour déclarer notre composant avec un selector, un template html, un un urlStyles
        //  10.2.3 export de la class ItemComponent   
@Component({
  selector: 'item-component',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
// 10.2.4 creer @Input() item 
@Input() item:Item;
  
}
