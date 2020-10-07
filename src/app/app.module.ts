import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoComponent } from './two/two.component';


@NgModule({
  //all components, pipes, directives should be mentioned in Declarations
  declarations: [
    AppComponent,
    TwoComponent
  ],
  //module integrated to this module must be mentioned here
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
   //services that needed to be injected
  providers: [],
  // to specify the root components
  bootstrap: [AppComponent]
})
export class AppModule { }
