import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  counter:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
}
