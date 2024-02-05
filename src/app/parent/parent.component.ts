import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit,AfterViewInit{
  //inputforchild;
  @ViewChild('namebg') changebg:ElementRef;
  valuefromchild:string;
  message:string;
  name:string="aaushi";
  @ViewChild('lname') lastname:ElementRef;
  
  constructor() { }
  
  ngOnInit(): void {
    //console.log(this.valuefromchild);
  }
  /* acceptvaluefromchild(inputx){
    console.log(inputx);
    console.log(this.valuefromchild);
    this.valuefromchild=inputx;
  } */

 ngAfterViewInit(){
  /* console.log(this.changebg);
  this.changebg.nativeElement.style.backgroundColor="yellow";
  this.changebg.nativeElement.innerText="hello";
} */
  console.log(this.lastname);
 }

}
