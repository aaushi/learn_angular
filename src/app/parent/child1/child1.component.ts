import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
//@Input() valuefromParent;
takeUserInput:string;
@Output() inputfromChild=new EventEmitter<any>();
lname="gupta";
  constructor() { }

  ngOnInit(): void {
  }
  sendValuetoParent(){
    //console.log(this.takeUserInput);
    this.inputfromChild.emit(this.takeUserInput);
    //console.log(this.inputfromChild);
  }

}
