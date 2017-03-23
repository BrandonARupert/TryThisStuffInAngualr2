import { Component } from '@angular/core';
import { Something} from './_models/something.model' ; 
import { OnInit } from '@angular/core' ; 
import {SomethingComponent} from './_components/something.component'  ; 
@Component({
  selector: 'app-root',
  template:'<something-component>almost there....</something-component>',
})
export class AppComponent implements OnInit {

  constructor(){
  

  }
  ngOnInit() : void { 
 
  }

}
