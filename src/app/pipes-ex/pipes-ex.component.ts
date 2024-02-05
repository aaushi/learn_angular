import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-ex',
  templateUrl: './pipes-ex.component.html',
  styleUrls: ['./pipes-ex.component.scss'],
})
export class PipesExComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  filteredString:string;
  user= [
    { name: 'aaushi', age: 28 },
    { name: 'aman', age: 28 },
    { name: 'aayush', age: 28 },
    { name: 'amisha', age: 29 },
  ];

  addUser(){
    console.log(this.filteredString)
    this.user.push({ name: 'sample', age: 29 });
  }

 
}
