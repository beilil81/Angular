import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
  //  10.4.1 import de ItemComponent
// import { ItemComponent} from './item.component';
import { ItemFormComponent} from './itemform.component';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    //  10.4.2 declarer la class ItemComponent dans @ngModule
    ItemFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
