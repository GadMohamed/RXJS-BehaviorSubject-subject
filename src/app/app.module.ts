import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';
import { HelloComponent } from './hello.component';
import { HiComponent } from './hi.component';
import { ControllersComponent } from './controllers.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ,HiComponent,ControllersComponent],
  bootstrap:    [ AppComponent ],
  providers : [SharedService]
})
export class AppModule { }
