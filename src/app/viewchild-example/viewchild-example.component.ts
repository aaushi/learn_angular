import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-viewchild-example',
  templateUrl: './viewchild-example.component.html',
  styleUrls: ['./viewchild-example.component.scss']
})
export class ViewchildExampleComponent implements OnInit,AfterViewInit {

  @ViewChild('highlight')marker:ElementRef;

  @ViewChildren('highlightChildren')markerChildren:QueryList<any>;

  @ViewChild('childView')child:ChildComponent;
  constructor() { }
 

  ngOnInit(): void {
  }
   
  ngAfterViewInit(): void {
    this.marker.nativeElement.style.color='red';
    this.markerChildren.forEach(val=>{
      val.nativeElement.style.color='green';
    });


   }

inc(){
this.child.increment();
}

dec(){
this.child.decrement();
}

}
