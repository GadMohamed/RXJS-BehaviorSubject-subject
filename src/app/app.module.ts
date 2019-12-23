import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { ControllersComponent } from './controllers.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FirstComponent ,SecondComponent,ControllersComponent],
  bootstrap:    [ AppComponent ],
  providers : [SharedService]
})
export class AppModule { }
