import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common' ; 
import { AppComponent } from './app.component';
import { SomethingComponent} from './_components/something.component' ; 

@NgModule({
  declarations: [
    AppComponent,
    SomethingComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
