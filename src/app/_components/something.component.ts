import { Component } from '@angular/core';
import { Something} from '../_models/something.model' ; 
import { OnInit } from '@angular/core' ; 
@Component({
  selector: 'something-component',
  templateUrl: '../_templates/something.component.html',
  styleUrls: ['../_styles/something.style.css']
})
export class SomethingComponent implements OnInit {
  stuff : Array<Something> ; 
  constructor(){
  

  }
  ngOnInit() : void { 
    this.stuff = new Array<Something>() ; 
    this.stuff.push( new Something( 987623, true, "Tuesday" )) ; 
    this.stuff.push( new Something( 23456, false , "Friday")) ; 
    this.stuff.push( new Something(  86678767,true , "Sunday") ) ; 
    this.stuff.push( new Something( 493845, true, "Wednesday")) ; 
    this.stuff.push( new Something(  12, false , "Wednesday")) ; 
  }

 
  deleteSomething( somethingId : Number ): void{

  }

}
